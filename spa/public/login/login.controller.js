freestyle.controller('signUpCtrl', ['$scope' , function($scope){

    $scope.groceries = [
        {item: "Tomatoes", purchased: true},
        {item: "Potatoes", purchased: false},
        {item: "Bread", purchased: false},
        {item: "Hummus", purchased: false}
    ];

    $scope.signUpInfo = {
        username: undefined,
        realName: undefined,
        password: undefined
    };

    $scope.signupUser = function () {

        var data = {
            username: $scope.signUpInfo.username,
            realName: $scope.signUpInfo.realName,
            password: $scope.signUpInfo.password
        };

        if(data.username.length > 5){
            alert('more than 5');
        }else{
            alert('less than 5');
        }
    };

}]);