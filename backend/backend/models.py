from django.db import models
from django.contrib import admin


class User(models.Model):
    UserId = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30)
    nickname = models.CharField(max_length=30)
    password = models.CharField(max_length=255)
    type = models.IntegerField(default=1)
    email = models.CharField(max_length=255)
    avatar = models.CharField(max_length=1000, null=True)

    class Meta:
        verbose_name_plural:"用户"


class Developer(models.Model):
    UserId = models.ForeignKey(User, primary_key=True, on_delete=models.CASCADE)
    APIcount = models.IntegerField
    billings = models.FloatField


class API(models.Model):
    APIid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    address = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    price = models.FloatField


class APIorder(models.Model):
    OrderId = models.AutoField(primary_key=True)
    api = models.OneToOneField(API, on_delete=models.CASCADE)
    devId = models.ForeignKey(Developer, on_delete=models.CASCADE)
    start_date = models.DateField(auto_now_add=True)
    count = models.IntegerField()
    end_date = models.DateField()


admin.site.register(User)
admin.site.register(Developer)
admin.site.register(API)
admin.site.register(APIorder)
