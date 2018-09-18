'use strict';
angular.module('myApp')
    .directive("ngFileSelect",function(){
        return {
            link: function($scope,el){
                el.bind("change", function(e){
                    $scope.file = (e.srcElement || e.target).files[0];
                    $scope.getFile();
                })
            }
        }
    })
    .controller('ProductCtrl', ['$scope', 'fileReader', 'ProductService', ProductCtrl]);

function ProductCtrl($scope, fileReader, ProductService) {
    getProductList({});
    $scope.newProduct = function () {
        var data = {};

        if($scope.product.name) {
            data.name = $scope.product.name;
        }

        if($scope.product.price) {
            data.price = $scope.product.price;
        }

        if($scope.file) {
            data.image = $scope.file;
            ProductService.post(data).then(function (data) {
                if(data.success) {
                    $scope.product = {};
                    getProductList({});
                }
            })
        }
    };

    function getProductList(query) {
        ProductService.get(query).then(function (data) {
            if(data.success) {
                $scope.products = data.products;
            } else {

            }
        })
    }

    $scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.imageSrc = result;
            });
    };
}