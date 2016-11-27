
app
//------------------------------
// TODO: API menu
// por lo pronto colocar aqui el menu para su Modelo, vease test1
//------------------------------
    .factory("menuService", function(authService) {


    var sections = [
        /*
        {
          title: 'Getting Started',
          state: 'getting-started',
          url: '/getting-started',
          type: 'link'
        }
        */
    ];

    sections.push({
        title: 'Principal',
        state: 'app.dashboard',
        type: 'link'
    });


    sections.push({

            menu: [{
                title: 'Historial Medico',
                type: 'toggle',
                state: 'topico2.topico2',
                menu_items: [  {
                    title: 'Historia medica',
                    state: 'topico2.topico2.historias',
                    type: 'link'
                },

                {
                    title: 'Consulta',
                    state: 'topico2.topico2.consultas',
                    type: 'link'
                },{
                    title: 'Diagnostico',
                    state: 'topico2.topico2.diagnosticos',
                    type: 'link'
                },
              
                {
                    title: 'Tratamiento',
                    state: 'topico2.topico2.tratamientos',
                    type: 'link'
                },

                {
                    title: 'recetas',
                    state: 'topico2.topico2.especificacionrecetas',
                    type: 'link'
                },






                ]
            }]
        });

        sections.push({

            menu: [{
                title: 'Mantenimiento',
                type: 'toggle',
                state: 'topico2.topico2',
                menu_items: [{
                    title: 'Medicamento',
                    state: 'topico2.topico2.medicamentos',
                    type: 'link'
                }, 

                 ]
            }]

        });





    sections.push({
        //title: 'Sección ui',
        //type: 'heading',
        menu: [{
            title: 'Reporte institucional',
            type: 'toggle',
            state: 'ui',
            menu_items: [{
                title: 'Pacientes',
                state: 'ui.test1',
                type: 'link'
            }, {
                title: 'Funciones vitales',
                state: 'ui.test2',
                type: 'link'
            }, {
                title: 'Transferencia',
                state: 'ui.test3',
                type: 'link'
            }, {
                title: 'Consulta',
                state: 'ui.test4',
                type: 'link'
            }, {
                title: 'Diagnostico',
                state: 'ui.test5',
                type: 'link'
            }, {
                title: 'Tratamiento',
                state: 'ui.dir',
                type: 'link'
            }, ]
        }]
    });

    sections.push({

        menu: [{
            title: 'Mantenimiento',
            type: 'toggle',
            state: 'auths.system',
            menu_items: [{
                title: 'Trabajadores',
                state: 'auths.system.ct',
                type: 'link'
            }, {
                title: 'Medicamentos',
                state: 'auths.system.permission',
                type: 'link'
            }, {
                title: 'CIE 10',
                state: 'auths.system.menu',
                type: 'link'
            },  ]
        }]
    });

    authService.getMenu().then(function(r) {
        menu = r.data;
        console.log("menuService.authService.getMenu():" + JSON.stringify(menu));
        sections.push(

            menu
        );

    }, function(error) {
        console.log("error in menuService.authService.getMenu():" + JSON.stringify(error));
    });








    return {
        sections: sections,
    };
});





