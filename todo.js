var app = angular.module('myApp', []).controller('myController', function ($scope) {
    $scope.todos = [
        { text: 'Buy apples', done: false },
        { text: 'Go for a walk', done: false }
    ];

    //add new item to todo list
    $scope.addTodo = function () {
        $scope.todos.push({ text: $scope.newtodos, done: false });
        $scope.newtodos = '';
    }

    //Delete item from todo list
    $scope.deleteTodo = function (index) {
        $scope.todos.splice(index, 1);
    };

    $scope.removeChecked = function () {
        var oldtodos = $scope.todos;
        $scope.todos = [];
        //console.dir(oldtodos)
        angular.forEach(oldtodos, function (x) {
            
            if (!x.done) {
                //console.dir(x);
                $scope.todos.push(x);
                //console.dir($scope.todos)
            }
        });
        
    };

})