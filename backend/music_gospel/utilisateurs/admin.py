from django.contrib import admin
from .models import Favori

# Register your models here.
@admin.register(Favori)
class FavoriAdmin(admin.ModelAdmin):
    list_display = ('user','id')
    list_filter = ('user',)
class FavoriInline(admin.TabularInline):
    model = Favori
    extra = 0