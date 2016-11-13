 
app
//==================================
// ui app routers
//==================================
    .config(function($stateProvider) {

    $stateProvider
    //==================================
    // ui layout base
    //==================================
        .state('topico', {
        url: '/topico',
        views: {
            '': {
                templateUrl: 'app/views/layout.html'
            },
            'aside': {
                templateUrl: 'app/views/aside.html'
            },
            'content': {
                templateUrl: 'app/views/content.html'
            }
        }
    })

    //==================================
    // test1
    //==================================
    .state("topico.departamentos", {
        url: "/departamentos",
        data: { section: 'topico', page: 'Test 1 uno más' },
        settings: {
            //loginRequired: true,
            //roles: ['User'],
        },
        templateUrl: "medicfastv2_web_apps/topico/views/departamentos/index.html",
        resolve: {
            //checkSecurity: checkSecurity,
        },

    })

    //==================================
    // test
    //==================================


    ;
}); 
