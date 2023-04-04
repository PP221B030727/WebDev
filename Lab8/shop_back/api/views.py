from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    return render(request, 'products/index.html')

def products(request):
    return render(request, 'products/products.html')

def categories(request):
    return render(request, 'products/categories.html')