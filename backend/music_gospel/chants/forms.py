from django import forms 
from django.contrib.auth.models import User 
from .models import Profil 

class InscriptionForms(forms.ModelForm):
    password2 = forms.CharField(widget=forms.PasswordInput,max_length=100)
    class Meta:
        model = User 
        fields = ['username','first_name','last_name','password','password2','email']

class Modification1Forms(forms.ModelForm):
    class Meta:
        model = User 
        fields = ['username','first_name','last_name','email']

class Modification2Forms(forms.ModelForm):
    
    class Meta:
        model = Profil 
        fields = ['profil_image']


class InscriptionForms(forms.ModelForm):
    password2 = forms.CharField(widget=forms.PasswordInput,max_length=100)
    class Meta:
        model = User 
        fields = ['username','first_name','last_name','password','password2','email']


class ConnexionForms(forms.ModelForm):
    valeur = forms.CharField(max_length=100)
    class Meta:
        model = User 
        fields = ['valeur','password']