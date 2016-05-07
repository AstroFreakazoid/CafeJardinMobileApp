angular.module('app.controllers', ['ionic', 'ion-gallery'])

.controller('homeCtrl', function($scope) {

})

.controller('decoraTuJardinCtrl', function($scope) {



})

.controller('carritoDeComprasCtrl', function($scope) {

})

.controller('prXimosEventosCtrl', function($scope, $ionicPopup, $timeout) {

    $scope.showConfirm = function() {
       var confirmPopup = $ionicPopup.confirm({
       title: 'Quieres acompañarnos este dia?',
       template: 'Recibiras regalos de parte de Cafe Jardin!'
     });

     confirmPopup.then(function(res) {
       if(res) {
         console.log('CONFIRM');
       } else {
         console.log('CANCEL');
       }
     });
    };

})

.controller('galeriaDeFotosCtrl', function($scope) {
  // thumb:'root'
  $scope.plants = [
    { src:'img/plants/1.jpg', sub: '<b>Top 1</b>' },
    { src:'img/plants/2.jpg', sub: '<b>Top 2</b><br />Orquidea Flor Blanca' },
    { src:'img/plants/3.jpg', sub: '<b>Top 3</b>' },
    { src:'img/plants/4.jpg', sub: '<b>Top 4</b>' },
    { src:'img/plants/5.jpg', sub: '<b>Top 6</b>' },
    { src:'img/plants/6.jpg', sub: '<b>Top 7</b>' },
    { src:'img/plants/7.jpg', sub: '<b>Top 8</b>' },
    { src:'img/plants/8.jpg', sub: '<b>Top 9</b>' },
    { src:'img/plants/9.jpg', sub: '<b>Top 10</b>' },
    { src:'img/plants/10.jpg', sub: '<b>Top 11</b>' },
    { src:'img/plants/11.jpg', sub: '<b>Top 12</b>' },
    { src:'img/plants/12.jpg', sub: '<b>Top 13</b>' }
  ]
})

.controller('ubicacionCtrl', function($scope) {

})

.controller('contactoCtrl', function($scope) {

})

.controller('acercaDeCtrl', function($scope) {

})

.controller('avaluoCtrl', function($scope) {

})

.controller('vistasCtrl', function($scope) {

})

.controller('servicioCtrl', function($scope) {

})
