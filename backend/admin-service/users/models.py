from django.core.validators import RegexValidator
from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    FEMALE = 1
    MALE = 2
    UNKNOWN = 0
    SEX_CHOICES = {
        FEMALE: "Женский",
        MALE: "Мужской",
        UNKNOWN: "Не указан",
    }
    photo = models.ImageField(verbose_name="Фото", upload_to="userPhotos")
    gender = models.IntegerField(verbose_name="Пол", choices=SEX_CHOICES, default=FEMALE)
    birthday = models.CharField(max_length=20, verbose_name="Дата рождения", blank=True, null=True,
                                default="01.01.1970",
                                validators=[RegexValidator(regex=r'(\d{1,2})\.(\d{1,2})(?:\.(\d{4}))?')])
    phone = models.CharField(max_length=30, verbose_name="Номер телефона", blank=True, null=True,
                             default="+7 (999) 999-99-99",
                                validators=[RegexValidator(regex=r'\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}')])
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
