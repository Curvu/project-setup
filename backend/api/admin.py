"""This module registers all models in the admin panel."""
from django.contrib import admin
from .models import User

admin.site.register(User)
