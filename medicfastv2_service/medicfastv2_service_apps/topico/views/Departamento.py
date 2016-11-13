from rest_framework import viewsets
from ..models.Departamento import Departamento
from ..serializers.Departamento import DepartamentoSerializer



class DepartamentoViewSet(viewsets.ModelViewSet):
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer
