angular
  .module("myApp", [])
  .controller("myAppControlle", ['$http', ctrlPrincipal])

  function ctrlPrincipal($http){
    var vm = this;
    vm.users = [];
    var pms = $http.get('https://jsonplaceholder.typicode.com/users');
    pms.then(function(response){
      vm.users = response.data
    });
  }