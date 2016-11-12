from django.db import models
from .Historia import Historia
from medicfastv2_service_apps.auths.models.user import User



class Consulta(models.Model):

    enfermedad_actual = models.TextField()
    doctor_enfermera = models.BooleanField(default=True)
    estado = models.BooleanField(default=True)
    examen_fisico = models.TextField()
    historia = models.ForeignKey(Historia)
    usuario = models.ForeignKey(User)
    fecha =  models.DateTimeField()
    hecho = models.BooleanField(default= True)

    def __str__(self):
        return u'%s' % (self.enfermedad_actual)

