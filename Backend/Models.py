
from django.db import models

class DataPoint(models.Model):
    name = models.CharField(max_length=200)
    value = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)
