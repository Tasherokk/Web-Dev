from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy
import json


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        company_list = Company.objects.all()
        result = [c.to_json() for c in company_list]
        return JsonResponse(result, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        # company = Company.objects.create(name=data.get('name'), description=data.get('description'),
        #                                  city=data.get('city'), address=data.get('address'))
        company = Company.objects.create(**data)
        return JsonResponse(company.to_json(), status=201)


@csrf_exempt
def company_detail(request, pk):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.update(**data)
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({}, status=204)


@csrf_exempt
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        vacancies = company.vacancies.all()
        result = [v.to_json() for v in vacancies]
        return JsonResponse(result, safe=False)


@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        result = [v.to_json() for v in vacancies]
        return JsonResponse(result, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        vacancy = Vacancy.objects.create(**data)
        return JsonResponse(vacancy.to_json(), status=201)


@csrf_exempt
def vacancy_detail(request, pk):
    try:
        vacancy = Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.update(**data)
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({}, status=204)


@csrf_exempt
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    result = [v.to_json() for v in vacancies]
    return JsonResponse(result, safe=False)