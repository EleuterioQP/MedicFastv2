from rest_framework import serializers, viewsets
#from django.db.models import Q
#from operator import __or__ as OR
#from functools import reduce

from medicfastv2_service_apps.topico2.models.antecedentemedico import Antecedentemedico


class AntecedentemedicoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Antecedentemedico
        fields = '__all__'
        # fields = ('id', 'codigo', 'nombre', 'estado',)
        # read_only_fields = ('id',)
        # exclude = ('users',)


class AntecedentemedicoViewSet(viewsets.ModelViewSet):
    queryset = Antecedentemedico.objects.all()
    serializer_class = AntecedentemedicoSerializer
