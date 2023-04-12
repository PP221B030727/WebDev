from django.shortcuts import render

# Create your views here.
from django.http.response import JsonResponse
from api.models import *
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json




def index(request):
    return HttpResponse("<h1>Api</h1>")


@csrf_exempt
def companies(request):
    companies = Company.objects.all()
    companies_json = [i.to_json() for i in companies]

    if(request.method == 'GET'):
        return JsonResponse(companies_json, safe=False)
    if(request.method == 'POST'):
        # data = json.loads(request.body)
        # company_name = data.get('name','New Name')
        # company_description = data.get('description','new description')
        # company_city = data.get('city','new city')
        # company_address = data.get('address','new address')
        # new_company = Company.objects.create(
        #     name=company_name,
        #     description=company_description,
        #     city=company_city,
        #     company_address=company_address
        # )
        # return JsonResponse(new_company.to_json(), safe=False)
        return JsonResponse({
            'name' : "Hello World"
        })



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


def top_ten(request):
    try:
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        vacancies_json = [i.to_json() for i in vacancies]
    except:
        vacancies_json = []
    return JsonResponse(vacancies_json, safe=False)


