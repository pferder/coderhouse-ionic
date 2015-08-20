angular.module('starter')

.controller('HomeCtrl',function($scope,$timeout,$state){
	$scope.data = {}
	$scope.saludo = 'hola';
	$scope.testButton = function(){
		console.log('click');
	}

	$scope.comenzarBusqueda = function(){
		// location.href='#/tabs/list'
		var params = {
			search:$scope.data.query
		};

		$state.go('index.list',params);

		// console.log($scope.data.query);
	}
	// $scope.query

	// $timeout(function(){
	// 	$scope.saludo = 'chau';
	// },2000);
})

.controller('ListCtrl',function($scope,$stateParams,$http){
	// https://api.mercadolibre.com/sites/MLA/search?q=ipod

	var url = 'https://api.mercadolibre.com/sites/MLA/search';

	var pr = $http.get(url,{
		params:{
			q:$stateParams.search
		}
	})

	pr.then(function(respuesta){
		console.log(respuesta);

	})

	pr.catch(function(){
		
	})

	pr.finally(function(){
		
	})

	$scope.$on('$ionicView.enter', function(){
       console.log($stateParams.search) 
	});



	// console.log('test')
})

