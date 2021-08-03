from django.db import models
from django.contrib import admin


class User(models.Model):
    userid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30)
    nickname = models.CharField(max_length=30)
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    avatar = models.CharField(max_length=1000, null=True)
    usertype =models.IntegerField(default=1)

    def __str__(self):
        return self.username


class Developer(models.Model):
    devid = models.AutoField(primary_key=True)
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    APIcount = models.IntegerField(default=0)
    billings = models.FloatField(default=0)

    def __str__(self):
        return self.user.username


class API(models.Model):
    apiid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    address = models.CharField(max_length=100 , default="")
    description = models.CharField(max_length=1000)
    price = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class APIorder(models.Model):
    orderid = models.AutoField(primary_key=True)
    api = models.OneToOneField(API, on_delete=models.CASCADE)
    dev = models.ForeignKey(Developer, on_delete=models.CASCADE)
    start_date = models.DateField()
    count = models.IntegerField()
    end_date = models.DateField()




admin.site.register(User)
admin.site.register(Developer)
admin.site.register(API)
admin.site.register(APIorder)
