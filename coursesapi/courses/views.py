from rest_framework import viewsets
from .models import Course, CourseInstance
from .serializers import CourseSerializer, CourseInstanceSerializer
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Courses API!")

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseInstanceViewSet(viewsets.ModelViewSet):
    queryset = CourseInstance.objects.all()
    serializer_class = CourseInstanceSerializer
