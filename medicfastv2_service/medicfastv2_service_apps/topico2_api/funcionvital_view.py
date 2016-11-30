from rest_framework import serializers, viewsets
#from django.db.models import Q
#from operator import __or__ as OR
#from functools import reduce

from medicfastv2_service_apps.topico2.models.funcionvital import Funcionvital


class FuncionvitalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Funcionvital
        fields = '__all__'
        # fields = ('id', 'codigo', 'nombre', 'estado',)
        # read_only_fields = ('id',)
        # exclude = ('users',)


class FuncionvitalViewSet(viewsets.ModelViewSet):
    queryset = Funcionvital.objects.all()
    serializer_class = FuncionvitalSerializer
