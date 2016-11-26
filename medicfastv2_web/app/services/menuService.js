
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
                menu_items: [{
                    title: 'Historia medica',
                    state: 'topico2.topico2.historias',
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
            title: 'historial medico',
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









    sections.push({

        menu: [{
            title: 'Reporte',
            type: 'toggle',
            state: 'catalogo.catalogo',
            menu_items: [{
                title: 'reporte Institucional',
                state: 'catalogo.catalogo.categorias',
                type: 'link'
            }, {
                title: 'vista',
                state: 'catalogo.catalogo.autores',
                type: 'link'
            }, ]
        }]
    });
 sections.push({

        menu: [{
            title: 'Topico',
            type: 'toggle',
            state: 'topico',
            menu_items: [{
                title: 'departamentos',
                state: 'topico.departamentos',
                type: 'link'
            },]
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





