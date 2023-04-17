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
        data = json.loads(request.body)
        company_name = data.get('name','')
        company_description = data.get('description', '')
        company_city = data.get('city', ''),
        company_address = data.get('address', '')
        company = Company.objects.create(
            name=company_name,
            description=company_description,
            city=company_city,
            address=company_address
        )
        return JsonResponse(company.to_json())



@csrf_exempt
def vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [i.to_json() for i in vacancies]
    if(request.method == 'GET'):
        return JsonResponse(vacancies_json, safe=False)
    if(request.method == 'POST'):
        data = json.loads(request.body)
        vacancies_name = data.get('name' , '')
        vacancies_description = data.get('description','')
        vacancies_salary = data.get('salary','')
        vacancies_company = data.get('company','')
        print(vacancies_company)
        vacancy = Vacancy.objects.create(
            name=vacancies_name,
            description=vacancies_description,
            salary=vacancies_salary,
            company=Company(
                id=vacancies_company['id'],
                name=vacancies_company['name'],
                description=vacancies_company['description'],
                city=vacancies_company['city'],
                address=vacancies_company['address']
            ),
        )
        return JsonResponse(vacancy.to_json())



@csrf_exempt
def get_company(request , id):
    print(id)
    print(request.method)

    company = Company.objects.get(id=id)
    company_json = company.to_json()

    if(request.method == 'GET'):
        return JsonResponse(company_json, safe=False)
    if(request.method == 'DELETE'):
        company.delete()
        return JsonResponse({'deleted': True})



@csrf_exempt
def get_vacancy(request, id):
    vacancy = Vacancy.objects.get(id=id)
    vacancy_json = vacancy.to_json()
    if(request.method=='GET'):
        return JsonResponse(vacancy_json, safe=False)
    if(request.method=='DELETE'):
        vacancy.delete()
        return JsonResponse({'deleted': True})



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


