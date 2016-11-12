from django.contrib import admin
from .models.Departamento import Departamento
from .models.Paciente import Paciente
from .models.Historia import Historia
from .models.AntecedenteMedico import AntecedenteMedico
from .models.Consulta import Consulta
from .models.FuncionesVitales import FuncionesVitales


class DepartamentoAdmin(admin.ModelAdmin):

    """docstring for DepartamentoAdmin"""

    list_display = ("nombre", "codigo")
    search_fields = ("nombre", "codigo",)
    list_per_page = 3


class PacienteAdmin(admin.ModelAdmin):

    """docstring for PacienteAdmin"""

    list_display = ("nombre", "departamento", "persona", "jerarquia", "historia", "created_at", "updated_at")
    search_fields = ['nombre']
    list_per_page = 3

admin.site.register(Departamento, DepartamentoAdmin)
admin.site.register(Paciente, PacienteAdmin)
admin.site.register(Historia)
admin.site.register(AntecedenteMedico)
admin.site.register(Consulta)
admin.site.register(FuncionesVitales)
