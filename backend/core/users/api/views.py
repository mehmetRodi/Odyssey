from rest_framework import viewsets

from core.users.models.User import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("user_id")
    serializer_class = UserSerializer