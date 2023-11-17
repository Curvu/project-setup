"""Views for the User model"""
from rest_framework import viewsets
from ..models import User
from ..serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
  """Class representing the User viewset"""

  queryset = User.objects.all()
  serializer_class = UserSerializer
