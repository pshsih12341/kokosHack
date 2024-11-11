from django.core.validators import MinValueValidator
from django.db import models

class Player(models.Model):
    STRIKER = "ST"
    DEFENDER = "DF"
    MIDFIELDER = "MF"
    GOALKEEPER = "GK"
    POSITION_CHOICES = {
        STRIKER: "Нападающий",
        DEFENDER: "Защитник",
        MIDFIELDER: "Полузащитник",
        GOALKEEPER: "Вратарь"
    }
    fullname = models.CharField(max_length=255, verbose_name="ФИО", default="Иванов Иван Иванович")
    birthday = models.DateField(verbose_name="Дата рождения")
    number = models.IntegerField(verbose_name="Номер на футболке", default=10, validators=[MinValueValidator(1)])
    position = models.CharField(max_length=2, choices=POSITION_CHOICES, verbose_name="Позиция", default=STRIKER)
    photo = models.ImageField(verbose_name="Фото", upload_to="playerPhotos")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Игрок'
        verbose_name_plural = 'Игроки'

class PlayerInfo(models.Model):
    player = models.ForeignKey("Player", on_delete=models.CASCADE, verbose_name="Игрок")
    nationality = models.CharField(max_length=255, verbose_name="Гражданство", default="Россия")
    year_in = models.IntegerField(verbose_name="Год прихода в клуб", default=2023, validators=[MinValueValidator(2020)])
    year_out = models.IntegerField(verbose_name="Год ухода из клуба", default=None, blank=True, null=True,
                                   validators=[MinValueValidator(2020)])
    games = models.IntegerField(verbose_name="Игры", default=0, validators=[MinValueValidator(0)])
    goals = models.IntegerField(verbose_name="Голы", default=0, validators=[MinValueValidator(0)])
    assists = models.IntegerField(verbose_name="Передачи", default=0, validators=[MinValueValidator(0)])
    yellow_cards = models.IntegerField(verbose_name="Желтые карточки", default=0, validators=[MinValueValidator(0)])
    red_cards = models.IntegerField(verbose_name="Красные карточки", default=0, validators=[MinValueValidator(0)])
    achievements = models.TextField(verbose_name="Награды и трофеи", default="Все награды и трофеи игрока")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Подробная информация о игроке'
        verbose_name_plural = 'Подробная информация о игроках'

class PlayerCareer(models.Model):
    YOUTH_CLUB = "YC"
    CLUB = "CL"
    NATIONAL = "NA"
    CLUB_CHOICES = {
        YOUTH_CLUB: "Молодежная команда",
        CLUB: "Клуб",
        NATIONAL: "Национальная сборная"
    }
    CLUB_PLAYER = "CP"
    LOAN_PLAYER = "LP"
    PLAYING_CHOICES = {
        CLUB_PLAYER: "Игрок клуба",
        LOAN_PLAYER: "Аренда"
    }
    player = models.ForeignKey("Player", on_delete=models.CASCADE, verbose_name="Игрок")
    club_name = models.CharField(max_length=255, verbose_name="Название клуба", default="Кокос Групп")
    club_type = models.CharField(max_length=2, choices=CLUB_CHOICES, verbose_name="Тип клуба", default=CLUB)
    playing_type = models.CharField(max_length=2, choices=PLAYING_CHOICES, verbose_name="Тип участия",
                                    default=CLUB_PLAYER, blank=True, null=True)
    year_in = models.IntegerField(verbose_name="Год прихода в клуб", default=2023, validators=[MinValueValidator(2020)])
    year_out = models.IntegerField(verbose_name="Год ухода из клуба", default=None, blank=True, null=True,
                                   validators=[MinValueValidator(2020)])
    games = models.IntegerField(verbose_name="Игры", default=0, validators=[MinValueValidator(0)], blank=True,
                                null=True)
    goals = models.IntegerField(verbose_name="Голы", default=0, validators=[MinValueValidator(0)], blank=True,
                                null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Карьера игрока'
        verbose_name_plural = 'Карьера игроков'

class PlayerStats(models.Model):
    player = models.ForeignKey("Player", on_delete=models.CASCADE, verbose_name="Игрок")
    game = models.ForeignKey("games.Game", on_delete=models.CASCADE, verbose_name="Матч")
    goals = models.IntegerField(verbose_name="Голы", default=0, validators=[MinValueValidator(0)])
    assists = models.IntegerField(verbose_name="Передачи", default=0, validators=[MinValueValidator(0)])
    yellow_cards = models.IntegerField(verbose_name="Желтые карточки", default=0, validators=[MinValueValidator(0)])
    red_cards = models.IntegerField(verbose_name="Красные карточки", default=0, validators=[MinValueValidator(0)])
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Статистика игрока'
        verbose_name_plural = 'Статистика игроков'
