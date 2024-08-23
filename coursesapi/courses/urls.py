from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, CourseInstanceViewSet  # Ensure this import is correct

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'instances', CourseInstanceViewSet)

urlpatterns = [
    path('/api/', include(router.urls)),
]
