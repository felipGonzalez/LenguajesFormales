angular.module('AnalizadorLexico', [])
  .controller('Controller', function($scope,$http) {
    var app = this;
    app.textString;
    app.listResult;
    
    

    app.verifySintaxis = function() {
     console.log( app.textString);
    }

  });

