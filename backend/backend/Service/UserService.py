import json
from django.http import HttpResponse
from ..models import User


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
    usertype = 0
    # usertype为0为普通用户，usertype为1为开发者
    if User.objects.filter(username=name):
        if User.objects.filter(username=name)[0].password == pwd:
            userdata = 'right'
            usertype = User.objects.filter(username=name)[0].usertype
        else:
            userdata = '密码输入错误'
    else:
        userdata = '该用户不存在'
    data = {'userdata': userdata, 'usertype': usertype}
    return HttpResponse(json.dumps(data), content_type='application/json')


def addUser(request):
    post = json.loads(request.body.decode('utf-8'))
    username = post['username']
    pwd = post['password']
    usertype = post['usertype']
    # usertype为0为普通用户，usertype为1为开发者
    if User.objects.filter(username=username):
        msg = 'exist'
    else:
        user_obj = User(username=username, password=pwd, usertype=usertype)
        user_obj.save()
        msg = 'no exist'
    data = {'msg': msg}
    return HttpResponse(json.dumps(data), content_type='application/json')
