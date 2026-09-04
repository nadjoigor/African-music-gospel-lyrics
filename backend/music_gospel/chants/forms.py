from django import forms 
from django.contrib.auth.models import User 

class InscriptionForms(forms.ModelForm):
    password2 = forms.CharField(widget=forms.PasswordInput,max_length=100)
    class Meta:
        model = User 
        fields = ['username','first_name','last_name','password','password2']
        