import json
from django.views.generic import View
from chatterbot.ext.django_chatterbot import settings
from django.http import HttpResponse, JsonResponse
from chatterbot import ChatBot
from backend.Service.DevService import addOrder
from backend.Service.UserService import login, getUser, addUser


class ChatBotApiView(View):
    chatterbot = ChatBot(**settings.CHATTERBOT)

    def post(self, request, *args, **kwargs):
        """
        Return data corresponding to the current conversation.
        """
        input_data = json.loads(request.body.decode('utf-8'))
        response = self.chatterbot.get_response(input_data)
        res = {
            'reply': response.text,
        }
        return HttpResponse(json.dumps(res), content_type='application/json')

    def get(self, request, *args, **kwargs):
        """
        Return data corresponding to the current conversation.
        """
        return JsonResponse({
            'name': self.chatterbot.name
        })


def loginView(request):
    """
    接收前端的post请求，根据用户名密码，返回相对应的信息
    :param request: post
    :return: userdata:用户名密码是否正确的信息，usertype:用户是否为开发者
    """
    post = json.loads(request.body.decode('utf-8'))
    name = post['username']
    pwd = post['password']
    data = login(name, pwd)
    return HttpResponse(json.dumps(data), content_type='application/json')


def registerView(request):
    """
    接收前端的post请求，根据用户名密码以及用户类型，返回是否能注册相对应的用户
    :param request: post
    :return:msg:代表是否注册成功的消息
    """
    post = json.loads(request.body.decode('utf-8'))
    username = post['username']
    pwd = post['password']
    usertype = post['usertype']
    email = post['email']
    data = addUser(username, pwd, usertype, email)
    return HttpResponse(json.dumps(data), content_type='application/json')


def getuserView(request):
    """
    接收前端的post请求，根据输入的用户名查找，返回是否存在该用户的信息
    :param request: post
    :return: msg:代表是否存在该用户名的消息
    """
    post = json.loads(request.body.decode('utf-8'))
    username = post['username']
    msg = getUser(username)
    data = {'msg': msg}
    return HttpResponse(json.dumps(data), content_type='application/json')


def addOrderView(request):
    return addOrder(request)
