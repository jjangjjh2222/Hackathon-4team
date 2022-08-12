from unittest.util import _MAX_LENGTH
from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=30) # 제목
    image = models.ImageField(blank=True, null=True, upload_to="back/movieProject/uploads")

    def __str__(self):
        return self.title


