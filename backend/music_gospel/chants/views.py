from django.shortcuts import render
from .models import Chant

# Create your views here.
def acceuil(request):
    chants = Chant.objects.all() 
    
    return render(request, 'chants/acceuil.html', {'chants': chants})
def inscription(request):
     return render(request, 'chants/inscription.html')


