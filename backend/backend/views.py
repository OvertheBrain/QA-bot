import json
from django.views.generic import View
from chatterbot.ext.django_chatterbot import settings
from django.http import HttpResponse, JsonResponse
from chatterbot import ChatBot

from backend.Service.AuthService import check_auth
from backend.Service.DevService import addOrder, getOrder, getAllOrders
from backend.Service.UserService import login, getUser, addUser
from backend.models import EmailVerifyRecord, User


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
    checked = post['checked']
    data = login(name, pwd, checked)
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


def activeUserView(request, active_code):
    """
    激活用户
    :param request:get请求
    :param active_code: 邮箱收到的验证码
    :return: 激活成功的页面
    """
    # 用code在数据库中过滤处信息
    all_records = EmailVerifyRecord.objects.filter(code=active_code)
    if all_records:
        for record in all_records:
            email = record.email
            # 通过邮箱查找到对应的用户
            user = User.objects.get(email=email)
            # 激活用户
            user.is_active = 1
            user.save()
            return HttpResponse("恭喜你，激活成功!")
    else:
        return HttpResponse("该邮件已过期!")


def addOrderView(request):
    post = json.loads(request.body.decode('utf-8'))
    userid = post['userID']
    devid = post['devID']
    apiid = post['apiID']
    length = post['days']
    data = addOrder(userid, apiid, devid, length)
    return HttpResponse(json.dumps(data), content_type='application/json')


def getOrderView(request):
    post = json.loads(request.body.decode('utf-8'))
    orderID = post['orderid']
    data = getOrder(orderID)
    return HttpResponse(json.dumps(data), content_type='application/json')


def checkAuthView(request):
    post = json.loads(request.body.decode('utf-8'))
    apiname = post['APIname']
    username = post['username']
    password = post['password']
    msg = post['msg']
    err = check_auth(apiname, username, password)
    if err != "authed":
        data = {'errorType': err}
    else:
        response = ChatBot(**settings.CHATTERBOT).get_response(msg)
        data = {
            'errorType': 'authed',
            'reply': response.text,
        }

    return HttpResponse(json.dumps(data), content_type='application/json')


def getAllOrdersView(request):
    post = json.loads(request.body.decode('utf-8'))
    devID = post['devid']
    data = getAllOrders(devID)
    return HttpResponse(json.dumps(data), content_type='application/json')
