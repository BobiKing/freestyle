var freestyle = angular.module('freestyle', [
  'ngRoute'
]);

freestyle.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/login', {
      templateUrl: 'login/login.template.html',
      controller: angular.noop()
    }).when('/signup', {
      templateUrl: 'signup/signup.template.html',
      controller: SignupController
    }).when('/dashboard', {
      templateUrl: 'dashboard/dashboard.template.html',
      controller: DashboardController
    }).when('/profile', {
      templateUrl: 'profile.html',
      controller: angular.noop()
    }).when('/todo-list', {
      templateUrl: 'todo-list/todo-list.template.html',
      controller: TodoController
    }).when('/', {
      templateUrl: 'home/home.template.html',
      controller: angular.noop()
    }).otherwise({
        redirectTo: '/'
      });
  }]);


//Defining a Angular Controller

//freestyle.controller('SignupController', ['$scope','$window', '$http',
//  function ($scope,$window, $http) {
//
//    var username = $scope.username;
//    //var email = $scope.email;
//
//    $scope.postSignup = function () {
//      $window.alert(username);
//      $window.alert('gulp');
//      $window.alert('another one');
//      $window.alert('ML');
//      $window.alert('AI');
//      $window.alert('nas');
//    }
//
//  }]);

function SignupController($scope){

  //var username = $scope.auth.username;
  //var email = $scope.auth.email;
  //var password = $scope.auth.password;

  $scope.signUp = function (auth) {
    console.log('az sum za');
    console.log(auth.username);
    console.log(auth.email);
    console.log(auth.password);
    console.log($scope);
  }

  $scope.title = 'Signuppppp2';
  $scope.body = 'wazzaap';

  $scope.getFavWeather = function(hmm){
    console.log(hmm.citySelected);
  }

}


function TodoController($scope, $window){

  $scope.todos = [
    {'title' : 'Build a todo app', 'done': false},
    {'title' : 'Go to yoga training', 'done': false},
    {'title' : 'Make  lentils soup', 'done': false}
  ];

  $scope.objectives = [
    {'title' : 'Read 50 books', 'done': false},
    {'title' : 'Build a VR application with node and threejs', 'done': false}
  ];

  $scope.addTodo = function(){
    $window.alert("hello!");
    $scope.todos.push({'title': $scope.newtodo, 'done':false})
  }

  $scope.addObjective = function(){
    //$scope.console.log('hello');
    $scope.objectives.push({'title': $scope.new_objective, 'done':false})
  }

  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item){
        return !item.done;
    })
  }

  $scope.clearObjectives = function(){
    $scope.objectives = $scope.objectives.filter(function(item){
      return !item.done;
    })
  }

}


function DashboardController($scope){
  $scope.title = 'Dashboard Title';
  $scope.body = 'This is the dashboard body asd asd';
}

function ProfileController($scope){

}
//function SignupController($scope){
//  $scope.postSignup = function () {
//    var username = $scope.username;
//    alert(username);
//  }
//}

//angular.module('freestyle')
//  .controller('SignupController', SignupController);
//
//SignupController.$inject = [];
//
//function SignupController() {
//  var vm = this;
//  console.log('dazza');
//}