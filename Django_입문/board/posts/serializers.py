from rest_framework import serializers

from users.serializers import ProflieSerializer
from .models import Post, Comment

class CommentSerializer(serializers.ModelSerializer):
    profile = ProflieSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('pk', 'profile', 'post', 'text')

class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('post', 'text')

class PostSerializer(serializers.ModelSerializer):
    profile = ProflieSerializer(read_only=True)
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ('pk', 'profile', 'title', 'body', 'image', 'published_date', 'likes', 'comments')

class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'category', 'body', 'image')