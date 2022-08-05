from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewfields = ('id', 'title', 'content', 'updated_at')