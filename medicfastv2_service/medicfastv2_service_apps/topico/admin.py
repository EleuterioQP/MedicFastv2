from django.contrib import admin
from .models.Departamento import Departamento
from .models.Paciente import Paciente
# Register your models here.


class DepartamentoAdmin(admin.ModelAdmin):

    """docstring for DepartamentoAdmin"""

    list_display = ("nombre", "codigo")
    search_fields = ("nombre", "codigo",)
    list_per_page = 3


class PacienteAdmin(admin.ModelAdmin):

    """docstring for PacienteAdmin"""

    list_display = ("nombre")
    search_fields = ("nombre")
    list_per_page = 3

admin.site.register(Departamento, DepartamentoAdmin)
