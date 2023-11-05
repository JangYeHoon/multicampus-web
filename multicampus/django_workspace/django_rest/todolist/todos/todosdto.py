from rest_framework import serializers, viewsets
from .models import Todo

class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields =  ['id', 'title']