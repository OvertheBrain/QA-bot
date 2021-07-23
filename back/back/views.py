import json

from django.http import HttpResponse
from django.shortcuts import render
from .qa import qa


def api(request):
    x = request.POST.get('message')
    return qa(x)


def test(request):
    res = {
        'reply': '呵呵'
    }
    return HttpResponse(json.dumps(res), content_type='application/json')
