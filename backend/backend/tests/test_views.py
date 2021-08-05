from django.test import TestCase

from backend.models import User, Developer


class TestLoginView(TestCase):
    def setUp(self) -> None:
        User.objects.create(username='A', usertype=1, password='123')
        User.objects.create(username='c', usertype=0, password='123')
        Developer.objects.create(user_id=1)

