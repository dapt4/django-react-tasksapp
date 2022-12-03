from django.shortcuts import render
from .serilizers import TaskSerializer
from .models import Task
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(('GET','POST'))
def list_create(request):
    try:
        if request.method == 'GET':
            tasks = Task.objects.all()
            serializer = TaskSerializer(tasks, many=True)
        elif request.method == 'POST':
            serializer = TaskSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response({"error": "internal server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(('GET','DELETE','PUT'))
def get_one_edit_delete(request, task_id):
    try:
        task = Task.objects.get(id=task_id)
        if request.method == 'GET':
            serializer = TaskSerializer(task)
        elif request.method == 'PUT':
            serializer = TaskSerializer(task, data=request.data)
            if serializer.is_valid():
                serializer.save()
        elif request.method == 'DELETE':
            task.delete()
            serializer = TaskSerializer(task)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response({"error": "internal server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
