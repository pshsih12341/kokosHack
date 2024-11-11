from django.core.validators import MinValueValidator
from django.db import models

# Create your models here.

class Club(models.Model):
    team_name = models.CharField(max_length=255, verbose_name="Название клуба", default="Кокос Групп")
    team_photo = models.ImageField(verbose_name="Логотип клуба", upload_to="clubsLogos")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Клуб'
        verbose_name_plural = 'Клубы'


class Stadium(models.Model):
    stadium_name = models.CharField(max_length=255, verbose_name="Название стадиона", default="Вернадка Парк")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Стадион'
        verbose_name_plural = 'Стадионы'

class TournamentType(models.Model):
    tournament_type = models.CharField(max_length=255, verbose_name="Тип турнира", default="Регулярный чемпионат")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Тип турнира'
        verbose_name_plural = 'Типы турниров'


class Tournament(models.Model):
    tournament_name = models.CharField(max_length=255, verbose_name="Название турнира", default="СУПЕРЛИГА F")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Турнир'
        verbose_name_plural = 'Турниры'


class Game(models.Model):
    date = models.DateField(verbose_name="Дата проведения матча")
    time = models.TimeField(verbose_name="Время проведения матча")
    club_home = models.ForeignKey("Club", on_delete=models.CASCADE, verbose_name="Домашняя команда",
                                  related_name="club_home")
    club_away = models.ForeignKey("Club", on_delete=models.CASCADE, verbose_name="Гостевая команда",
                                  related_name="club_away")
    stadium = models.ForeignKey("Stadium", on_delete=models.CASCADE, verbose_name="Стадион")
    tournament = models.ForeignKey("Tournament", on_delete=models.CASCADE, verbose_name="Турнир")
    tournament_type = models.ForeignKey("TournamentType", on_delete=models.CASCADE, verbose_name="Тип турнира")
    home_goals = models.IntegerField(verbose_name="Голы домашней команды", default=0, blank=True, null=True,
                                   validators=[MinValueValidator(0)])
    away_goals = models.IntegerField(verbose_name="Голы гостевой команды", default=0, blank=True, null=True,
                                     validators=[MinValueValidator(0)])
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Матч'
        verbose_name_plural = 'Матчи'

