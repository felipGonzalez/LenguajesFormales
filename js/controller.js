angular.module('AnalizadorLexico', [])
  .controller('Controller', function($scope,$http) {
    var app = this;
    app.textString;
    app.listResult;
    
    

    app.verifySintaxis = function() {
     console.log( app.textString);

     var text = app.textString.replace(/[\s]+/g, " ").trim();
     var word = text.split(" ");
      console.log(word);
      
    }

  });

