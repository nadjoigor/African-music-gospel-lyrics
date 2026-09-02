from django.shortcuts import render
from .models import Chant

# Create your views here.
def accueil(request):
    chants = Chant.objects.all() 
    
    return render(request, 'chants/acceuil.html', {'chants': chants})
