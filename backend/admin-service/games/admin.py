from django.contrib import admin
from .models import Club, Stadium, TournamentType, Tournament, Game

# Register your models here.

admin.site.register(Club)
admin.site.register(Stadium)
admin.site.register(TournamentType)
admin.site.register(Tournament)
admin.site.register(Game)