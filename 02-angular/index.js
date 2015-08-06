var myModule = angular.module('myApp',[]);

// angular.module('myApp')
// o
// myModule

myModule.controller('ListadoCtrl',function($scope,api){
	console.log(api)
	$scope.test = 'Lorem ipsum dolor sit amet';

	$scope.buscar = function(){
		api.busqueda($scope.busqueda).then(function(respuesta){
			$scope.listado = respuesta.results;
			console.log(respuesta)
		})
		
	}

	$scope.mostrarEsto = function(esto){
		console.log(esto)
	}
})

myModule.filter('reverse', function() {
    return function(input, uppercase) {
        input = input || '';
        var out = "";
        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        // conditional based on optional argument
        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
});

myModule.factory('api',function($http){
	return {
		busqueda:function(q){
			var urlBase = 'https://api.mercadolibre.com/sites/MLA/search?q=';
			var url = urlBase+q;

			return $http.get(url).then(function(res){
				return res.data;
			})

		}
	}
})

myModule.directive('aysaAmount',function ($http) {
    return {            
        restrict: "AE",
        // template:'<h3>{{mostrar}}</h3>',
        templateUrl:'miDirectiva.html',
        link: function (scope, element, attrs, ctrls) {
        	// console.log(attrs['nombre'])
        	scope.mostrar = attrs.nombre;
        	element.on('click',function(){
        		console.log('click de directive');
        	})
            // scope.$watch(attrs.amount,function(newValue,oldValue){
            //     var currentUserId = scope.$eval(attrs.userId);
            //     var targetUserId = scope.$eval(attrs.targetId);
                
            //     var outcome = currentUserId != targetUserId;

            //     var amountArr = (parseInt(newValue||0)/100).toFixed(2).toString().split('.') || [];

            //     scope.currency = attrs.currency;
            //     scope.dollars = amountArr[0];
            //     scope.cents = amountArr[1];
                
            //     if(outcome){
            //         scope.sign = '-';
            //         element.addClass('outcome');
            //         element.removeClass('income');
            //     }else{
            //         scope.sign = '';
            //         element.addClass('income');
            //         element.removeClass('outcome');
            //     }
            // });
            
        }
        // template:'<span class="sign">{{sign}}</span>'+
        //          '<span class="currency">{{currency}}</span>'+
        //          '<span class="dollars">{{dollars}}</span>,'+
        //          '<span class="cents">{{cents}}</span>'
    };
})

myModule.controller('MacCtrl',function($scope){
	$scope.test = 'test'
})

