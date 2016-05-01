angular.module('app.controllers', ['ionic', 'ion-gallery'])

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

  $scope.items = [
    {
      src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
      sub: 'This is a <b>subtitle</b>'
    },
    {
      src:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg',
      sub: '' /* Not showed */
    },
    {
      src:'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg',
      thumb:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg'
    }
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

