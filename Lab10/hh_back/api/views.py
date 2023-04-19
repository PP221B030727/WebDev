from django.shortcuts import render

# Create your views here.
from django.http.response import JsonResponse
from api.models import *
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from api.serializers import CompanySerializer , VacancySerializer

from rest_framework.response import Response



def index(request):
    return HttpResponse("<h1>Api</h1>")


@csrf_exempt
def companies(request):

    # companies_json = [i.to_json() for i in companies]

    if(request.method == 'GET'):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)



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
    # vacancies_json = [i.to_json() for i in vacancies]
    if(request.method == 'GET'):
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
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
    company = Company.objects.get(id=id)
    company_json = company.to_json()

    if(request.method == 'GET'):
        return JsonResponse(company_json, safe=False)
    if(request.method == 'DELETE'):
        company.delete()
        return JsonResponse({'deleted': True})

    if request.method == 'PUT':
        data = json.loads(request.body)


        company.name = data.get('name', '')
        company.description = data.get('description', '')
        company.city = data.get('city', '')
        company.address = data.get('address', '')

        company.save()
        vacancy_json = company.to_json()
        return JsonResponse(vacancy_json, safe=False)





@csrf_exempt
def get_vacancy(request, id):
    vacancy = Vacancy.objects.get(id=id)
    vacancy_json = vacancy.to_json()
    if(request.method=='GET'):
        return JsonResponse(vacancy_json, safe=False)
    if(request.method=='DELETE'):
        vacancy.delete()
        return JsonResponse({'deleted': True})
    if request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data.get('name', '')
        vacancy.description = data.get('description', '')
        vacancy.salary = data.get('salary', '')

        vacancy.save()
        vacancy_json = vacancy.to_json()
        return JsonResponse(vacancy_json, safe=False)


@csrf_exempt
def get_vacancy_by_company(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company)
        vacancies_json = [i.to_json() for i in vacancies]
    except:
        vacancies_json = []
    return JsonResponse(vacancies_json, safe=False)

@csrf_exempt
def top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    for i in vacancies:
        print(i.to_json())
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)



