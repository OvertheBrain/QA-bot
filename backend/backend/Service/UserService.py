import json
from django.http import HttpResponse
from ..models import User, Developer
from ..utils.email import send


def getUser(name):
    """
    getUser 根据用户名查询是否含有该用户名
    :param name: 用户名
    :return: msg=right不存在该用户名,msg=exist存在该用户名
    """
    msg = 'right'
    if User.objects.filter(username=name):
        msg = 'exist'
        return msg
    if len(name) < 3:
        msg = '用户名至少为3个字符'
    if len(name) > 6:
        msg = '用户名最多为6个字符'
    return msg


def login(name, pwd, checked):
    """
    login 根据用户名，密码，检查用户是否被激活然后登录
    :param name: 用户名
    :param pwd: 密码
    :param checked: 是否记住密码
    :return: data包含用户基本信息
    """
    # usertype为0为普通用户，usertype为1为开发者
    if User.objects.filter(username=name):
        user = User.objects.filter(username=name)[0]
        if user.password == pwd:
            userdata = 'right'
            usertype = user.usertype
            userid = user.userid
            username = user.username
            active = user.is_active
            # 账号激活才能够登录
            if active:
                if usertype:
                    developer = Developer.objects.filter(user_id=userid)[0]
                    dev_id = developer.devid
                    if checked:
                        data = {'userdata': userdata, 'usertype': usertype, 'userid': userid, 'devid': dev_id,
                                'nickname': username, 'username': username, 'password': pwd}
                    else:
                        data = {'userdata': userdata, 'usertype': usertype, 'userid': userid, 'devid': dev_id,
                                'nickname': username}
                    return data
                else:
                    if checked:
                        data = {'userdata': userdata, 'usertype': usertype, 'userid': userid, 'nickname': username,
                                'username': username, 'password': pwd}
                    else:
                        data = {'userdata': userdata, 'usertype': usertype, 'userid': userid, 'nickname': username}
                    return data
            else:
                userdata = '用户未激活'
        else:
            userdata = '密码输入错误'
    else:
        userdata = '该用户不存在'
    data = {'userdata': userdata}
    return data


def addUser(username, pwd, usertype, email):
    """
    addUser 向数据库增加用户
    :param username: 用户名
    :param pwd: 密码
    :param usertype:用户类型(0为普通用户，1为开发者)
    :param email: 邮箱地址
    :return: data包含用户基本信息
    """
    # 用户名不能使用已注册的
    if User.objects.filter(username=username):
        msg = 'exist'
        data = {'userdata': msg}
        return data
    # 邮箱不能使用已注册的邮箱
    if User.objects.filter(email=email):
        msg = 'exist email'
        data = {'userdata': msg}
        return data
    else:
        user_obj = User(username=username, password=pwd, usertype=usertype, email=email)
        ret = send(email)
        if ret == 0:
            msg = 'wrong email'
            data = {'userdata': msg}
            return data
        user_obj.save()
        msg = 'no exist'
        if usertype:
            userid = user_obj.userid
            develop_obj = Developer(user_id=userid)
            develop_obj.save()
            dev_id = develop_obj.devid
            data = {'userdata': msg, 'usertype': usertype, 'userid': userid, 'devid': dev_id,
                    'nickname': username}
            return data
        else:
            userid = user_obj.userid
            data = {'userdata': msg, 'usertype': usertype, 'userid': userid, 'nickname': username}
            return data
