from django.db import models


class User(models.Model):
    user_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    hashed_password = models.CharField(max_length=255)
    xp = models.IntegerField(default=0)
    follow_count = models.IntegerField(default=0)
    follower_count = models.IntegerField(default=0)
    token = models.IntegerField(default=0)
    level = models.IntegerField(default=1)
    country = models.CharField(max_length=100, blank=True)

    class Meta:
        db_table = "user"

    def __str__(self) -> str:
        return f"{self.name} (id={self.user_id})"
