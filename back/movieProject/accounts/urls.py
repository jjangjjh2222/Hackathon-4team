from django.urls import path, include
from . import views
from rest_framework import urls

urlpatterns =[
    path('signup/', views.UserCreate.as_view()),
    path('', include('dj_rest_auth.urls')),
    path('api-auth/', include('rest_framework.urls')),
 ]

# http://localhost:8000/user/password/reset/
# http://localhost:8000/user/password/reset/confirm/
# http://localhost:8000/user/login/
# http://localhost:8000/user/logout/
# http://localhost:8000/user/user/
# http://localhost:8000/user/password/change/
# http://localhost:8000/user/token/verify/
# http://localhost:8000/user/token/refresh/

# http://localhost:8000/user/signup 회원가입
