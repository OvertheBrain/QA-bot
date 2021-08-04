import json
from django.http import HttpResponse
from ..models import User, Developer


def getUser(request):
    post = json.loads(request.body.decode('utf-8'))
    name = post['username']
    msg = 'right'
    if User.objects.filter(username=name):
        msg = 'exist'
    data = {'msg': msg}
    return HttpResponse(json.dumps(data), content_type='application/json')


def login(request):
    post = json.loads(request.body.decode('utf-8'))
    name = post['username']
    pwd = post['password']
    # usertype为0为普通用户，usertype为1为开发者
    if User.objects.filter(username=name):
        user = User.objects.filter(username=name)[0]
        if user.password == pwd:
            userdata = 'right'
            usertype = user.usertype
            userid = user.userid
            username = user.nickname
            if usertype:
                developer = Developer.objects.filter(user_id=userid)[0]
                dev_id = developer.devid
                data = {'userdata': userdata, 'usertype': usertype, 'userid': userid, 'devid': dev_id,
                        'nickname': username}
                return HttpResponse(json.dumps(data), content_type='application/json')
            else:
                data = {'userdata': userdata, 'usertype': usertype, 'userid': userid, 'nickname': username}
                return HttpResponse(json.dumps(data), content_type='application/json')

        else:
            userdata = '密码输入错误'
    else:
        userdata = '该用户不存在'
    data = {'userdata': userdata}
    return HttpResponse(json.dumps(data), content_type='application/json')


def addUser(request):
    post = json.loads(request.body.decode('utf-8'))
    username = post['username']
    pwd = post['password']
    usertype = post['usertype']
    # usertype为0为普通用户，usertype为1为开发者
    if User.objects.filter(username=username):
        msg = 'exist'
        data = {'userdata': msg}
        return HttpResponse(json.dumps(data), content_type='application/json')
    else:
        user_obj = User(username=username, password=pwd, usertype=usertype)
        user_obj.save()
        if usertype:
            userid = user_obj.userid
            develop_obj = Developer(user_id=userid)
            develop_obj.save()
        msg = 'no exist'
    user = User.objects.filter(username=username)[0]
    usertype = user.usertype
    userid = user.userid
    if usertype:
        developer = Developer.objects.filter(user_id=userid)[0]
        dev_id = developer.devid
        data = {'userdata': msg, 'usertype': usertype, 'userid': userid, 'devid': dev_id,
                'nickname': username}
        return HttpResponse(json.dumps(data), content_type='application/json')
    else:
        data = {'userdata': msg, 'usertype': usertype, 'userid': userid, 'nickname': username}
        return HttpResponse(json.dumps(data), content_type='application/json')

