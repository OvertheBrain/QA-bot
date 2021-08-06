from django.test import TestCase

from backend.Service.DevService import addOrder, getAllOrders
from backend.Service.UserService import getUser, addUser, login
from backend.models import User, Developer, API, APIorder
import django.test.utils


class TestUserService(TestCase):
    def setUp(self) -> None:
        User.objects.create(username='A', usertype=1, password='123')
        User.objects.create(username='c', usertype=0, password='123')
        Developer.objects.create(user_id=1)

    def test_get_exist_user(self):
        self.assertEqual('exist', getUser('A'))

    def test_get_not_exist_user(self):
        self.assertEqual('right', getUser('b'))

    def test_add_exist_user(self):
        data = addUser('A', '123', 1, '123456789@qq.com')
        self.assertEqual('exist', data['userdata'])

    def test_add_not_exist_developer(self):
        data = addUser('b', '123', 1, '123456789@qq.com')
        self.assertEqual('no exist', data['userdata'])
        self.assertEqual(3, data['userid'])
        self.assertEqual(2, data['devid'])

    def test_add_not_exist_user(self):
        data = addUser('d', '123', 0, '123456789@qq.com')
        self.assertEqual('no exist', data['userdata'])
        self.assertEqual(0, data['usertype'])
        self.assertEqual(3, data['userid'])

    def test_login(self):
        data = login('A', '123', True)
        msg = data['userdata']
        self.assertEqual('right', msg)

    def test_login_error(self):
        data = login('b', '123', False)
        self.assertEqual('该用户不存在', data['userdata'])

    def test_login_pwd_error(self):
        data = login('A', '12456', True)
        msg = data['userdata']
        self.assertEqual('密码输入错误', msg)

    def test_login_developer(self):
        data = login('A', '123', True)
        userid = data['userid']
        usertype = data['usertype']
        self.assertEqual(1, usertype)
        self.assertEqual(1, userid)

    def test_login_user(self):
        data = login('c', '123', False)
        userid = data['userid']
        usertype = data['usertype']
        self.assertEqual(0, usertype)
        self.assertEqual(2, userid)

    def test_login_remUser(self):
        data = login('c', '123', True)
        name = data['username']
        pwd = data['password']
        self.assertEqual(name, 'c')
        self.assertEqual(pwd, '123')

    def test_login_not_remUser(self):
        data = login('c', '123', False)
        self.assertIsNone(data.get('devid'))
        self.assertIsNone(data.get('name'))
        self.assertIsNone(data.get('password'))

    def test_login_remDev(self):
        data = login('A', '123', True)
        name = data['username']
        pwd = data['password']
        self.assertIsNotNone(data.get('devid'))
        self.assertEqual(name, 'A')
        self.assertEqual(pwd, '123')

    def test_login_not_remDev(self):
        data = login('A', '123', False)
        self.assertIsNotNone(data.get('devid'))
        self.assertIsNone(data.get('name'))
        self.assertIsNone(data.get('password'))


class TestDevService(TestCase):
    def setUp(self) -> None:
        User.objects.create(username='A', usertype=1, password='123')
        User.objects.create(username='c', usertype=0, password='123')
        Developer.objects.create(user_id=1)
        API.objects.create(name='api0', description='xxx')
        API.objects.create(name='api1', description='what')

    def test_add_order(self):
        data = addOrder(1, 1, 1, 30)
        userdata = data['userdata']
        self.assertEqual('success', userdata)
        self.assertEqual(1, data['devid'])
        self.assertEqual(1, data['orderid'])

    def test_get_orders(self):
        data = addOrder(1, 1, 1, 30)
        self.assertEqual('success', data['userdata'])
        self.assertEqual(1, data['devid'])
        self.assertEqual(1, data['orderid'])
        print('orders:')

    def test_get_orders_error(self):
        data = getAllOrders(1)
        self.assertEqual('no order', data['userdata'])
