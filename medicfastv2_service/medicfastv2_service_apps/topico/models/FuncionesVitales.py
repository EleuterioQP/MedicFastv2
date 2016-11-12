from django.db import models
from .Consulta import Consulta


class FuncionesVitales(models.Model):

    frecuencia_cardiaca = models.IntegerField()
    frecuencia_respiratoria = models.IntegerField()
    imc = models.IntegerField()
    masa_corporal = models.IntegerField()
    peso = models.IntegerField()
    presion_arterial = models.IntegerField()
    talla = models.IntegerField()
    temperatura = models.IntegerField()
    consulta = models.ForeignKey(Consulta)

    def __str__(self):
        return u'%s' % (self.frecuencia_cardiaca)
