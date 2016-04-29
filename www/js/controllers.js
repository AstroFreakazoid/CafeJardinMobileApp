angular.module('app.controllers', [])

.controller('homeCtrl', function($scope) {

})

.controller('decoraTuJardinCtrl', function($scope) {



})

.controller('carritoDeComprasCtrl', function($scope) {

})

.controller('prXimosEventosCtrl', function($scope, $ionicPopup, $timeout) {

	$scope.showAlert = function() {
	  	var alertPopup = $ionicPopup.alert({
			title: 'Hi, this is a test',
			template: 'YOLO, LOLOLOL'
			//cssClass: 'alertUpcoming'//Here we add the class to the alert -> not working
		});

		alertPopup.then(function(res) {
			console.log('Thank you for not eating my delicious ice cream cone');
		});
	};
})

.controller('galeriaDeFotosCtrl', function($scope) {

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

//Added by Jose as a test
/*angular.module('events', ['ionic'])
.controller('EventsCtrl',function($scope, $ionicPopup, $timeout) {
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
  };
});*/
//End of angular.module by Jose

