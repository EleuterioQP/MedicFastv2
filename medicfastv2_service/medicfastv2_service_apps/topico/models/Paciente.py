from django.db import models
from .Departamento import Departamento
from .Historia import Historia
from medicfastv2_service_apps.auths.models.person import Person
from medicfastv2_service_apps.auths.models.hierarchy import Hierarchy

# Create your models here.


class Paciente(models.Model):
    codigo = models.CharField(max_length=100, null=True, blank=True)
    persona = models.ForeignKey(Person, null=True, blank=True)
    departamento = models.ForeignKey(Departamento, null=True, blank=True)
    jerarquia = models.ForeignKey(Hierarchy)
    historia = models.OneToOneField(Historia)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Paciente'
        verbose_name_plural = 'Pacientes'

    def __str__(self):
        return '%s' % (self.codigo)
