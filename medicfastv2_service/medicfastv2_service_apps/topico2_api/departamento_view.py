from rest_framework import serializers, viewsets
#from django.db.models import Q
#from operator import __or__ as OR
#from functools import reduce

from medicfastv2_service_apps.topico2.models.departamento import Departamento


class DepartamentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Departamento
        fields = '__all__'
        # fields = ('id', 'codigo', 'nombre', 'estado',)
        # read_only_fields = ('id',)
        # exclude = ('users',)


class DepartamentoViewSet(viewsets.ModelViewSet):
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer
