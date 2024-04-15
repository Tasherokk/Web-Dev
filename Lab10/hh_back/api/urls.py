from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:pk>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:pk>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]


# urlpatterns = [
#     path('companies/', CompanyListCreate.as_view()),
#     path('companies/<int:pk>/', CompanyRetrieveUpdateDestroy.as_view()),
#     path('companies/<int:id>/vacancies/', views.company_vacancies),
#     path('vacancies/', VacancyListCreate.as_view()),
#     path('vacancies/<int:pk>/', VacancyRetrieveUpdateDestroy.as_view()),
#     path('vacancies/top_ten/', views.top_ten_vacancies),
# ]
