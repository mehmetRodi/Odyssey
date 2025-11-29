from rest_framework import viewsets

from core.users.models.Admin import Admin
from core.users.models.Follow import Follow
from core.users.models.User import User
from .serializers import AdminSerializer, FollowSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("user_id")
    serializer_class = UserSerializer

class FollowViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.select_related(
        "follow_id",
        "follower",
        "followee",
    ).all()
    serializer_class = FollowSerializer

class AdminViewSet(viewsets.ModelViewSet):
    queryset = Admin.objects.all().order_by("admin_id")
    serializer_class = AdminSerializer