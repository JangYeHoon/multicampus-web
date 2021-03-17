from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .todosdto import TodoSerializer
from .models import Todo

# Create your views here.
# class TodoViewSet(viewsets.ModelViewSet):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer

@api_view(['GET'])
def index(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def insertTodo(request):
    serializer = TodoSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteTodo(request, pk):
    todo = Todo.objects.get(id = pk)
    todo.delete()
    return Response('Deleted')

@api_view(['DELETE'])
def clearTodo(request):
    todos = Todo.objects.all()
    for todo in todos:
        todo.delete()
    return Response('Clear') 