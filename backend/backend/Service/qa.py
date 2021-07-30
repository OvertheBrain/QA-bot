import jieba

qaList = [{'question': '在校外如何访问图书馆的数据库等网络资源？',
           'answer': '在校师生在校园网络环境以外，可以通过设置VPN或设置代理服务器访问图书馆数据电子资源。设置VPN:学校网络信息中心默认为交大师生开通VPN服务。具体设置方法请见:https://net'
                     '.sjtu.edu.cn/wlfw/VPN.htm。设置代理服务器:请在浏览器中设定使用代理服务器，填入上服务器名：inproxy.sjtu.edu.cn端口：80或8000'
                     '，按提示输入账号和口令即可.具体设置方法请见：https://net.sjtu.edu.cn/wlfw/xywdl.htm。'},
          {'question': '在预约借书、续借、还书时本人已按规范进行相关操作，但系统的借阅信息没有相应更新，怎么办？',
           'answer': '可以直接到各馆服务台咨询工作人员，或者致电总咨询台（34206188），提供你的姓名、学院和学号以及相关书籍名称等，进行情况说明后，请工作人员协助解决。'
           },
          {'question': '图书馆勤工助学和志愿者活动如何报名？',
           'answer': '图书馆勤工助学报名通知一般于学期初在图书馆公众号或者同去网上发布。关于志愿者活动，周一至周五可在同去网https://tongqu.me'
                     '/，搜索“图书馆志愿者”直接报名参加。如有相关问题，可于周一至周五18：30-21：30前往图书馆学生管理委员会办公室（主馆E203）咨询。 '
           },
          {'question': '毕业校友或校外人士如何访问图书馆？',
           'answer': '交大校友：可通过校友会办理校友卡作为入馆证件进馆阅览图书。其他服务请见图书馆主页校友专栏：https://www.lib.sjtu.edu.cn/f/content/detail.shtml'
                     '?id=5938&lang=zh-cn。 '
           },
          {'question': '图书馆借的书籍是否可以异地、异馆归还？',
           'answer': '当前读者从上海交通大学闵行校区主图书馆、包玉刚图书馆、李政道图书馆和徐汇校区社科图书馆借的书籍，均可以异地异馆归还。'
           },

          ]


def wordCmr(list1, list2):
    s = 0
    for x in list1:
        for y in list2:
            if x == y:
                s = s + 1
    print(list1,list2,s)
    return s


def qa(text):
    if text is None:
        return "s"
    list1 = fenci(text)
    bestcmridx = 0
    bestcmrdata = 0
    for x in range(0, 5):
        tmp = wordCmr(list1, qaList[x]['question'])
        if tmp > bestcmrdata:
            bestcmrdata = tmp
            bestcmridx = x

    return qaList[bestcmridx]['answer'];


def fenci(text):
    word = jieba.lcut(text, cut_all=False)

    return word
