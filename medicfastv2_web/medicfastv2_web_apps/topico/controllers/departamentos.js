app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("DepartamentoCtrl", function($scope, $state, $stateParams, topicoService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.departamento = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        topicoService.Departamento.query(params, function(r) {
            $scope.lista = r;
            // toastr.error($scope.lista);
            //$scope.options = r.options;
            $scope.isLoading = false;
        }, function(err) {
            $log.log("Error in list:" + JSON.stringify(err));
            toastr.error(err.data.results.detail, err.status + ' ' + err.statusText);
        });
    };
    $scope.list(params);

    $scope.buscar = function() {
        params.page = 1;
        params.fields = $scope.fields;
        params.query = $scope.query;
        $scope.list(params);
    };

    $scope.onReorder = function(order) { //TODO
        $log.log('Order: ' + order);
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            topicoService.Departamento.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó el Departamento:" + JSON.stringify(d));
                toastr.success('Se eliminó lel Departamento ' + d.nombre, 'Categoría');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Categoria
// =========================================================================
// .controller("CategoriaSaveCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr) {
//     //Valores iniciales
//     $scope.categoria = {};

//     $scope.sel = function() {
//         catalogoService.Categoria.get({ id: $stateParams.id }, function(r) {
//             $scope.categoria = r;
//         }, function(err) {
//             $log.log("Error in get:" + JSON.stringify(err));
//             toastr.error(err.data.detail, err.status + ' ' + err.statusText);
//         });
//     };
//     if ($stateParams.id) {
//         $scope.sel();
//     }

//     $scope.save = function() {
//         if ($scope.categoria.id) {
//             catalogoService.Categoria.update({ id: $scope.categoria.id }, $scope.categoria, function(r) {
//                 $log.log("r: " + JSON.stringify(r));
//                 toastr.success('Se editó la categoría ' + r.nombre, 'Categoría');
//                 $state.go('catalogo.catalogo.categorias');
//             }, function(err) {
//                 $log.log("Error in update:" + JSON.stringify(err));
//                 toastr.error(err.data.detail, err.status + ' ' + err.statusText);
//             });
//         } else {
//             catalogoService.Categoria.save($scope.categoria, function(r) {
//                 $log.log("r: " + JSON.stringify(r));
//                 toastr.success('Se insertó la categoría ' + r.nombre, 'Categoría');
//                 $state.go('catalogo.catalogo.categorias');
//             }, function(err) {
//                 $log.log("Error in save:" + JSON.stringify(err));
//                 toastr.error(err.data.detail, err.status + ' ' + err.statusText);
//             });
//         }
//     };

//     $scope.cancel = function() {
//         $state.go('catalogo.catalogo.categorias');
//     };
// }); 
