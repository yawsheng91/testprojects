var testApp = angular.module('testApp', []);
	
testApp.controller('testController' , function ($scope, $http) {

    $scope.getRequest = function () {
		
		$http({
			url: 'https://hooks.slack.com/services/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',
			method: "POST",
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {
				"channel": '#general',
				"text": 'Hello',
				"username": 'yawsheng91'
			},
			dataType: "json"
		})
		.then(function(response){
			console.log(response)
		},
		function(response)
		{
			console.log(response)
		});
	
        $http({
			url: "http://localhost:3000/test",
			method: "GET"
		})
            .then(function successCallback(response){
                $scope.response = response.data;
				alert(response.data);
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
    };

});