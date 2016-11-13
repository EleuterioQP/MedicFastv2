from django.conf.urls import url, include
from rest_framework import routers
from .views.Departamento import DepartamentoViewSet

app_name = 'topico'

router = routers.DefaultRouter()

router.register(r'departamentos', DepartamentoViewSet)


urlpatterns = [
    #url(r'^topico/', namespace='app_topico' ),

    url(r'^', include(router.urls)),

]
