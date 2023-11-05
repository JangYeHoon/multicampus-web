from django.db import models

# Create your models here.
class Member(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)