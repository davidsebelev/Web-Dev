from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

# Create your views here.

def prod_list(request):
    products = Product.objects.all()
    data = []

    for p in products:
        data.append({
            'id' : p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category_id,
        })
    return JsonResponse(data, safe=False)


def prod_detail(request, id):
    try:
        p = Product.objects.get(id = id)
        data = {
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category_id,
        }
        return JsonResponse(data)
    except:
        return JsonResponse({'error': 'Not found'}, status=404)
    
def category_list(request):
    categories = Category.objects.all()
    data = []

    for cat in categories:
        data.append({
            'id': cat.id,
            'name': cat.name
        })

    return JsonResponse(data , safe=False)



def get_category_id(request,id):
    try:
        category = Category.objects.get(id = id)
        data = {
            'id': category.id,
            'name': category.name
        }
        return JsonResponse(data)
    except:
        return JsonResponse({'error': 'Not found'}, status=404)
    
def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = []
    for p in products:
        data.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category_id,
        })
    return JsonResponse(data, safe=False)