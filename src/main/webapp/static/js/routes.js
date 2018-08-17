define([], function()
{
    var loadController = function(controllerName) {
        return ["$q", function($q) {
            var deferred = $q.defer();
            require([controllerName], function() {deferred.resolve(); });
            return deferred.promise;
        }];
    };

    return{
        defaultRoutePath: '/index',
        states: [
            {
            name: "index",
            data: {
                    url: '/index',
                    templateUrl: '../partials/main.html'
                }
            },
            {
                name: "config",
                data: {
                    url: '/:node/:item',
                    templateUrl: '../partials/data.html',
                    controller: 'DataCtrl',
                    resolve: { DataCtrl: loadController("controllers/index")}
                }
            }


        ]
    };
});