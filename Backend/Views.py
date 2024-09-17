from django.shortcuts import render
from .Models import DataPoint

def index(request):
    # Collecting all data points
    data_points = DataPoint.objects.all()
    
    return render(request, 'index.html', {'data_points': data_points})