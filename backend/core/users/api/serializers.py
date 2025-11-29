from rest_framework import serializers

from core.users.models.User import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "user_id",
            "name",
            "hashed_password",
            "xp",
            "follow_count",
            "follower_count",
            "token",
            "level",
            "country",
        ]
        extra_kwargs = {
            "hashed_password": {"write_only": True},
        }
