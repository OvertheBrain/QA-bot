import json
from django.views.generic.base import TemplateView
from django.views.generic import View
from chatterbot.ext.django_chatterbot import settings
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from chatterbot import ChatBot

from .qa import qa


class ChatBotApiView(View):
    chatterbot = ChatBot(**settings.CHATTERBOT)

    def post(self, request, *args, **kwargs):
        # x = request.POST.get('message')
        # return qa(x)
        input_data = json.loads(request.body.decode('utf-8'))
        response = self.chatterbot.get_response(input_data)

        # response_data = response.serialize()
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

# def test(request):
#     res = {
#         'reply': '呵呵'
#     }
#     return HttpResponse(json.dumps(res), content_type='application/json')
