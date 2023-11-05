from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Todo

# Create your views here.
def index(request):
    todos = Todo.objects.all()
    context = {"todos" : todos}
    return render(request, 'index.html', context)

def insertTodo(request):
    todoInput = request.POST['todoInput']
    new_todo = Todo(content=todoInput)
    new_todo.save()
    return HttpResponseRedirect((reverse("index")))

def deleteTodo(request):
    todoDelete = request.GET['id']
    todo = Todo.objects.get(id=todoDelete)
    todo.delete()
    return HttpResponseRedirect((reverse("index")))

def clearTodo(request):
    todos = Todo.objects.all()
    for todo in todos:
        todo.delete()
    return HttpResponseRedirect((reverse("index"))) 