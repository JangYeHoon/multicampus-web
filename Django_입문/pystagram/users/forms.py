from django import forms
from django.core.exceptions import ValidationError
from users.models import User

class LoginForm(forms.Form):
    username = forms.CharField(
        min_length=3,
        widget=forms.TextInput(
            attrs={'placeholder': '사용자명'},

        ),
    )
    password = forms.CharField(
        min_length=4,
        widget=forms.PasswordInput(
            attrs={'placeholder': '비밀번호'},
        ),
    )

class SignupForm(forms.Form):
    username = forms.CharField()
    password1 = forms.CharField(widget=forms.PasswordInput)
    password2 = forms.CharField(widget=forms.PasswordInput)
    profile_img = forms.ImageField()
    short_desc = forms.CharField()

    def clean_username(self):
        username = self.cleaned_data['username']
        if User.objects.filter(username=username).exists():
            raise ValidationError(f'이미 사용 중 입니다.')
        return username
    def clean(self):
        password1 = self.cleaned_data['password1']
        password2 = self.cleaned_data['password2']
        if password1 != password2:
            self.add_error('password2', '일치하지 않습니다.')
    def save(self):
        username = self.cleaned_data['username']
        password1 = self.cleaned_data['password1']
        profile_img = self.cleaned_data['profile_img']
        short_desc = self.cleaned_data['short_desc']
        user = User.objects.create_user(
            username=username,
            password=password1,
            profile_image=profile_img,
            short_description=short_desc,
        )
        return user