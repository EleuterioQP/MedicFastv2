app

    .factory("topico2Service", function($resource, configTopico2) {
    var url = configTopico2.topico2Url;
    return {

        Historia: $resource(url + "historias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),

        Medicamento: $resource(url + "medicamentos/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),

       };
});
