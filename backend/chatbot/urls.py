from django.urls import path
from .views import chat
from . import views

urlpatterns = [
    path('chat/',chat),
    path("update_summary/",views.update_summary),
]
