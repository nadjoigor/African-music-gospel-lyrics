from django.urls import path
from . import views

urlpatterns = [
    path('', views.acceuil, name='acceuil'),
    path('inscription', views.inscription, name='inscription'),
    path('apropro/', views.apropos, name='apropos'), 
    path('profil/',views.profil,name='profil'),
    path('lyrics/',views.lyrics,name='lyrics'),
    path('detail/<int:id>/',views.detail,name='detail'),
    path('connexion/',views.connexion,name='connexion'),
    path('deconnexion/',views.deconnexion,name='deconnexion'),
    path('modification/',views.modification,name='modification')
]