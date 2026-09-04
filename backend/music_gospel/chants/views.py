from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpRequest
from django.contrib.auth import login,logout  
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User 
from .models import Chant
from .forms import InscriptionForms 
from django.contrib import messages 
# Create your views here.
def acceuil(request):
    chants = Chant.objects.all() 
    
    return render(request, 'chants/acceuil.html', {'chants': chants})
def inscription(request:HttpRequest):
    if request.method == 'POST':
        form = InscriptionForms(request.POST)
        password1 = form.cleaned_data['password']
        password2 = form.cleaned_data['password2']
        
        if password1!=password2:
            messages.error(request,'Les mots de passes sont incorrects')
    else:
        form = InscriptionForms()
    return render(request, 'chants/inscription.html',{'form':form})



def apropos(request):
    return render(request, 'chants/apropos.html')

@login_required(login_url='connexion')
def profil(request:HttpRequest):
    utilisateur = request.user
    return render(request,'chants/profil.html',{'utilisateur':utilisateur})

def connexion(request):

    return render(request,'chants/connexion.html')

def lyrics(request):
    return render(request,'chants/lyrics.html')

def deconnexion(request):
    logout(request)
    return render(request,'chants/acceuil.html')

