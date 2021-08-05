from django.test import TestCase

from backend.models import User, Developer


class TestUser(TestCase):
    def setUp(self) -> None:
        User.objects.create(username='A', password='123', usertype=1, email='12345678@qq.com')
        Developer.objects.create(user_id=1)

    def test_user_model(self):
        user = User.objects.get(username='A')
        usertype = user.usertype
        pwd = user.password
        self.assertEqual('123', pwd)
        self.assertEqual(1, usertype)
