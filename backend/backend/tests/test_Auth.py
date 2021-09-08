from django.test import TestCase
from backend.models import User, Developer, API, APIorder
from backend.Service.AuthService import check_auth
import time

class test_Auth(TestCase):
    def setUp(self) -> None:
        Developer.objects.create(username='A', password='123', usertype=1, email='1234567854@qq.com')
        API.objects.create(name='api0', description='good', address='')
        API.objects.create(name='api1', description='good2', address='')
        APIorder.objects.create(dev_id=1, api_id=1, end_date='2021-10-13 14:55:00')
        APIorder.objects.create(dev_id=1, api_id=2, end_date='2021-08-13 14:55:00')

    def test_auth_1(self):  # developer not exist
        self.assertEqual(check_auth('api0', 'B', '123'), "developer not exist or password not right")

    def test_auth_2(self):  # password fail
        self.assertEqual(check_auth('api0', 'A', '1234'), "developer not exist or password not right")

    def test_auth_3(self):  # order not exist
        self.assertEqual(check_auth('api2', 'A', '123'), "order not exist")

    def test_auth_4(self):  # order out of date
        self.assertEqual(check_auth('api1', 'A', '123'), "order out of date")

    def test_auth_5(self):  # too frequent
        check_auth('api0', 'A', '123')
        self.assertEqual(check_auth('api0', 'A', '123'), "call too frequent")

    def test_auth_6(self):  # correct
        time.sleep(3)
        self.assertEqual(check_auth('api0', 'A', '123'), "authed")
