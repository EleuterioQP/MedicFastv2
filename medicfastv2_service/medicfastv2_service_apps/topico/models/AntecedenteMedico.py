from django.db import models

class AntecedenteMedico(models.Model):

    archivo = models.FileField(upload_to='media/')
    estado = models.BooleanField(default=True)
    nombre = models.TextField()

    def __str__(self):
        return u'%s' % (self.nombre)
