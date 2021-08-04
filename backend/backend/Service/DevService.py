import json
from django.http import HttpResponse
from ..models import User
from ..models import Developer
from ..models import API
from ..models import APIorder
import datetime

def addOrder(request):
    post = json.loads(request.body.decode('utf-8'))
    userid = post['userID']
    devid = post['devID']
    apiid = post['apiID']
    start_time = datetime.datetime.now()
    now = start_time.strftime('%Y-%m-%d %H:%M')
    print('start_date:'+now)