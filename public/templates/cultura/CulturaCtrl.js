'use strict';
angular.module('myApp')
    .controller('CulturaCtrl', ['$scope', 'CulturaService', CulturaCtrl]);

function CulturaCtrl($scope, CulturaService) {
    getRecordList({});
    $scope.newRecord = function () {
        var data = {};

        if($scope.title) {
            data.title = $scope.title;
        }

        if($scope.email) {
            data.email = $scope.email;
        }

        CulturaService.post(data).then(function (data) {
            if(data.success) {
                $scope.title = '';
                $scope.email = '';
                getRecordList({});
            }
        })
    };

    function getRecordList(query) {
        CulturaService.get(query).then(function (data) {
            if(data.success) {
                $scope.records = data.records;
            }
        })
    }
}