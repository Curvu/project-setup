"""User serializer"""
from rest_framework import serializers
from ..models import User

class UserSerializer(serializers.ModelSerializer):
  """Class representing the user serializer"""

  class Meta:
    """Class representing the user serializer metadata"""

    model = User
    fields = ['id', 'name', 'email', 'birthdate']
