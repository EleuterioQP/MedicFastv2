from django.db import models

# Create your models here.


class Departamento(models.Model):
    codigo = models.CharField(max_length=10)
    nombre = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Departamento'
        verbose_name_plural = 'Departamentos'

    def __str__(self):
        return '%s' % (self.nombre)
