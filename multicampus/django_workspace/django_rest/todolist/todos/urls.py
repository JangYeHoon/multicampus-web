from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="todos"),
    path('insert/', views.insertTodo, name="insert"),
    path('delete/<str:pk>/', views.deleteTodo, name="delete"),
    path('clear/', views.clearTodo, name="clear"),
]