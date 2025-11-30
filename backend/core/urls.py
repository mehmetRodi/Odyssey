from django.urls import include, path

urlpatterns = [
    path("", include("core.users.api.urls")),
]
