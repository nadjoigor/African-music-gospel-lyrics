from django.contrib import admin
from .models import Chant,Profil

# Register your models here.
@admin.register(Chant)
class ChantAdmin(admin.ModelAdmin):
    list_display = ('titre', 'artiste', 'langue','theme','lien')
    list_filter = ('langue','theme','lien')# Filtres à droite
    search_fields = ('titre', 'artiste')# Barre de recherche
    list_per_page = 30 # 30 chants par page
    fieldsets = (
        ('Informations du Chant', {
            'fields': ('titre', 'artiste')
        }),
        ('Classification', {
            'fields': ('langue', 'theme', 'lien')
        }),
        ('Paroles', {
            'fields': ('paroles',),
            'classes': ('wide',) # Pour avoir un grand champ texte
        }),
    )
admin.site.register(Profil)


