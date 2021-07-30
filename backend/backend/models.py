from django.db import models
from django.contrib import admin


class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30)
    nickname = models.CharField(max_length=30)
    password = models.CharField(max_length=255)
    type = models.CharField(max_length=20,default='普通用户')
    email = models.CharField(max_length=255)
    avatar = models.CharField(max_length=1000, null=True)

    class Meta:
        verbose_name_plural:"用户"


class Developer(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=255)


class API(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=1000)
    price = models.IntegerField


class APIorder(models.Model):
    id = models.AutoField(primary_key=True)
    api = models.OneToOneField(API, on_delete=models.CASCADE)
    devId = models.ForeignKey(Developer, on_delete=models.CASCADE)
    start_date = models.DateField(auto_now_add=True)
    count = models.IntegerField()
    end_date = models.DateField()


admin.site.register(User)
admin.site.register(Developer)
admin.site.register(API)
admin.site.register(APIorder)
