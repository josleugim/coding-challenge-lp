'use strict';
angular.module('myApp')
    .factory('CulturaService', ['$q', '$http', '$location', CulturaService]);

function CulturaService($q, $http, $location) {
    var host = 'http://' + $location.host() + ':4000/';

    return {
        post: post,
        get: get
    };

    function post(data) {
        var dfd = $q.defer();


        $http({
            method: 'POST',
            url: host + 'api/v1/cultura',
            data: data,
            headers: {
                'Content-Type': 'application/json',
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
            url: host + 'api/v1/cultura',
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