//MODULE
var gitApp = angular.module('gitApp',[]);

//CONTROLLER
gitApp.controller('gitController',['$scope','$http',function($scope,$http){
  $scope.next = function() {
    if($scope.userName){
      $http.get(" http://api.github.com/users/" + $scope.userName)
      .then(function(response){
        $scope.details = response.data;
      });

      $http.get("http://api.github.com/users/" + $scope.userName + "/repos")
      .then(function(response){
        $scope.repos = response.data;
      });
      if($scope.details!='undefined')
        angular.element('#displayBlock').show();
      else
        angular.element('#displayBlock').hide();
   }
  };

}]);
