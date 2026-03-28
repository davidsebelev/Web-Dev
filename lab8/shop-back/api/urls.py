from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.prod_list),
    path('products/<int:id>/', views.prod_detail),
    path('categories/', views.category_list),
    path('categories/<int:id>/', views.get_category_id),
    path('categories/<int:id>/products/', views.category_products)
]