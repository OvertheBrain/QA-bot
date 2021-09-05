import jieba
from ..models import APIorder, Record


# 提问词语频率统计

def word_frec_stat(api_order_id, start_time, end_time):
    apiorder=APIorder.objects.get(orderid = api_order_id)
    record=Record.objects.get(apiorder = apiorder)

# 提问时间频率统计
