# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-13 06:27
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('topico', '0002_consulta_funcionesvitales'),
    ]

    operations = [
        migrations.RenameField(
            model_name='paciente',
            old_name='nombre',
            new_name='codigo',
        ),
    ]
