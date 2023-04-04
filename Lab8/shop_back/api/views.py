from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from django.http.response import JsonResponse
from api.models import *


def index(request):
    return render(request, 'products/index.html')

def products(request):
    prod = Product.objects.all()
    products_json = [p.to_json() for p in prod]
    return JsonResponse(products_json, safe=False)

def categories(request):
    cate = Category.objects.all()
    categories_json = [c.to_json() for c in cate]
    return JsonResponse(categories_json, safe=False)

def get_product(request, id):
    prod = Product.objects.get(id=id)
    product_json = prod.to_json()
    return JsonResponse(product_json, safe=False)

def get_category(request, id):
    cate = Category.objects.get(id=id)
    category_json = cate.to_json()
    return JsonResponse(category_json, safe=False)

