from django.shortcuts import render,redirect,resolve_url
from django.http import HttpResponse,HttpRequest
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.db.models import Q 
from .models import Chant
from .forms import InscriptionForms,ConnexionForms
from .models import Profil 

# Create your views here.
def acceuil(request):
    
    return render(request, 'chants/acceuil.html')
def inscription(request:HttpRequest):
    message = ''
    if request.method == 'POST':
        form = InscriptionForms(request.POST)
        
        if form.is_valid():
            password1 = form.cleaned_data['password']
            password2 = form.cleaned_data['password2']
            if password1!=password2:
                message = 'Les mots de passes ne sont pas identiques'
                return 
            else:
                utilisateur = User.objects.create_user(
                username=form.cleaned_data['username'],
                email=form.cleaned_data['email'],
                password=form.cleaned_data['password'],
                first_name=form.cleaned_data['first_name'],
                last_name=form.cleaned_data['last_name'],
            )
                Profil.objects.create(user=utilisateur)
                login(request,utilisateur)
                return redirect('profil',)
        else:
            print(form.errors)
            message='Formulaire non valides'
    else:
        form = InscriptionForms()
    return render(request, 'chants/inscription.html',{'form':form,'message':message})



def apropos(request):
    return render(request, 'chants/apropos.html')

@login_required(login_url='connexion')
def profil(request:HttpRequest):
    utilisateur = request.user
    profil = Profil.objects.get(user=utilisateur)
    return render(request,'chants/profil.html',{'utilisateur':utilisateur,'profil':profil})

def connexion(request):
    message = ''
    if request.method == 'POST':
        form = ConnexionForms(request.POST)
        
        if form.is_valid():
            user = form.cleaned_data['valeur']
            password = form.cleaned_data['password']
            if '@gmail.com' in user:
                utilisateur= authenticate(request,email=user,password=password)
                if utilisateur is not None:
                    login(request,utilisateur)
                    return redirect('profil')
            else:
                utilisateur = authenticate(request,username=user,password=password)
                if utilisateur is not None:
                    login(request,utilisateur)
                    return redirect('profil')
        else:
            message = 'Identifiants incorrects'
    else:
        form = ConnexionForms()   
    return render(request,'chants/connexion.html',{'form':form,'message':message})

def lyrics(request):
    louange = Chant.objects.filter(theme='LOUANGE')
    adoration = Chant.objects.filter(theme='ADORATION')
    grace = Chant.objects.filter(theme='GRACE')
    return render(request,'chants/lyrics.html',{'louange':louange,'adoration':adoration,'grace':grace})

def detail(request,id):
    chant = Chant.objects.get(id=id)
    return render(request,'chants/detail.html',{'chant':chant})

def modification(request):
    if request.method=='POST':
        form = InscriptionForms(request.POST,instance=request.user)
        

def deconnexion(request):
    logout(request)
    return render(request,'chants/acceuil.html')

