from django.shortcuts import render

def login(request):
    if request.method == "POST":
        pass
    # request == POST
    # 로그인 시키기
    else :
        return render(request, 'login.html')
    # request == GET
    # login html 띄우기
