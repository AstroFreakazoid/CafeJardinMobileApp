angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('cafJardN.decoraTuJardin', {
    url: '/decoration',
    views: {
      'side-menu21': {
        templateUrl: 'templates/decoraTuJardin.html',
        controller: 'decoraTuJardinCtrl'
      }
    }
  })

  .state('cafJardN.carritoDeCompras', {
    url: '/shopping',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carritoDeCompras.html',
        controller: 'carritoDeComprasCtrl'
      }
    }
  })

  .state('cafJardN', {
    url: '/side-menu21',
    templateUrl: 'templates/cafJardN.html',
    abstract:true
  })

  .state('cafJardN.prXimosEventos', {
    url: '/events',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prXimosEventos.html',
        controller: 'prXimosEventosCtrl'
      }
    }
  })

  .state('cafJardN.galeriaDeFotos', {
    url: '/galery',
    views: {
      'side-menu21': {
        templateUrl: 'templates/galeriaDeFotos.html',
        controller: 'galeriaDeFotosCtrl'
      }
    }
  })

  .state('cafJardN.ubicacion', {
    url: '/location',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ubicacion.html',
        controller: 'ubicacionCtrl'
      }
    }
  })

  .state('cafJardN.contacto', {
    url: '/contact',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contacto.html',
        controller: 'contactoCtrl'
      }
    }
  })

  .state('cafJardN.acercaDe', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDe.html',
        controller: 'acercaDeCtrl'
      }
    }
  })

  .state('cafJardN.avaluo', {
    url: '/decoration_avalue',
    views: {
      'side-menu21': {
        templateUrl: 'templates/avaluo.html',
        controller: 'avaluoCtrl'
      }
    }
  })

  .state('cafJardN.vistas', {
    url: '/decoration_views',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vistas.html',
        controller: 'vistasCtrl'
      }
    }
  })

  .state('cafJardN.servicio', {
    url: '/decoration_service',
    views: {
      'side-menu21': {
        templateUrl: 'templates/servicio.html',
        controller: 'servicioCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/home')

  

});