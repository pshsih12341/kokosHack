from django.contrib import admin
from .models import Player, PlayerInfo, PlayerCareer, PlayerStats
# Register your models here.

admin.site.register(Player)
admin.site.register(PlayerInfo)
admin.site.register(PlayerCareer)
admin.site.register(PlayerStats)