from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('insertTodo/', views.insertTodo, name='insertTodo'),
    path('deleteTodo/', views.deleteTodo, name='deleteTodo'),
    path('clearTodo/', views.clearTodo, name='clearTodo'),
]
