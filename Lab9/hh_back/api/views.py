from django.shortcuts import render

# Create your views here.
from django.http.response import JsonResponse
from api.models import *
from django.http import HttpResponse
def index(request):
    return HttpResponse("<h1>Api</h1>")



def companies(request):
    companies = Company.objects.all()
    companies_json = [i.to_json() for i in companies]
    return JsonResponse(companies_json, safe=False)

def vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [i.to_json() for i in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def get_company(request , id):
    try:
        company = Company.objects.get(id=id)
        company_json = company.to_json()
    except:
        company_json = []

    return JsonResponse(company_json, safe=False)

def get_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        vacancy_json = vacancy.to_json()
    except:
        vacancy_json = []
    return JsonResponse(vacancy_json, safe=False)


def get_vacancy_by_company(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company)
        vacancies_json = [i.to_json() for i in vacancies]
    except:
        vacancies_json = []
    return JsonResponse(vacancies_json, safe=False)

