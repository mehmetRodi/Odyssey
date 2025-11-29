from django.db import models

class User(models.Model):
    NORMAL = 1
    PREMIUM = 2
    CREATOR = 3

    USER_TYPE_CHOICES = [
        (NORMAL, "Normal"),
        (PREMIUM, "Premium"),
        (CREATOR, "Content Creator"),
    ]

    user_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    hashed_password = models.CharField(max_length=255)
    xp = models.IntegerField(default=0)
    follow_count = models.IntegerField(default=0)
    follower_count = models.IntegerField(default=0)
    token = models.IntegerField(default=0)
    level = models.IntegerField(default=1)
    country = models.CharField(max_length=100, blank=True)
    user_type = models.PositiveSmallIntegerField(
        choices=USER_TYPE_CHOICES,
        default=NORMAL,
    )
    tour_count = models.IntegerField(default=0)
    rating = models.FloatField(default=0.0)

    class Meta:
        db_table = "user"

    def __str__(self):
        return f"{self.name} (id={self.user_id})"
