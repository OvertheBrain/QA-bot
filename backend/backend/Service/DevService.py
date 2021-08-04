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
    length = post['days']
    count = 0
    apiid = 1
    start_time = datetime.datetime.now().strftime('%Y-%m-%d %H:%M')
    print('start_date:'+start_time)
    end_time = (datetime.datetime.now() + datetime.timedelta(days=length)).strftime("%Y-%m-%d %H:%M")
    print(end_time)
    order_obj = APIorder(dev_id=devid, start_date= start_time, end_date= end_time, count=count, api_id= 2)
    try:
        order_obj.save()
    except Exception:
        print("add order error")
        msg = 'error'
        data = {'userdata': msg}
        return HttpResponse(json.dumps(data), content_type='application/json')
    else:
        msg = 'success'
        orderID = order_obj.orderid
        data = {'userdata': msg, 'devid': devid, 'orderid': orderID}
        return HttpResponse(json.dumps(data), content_type='application/json')