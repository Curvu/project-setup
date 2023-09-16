"""User model"""
from django.db import models

class User(models.Model):
  """Class representing a user"""

  name = models.CharField(max_length=50)
  email = models.EmailField()
  birthdate = models.IntegerField()

  def __str__(self):
    return f"{self.name}"