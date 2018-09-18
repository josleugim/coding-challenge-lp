'use strict';
angular.module('myApp')
    .factory('ProductService', ['$q', '$http', '$location', ProductService]);

function ProductService($q, $http, $location) {
    var host = 'http://' + $location.host() + ':4000/';
    return {
        post: post,
        get: get
    };

    function post(data) {
        var dfd = $q.defer();

        var fd = new FormData();
        for(var key in data) {
            fd.append(key, data[key]);
        }

        $http({
            method: 'POST',
            url: host + 'api/v1/products',
            data: fd,
            transformRequest: angular.indentity,
            headers: {
                'Content-Type': undefined,
                //'x-access-token': user.token
            }
        }).then(function successCallback(response) {
            dfd.resolve(response.data);
        }, function errorCallback(response) {
            dfd.resolve(response.data);
        });

        return dfd.promise;
    }

    function get(query) {
        var dfd = $q.defer();

        $http({
            method: 'GET',
            url: host + 'api/v1/products',
            params: query,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function successCallback(response) {
            if(response.data) {
                dfd.resolve(response.data);
            }
        }, function errorCallback(response) {
            dfd.resolve(response.data);
        });

        return dfd.promise;
    }
}