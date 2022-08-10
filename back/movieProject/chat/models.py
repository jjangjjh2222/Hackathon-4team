from django.db import models
from django.utils.formats import localize
from accounts.models import User
from movieApp.models import Movie


class Chat(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    content = models.CharField(max_length=200)
    on_created = models.DateTimeField(auto_now_add=True)
    movie = models.ForeignKey(Movie, blank=True, null=True, on_delete = models.CASCADE)
    

    def __str__(self):
        return self.user.nickname + " " + self.content + " " + localize(self.on_created)
