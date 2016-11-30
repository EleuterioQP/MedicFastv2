from rest_framework import serializers, viewsets
#from django.db.models import Q
#from operator import __or__ as OR
#from functools import reduce

from medicfastv2_service_apps.topico2.models.paciente import Paciente


class PacienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Paciente
        fields = '__all__'
        # fields = ('id', 'codigo', 'nombre', 'estado',)
        # read_only_fields = ('id',)
        # exclude = ('users',)


class PacienteViewSet(viewsets.ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer
