from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_create),
    path('task/<int:task_id>', views.get_one_edit_delete)
]
