from django.shortcuts import render
from .qa import qa


def hello(request):
    context = {'reply': qa(request.GET.get('message'))}
    return render(request, 'index.html', context)
