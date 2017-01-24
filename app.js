var app = angular.module('todoApp', []);

app.controller('todoAppController', function($scope) {

  var arr = [];
  var todoArr = [];
  var x = [];

  $scope.saveTodo = function() {
    todoArr.push($scope.todo)
    $scope.todoArr = todoArr
    $scope.todo = ""
  }
  var checkFlag = false;
  const deleteArr = [];
  $scope.isChecked = function(item) {
    deleteArr.push(item)
    $scope.deleteArr = deleteArr
    if (deleteArr.includes(item) && checkFlag === false) {
      checkFlag = true;
    } else if (checkFlag === true) {
      checkFlag = false
    }
  }

  $scope.removeTodo = function(item) {
    todoArr.map(function(x){
      console.log("x: ", x)
      if (checkFlag===true) {
        var index = $scope.todoArr.indexOf(item);
        $scope.todoArr.splice(index, 1);
        console.log("to be deleted")
      }
    })
  }

  $scope.save = function() {
    arr.push($scope.todoItems);
    $scope.arr
  }
})
