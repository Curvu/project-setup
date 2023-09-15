from django.db import models

# Create your models here.
class User(models.Model):
  nome = models.CharField(max_length=50)
  email = models.EmailField()
  idade = models.IntegerField()

  def __str__(self):
    return self.nome