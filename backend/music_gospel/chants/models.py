from django.db import models
import pycountry

# Create your models here.


class Chant(models.Model):
    THEMES = [
    ('LOUANGE', 'Louange'),
    ('ADORATION', 'Adoration'),
    ('GRACE', 'Action de grâce')
    ]
    LANGUAGE_CHOICES = sorted(
    [(lang.alpha_3, lang.name) for lang in pycountry.languages if hasattr(lang, 'alpha_3')],
    key=lambda x: x[1]
)
    titre = models.CharField(max_length=200)
    artiste = models.CharField(max_length=200)
    # On stocke le code ISO à 3 lettres (ex: 'fra' pour le français)
    langue = models.CharField(max_length=3, choices=LANGUAGE_CHOICES, default='fra')
    theme = models.CharField(max_length=20, choices=THEMES, default='LOUANGE')
    paroles = models.TextField()
    lien = models.URLField(blank=True,null=True)
    
    def __str__(self):
        return f"{self.titre} {self.artiste} {self.get_langue_display()} "


