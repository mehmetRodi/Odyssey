from django.urls import include, path

urlpatterns = [
    path("users/", include("core.users.api.urls")),
]
