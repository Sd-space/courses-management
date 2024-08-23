from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from courses import views

router = DefaultRouter()
router.register(r'courses', views.CourseViewSet)
router.register(r'instances', views.CourseInstanceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('coursesapi.urls')),
    path('', views.home),  # This will handle the root URL
]
