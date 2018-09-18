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
    .controller('EditProductCtrl', ['$scope', 'fileReader', 'ProductService', '$stateParams', '$state', EditProductCtrl]);

function EditProductCtrl($scope, fileReader, ProductService, $stateParams, $state) {
    if($stateParams.id) {
        getProductById({ id: $stateParams.id });

        $scope.saveChanges = function () {
            var query = {};
            var data = {};

            if(typeof $stateParams.id !== 'undefined') {
                query.id = $stateParams.id;
            }

            if(!$scope.productForm.name.$pristine) {
                data.name = $scope.product.name;
            }
            if(!$scope.productForm.price.$pristine) {
                data.price = $scope.product.price;
            }

            if($scope.file) {
                data.image = $scope.file;
            }

            ProductService.put(query, data).then(function (data) {
                if(data.success) {
                    $scope.product = {};
                    $state.go('product');
                }
            })
        };
    }

    function getProductById(query) {
        ProductService.getById(query).then(function (data) {
            if(data.success) {
                $scope.product = data.product;
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