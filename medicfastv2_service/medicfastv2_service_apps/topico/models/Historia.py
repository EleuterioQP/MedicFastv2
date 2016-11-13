from django.db import models
from medicfastv2_service_apps.auths.models.user import User
from medicfastv2_service_apps.topico.models.AntecedenteMedico import AntecedenteMedico

class Historia(models.Model):

    estado = models.BooleanField(default=True)
    fecha_apertura = models.DateTimeField()
    numero = models.PositiveIntegerField()
    usuario = models.ForeignKey(User)
    antecedente = models.ForeignKey(AntecedenteMedico)

    def __str__(self):
        return u'%s' % (self.numero)
