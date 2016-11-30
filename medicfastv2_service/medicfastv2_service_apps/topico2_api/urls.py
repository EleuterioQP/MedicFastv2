from django.conf.urls import url, include
from rest_framework import routers

from .historia_view import HistoriaViewSet
from .consulta_view import ConsultaViewSet
from .diagnostico_view import DiagnosticoViewSet
from .especificacionreceta_view import EspecificacionRecetaViewSet
from .medicamento_view import MedicamentoViewSet
from .tratamiento_view import TratamientoViewSet
from .paciente_view import PacienteViewSet
from .departamento_view import DepartamentoViewSet
from .funcionvital_view import FuncionvitalViewSet
from .antecedentemedico_view import AntecedentemedicoViewSet

router = routers.DefaultRouter()

router.register(r'historias', HistoriaViewSet, 'historias-view')
router.register(r'consultas', ConsultaViewSet, 'consultas-view')
router.register(r'diagnosticos', DiagnosticoViewSet, 'diagnosticos-view')
router.register(r'especificacionrecetas',
                EspecificacionRecetaViewSet, 'especificacionrecetas-view')
router.register(r'medicamentos', MedicamentoViewSet, 'medicamentos-view')
router.register(r'tratamientos', TratamientoViewSet, 'tratamientos-view')
router.register(r'pacientes', PacienteViewSet, 'pacientes-view')
router.register(r'departamentos', DepartamentoViewSet, 'departamentos-view')
router.register(r'funcionvitals', FuncionvitalViewSet, 'funcionvitals-view')
router.register(r'antecedentemedicos', AntecedentemedicoViewSet,
                'antecedentemedicos-view')

urlpatterns = [

    url(r'^', include(router.urls)),



]
