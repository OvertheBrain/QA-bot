import json
from django.http import HttpResponse
from ..models import User

def getUser(request):
    tmp = User.objects.filter(username='A')
    data = [{'name': obj.username, 'pass': obj.password} for obj in tmp]
    return HttpResponse(json.dumps(data), content_type='application/json')