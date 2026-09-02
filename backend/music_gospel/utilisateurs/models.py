from django.db import models
from django.contrib.auth.models import User 
from chants.models import Chant
# Create your models here.
class Favori(models.Model): # Nouveau: les favoris sont par utilisateur
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favoris')
    chant = models.ManyToManyField(Chant)
    

