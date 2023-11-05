from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Todo
from .forms import TodoForm

# Create your views(controller)
# request로부터 parameter값 받아서 valid check
# business method 호출
# view(template)에서 참조할 데이터 저장
# view(template) 선택
# todo_app/
def index(request):
    todos = Todo.objects.all()
    context = {"todos" : todos}
    return render(request, 'todo_app/index.html', context)

# todo_app/createTodo
def createTodo(request):
    # todoContent = request.POST['todoContent']
    # new_todo = Todo(content=todoContent)
    new_todo = TodoForm(request.POST)
    new_todo.save()
    return HttpResponseRedirect((reverse("index")))

# todo_app/deleteTodo
def deleteTodo(request):
    delete_todo_id = request.GET['id']
    todo = Todo.objects.get(id=delete_todo_id)
    todo.delete()
    return HttpResponseRedirect((reverse("index")))