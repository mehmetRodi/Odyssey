from rest_framework import serializers

from core.users.models.Admin import Admin
from core.users.models.Follow import Follow
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

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ["follow_id", "follower", "followee"]

    def validate(self, attrs):
        follower = attrs.get("follower")
        followee = attrs.get("followee")
        if follower == followee:
            raise serializers.ValidationError(
                "A user cannot self follow."
            )
        if Follow.objects.filter(follower=follower, followee=followee).exists():
            raise serializers.ValidationError(
                "Already following this user."
            )
        return attrs

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = [
            "admin_id",
            "name",
            "hashed_password",
        ]
        extra_kwargs = {
            "hashed_password": {"write_only": True},
        }
