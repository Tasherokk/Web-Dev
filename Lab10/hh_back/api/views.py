from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
import json


# Class Based Views
class CompanyListCreate(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
        # res = JsonResponse(serializer.data, safe=False)
        # res['origin'] = 'http://127.0.0.1:4200'
        # res['Access-Control-Allow-Origin'] = 'http://127.0.0.1:4200'
        # return res

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False, status=201)
        return JsonResponse(serializer.errors, status=400)


class CompanyRetrieveUpdateDestroy(APIView):
    def get_object(self, pk):
        try:
            return Company.objects.get(pk=pk)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=404)

    def get(self, request, pk):
        company = self.get_object(pk)
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk):
        company = self.get_object(pk)
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)

    def delete(self, request, pk):
        company = self.get_object(pk)
        company.delete()
        return JsonResponse({"deleted": True}, status=204)


class VacancyListCreate(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False, status=201)
        return JsonResponse(serializer.errors, status=400)


class VacancyRetrieveUpdateDestroy(APIView):
    def get_object(self, pk):
        try:
            return Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=404)

    def get(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data, safe=False)

    def put(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)

    def delete(self, request, pk):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return JsonResponse({"deleted": True}, status=204)





@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        # company_list = Company.objects.all()
        # result = [c.to_json() for c in company_list]
        # return JsonResponse(result, safe=False)
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        # data = json.loads(request.body)
        # company = Company.objects.create(name=data.get('name'), description=data.get('description'),
        #                                  city=data.get('city'), address=data.get('address'))
        # company = Company.objects.create(**data)
        # return JsonResponse(company.to_json(), status=201)
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, pk):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.update(**data)
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted": True}, status=204)


@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        # result = [v.to_json() for v in vacancies]
        return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'POST'])
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        # result = [v.to_json() for v in vacancies]
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False, status=201)
        return JsonResponse(serializer.errors, status=400)
        # data = json.loads(request.body)
        # vacancy = Vacancy.objects.create(**data)
        # return JsonResponse(vacancy.to_json(), status=201)


@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, pk):
    try:
        vacancy = Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.update(**data)
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({"deleted": True}, status=204)


@api_view(['GET'])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    # result = [v.to_json() for v in vacancies]
    return JsonResponse(serializer.data, safe=False)