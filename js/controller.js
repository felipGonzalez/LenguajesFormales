angular.module('AnalizadorLexico', [])
  .controller('Controller', function($scope,$http) {
    var app = this;
    app.textString = "";
    app.listResult;

    

    app.verifySintaxis = function() {
      app.listResult = [];
      console.log(split(app.textString));
      var listSplit = split(app.textString);
      for (let i = 0; i < listSplit.length; i++) {
        if(WordRerserve[listSplit[i]] !== undefined) {
          console.log(WordRerserve[listSplit[i]]  + " : Es una palabra reserveda");
          app.listResult.push(WordRerserve[listSplit[i]]  + " : Es una palabra reserveda");
        }else {
          console.log(listSplit[i]  + " : no es una palabra reserveda");     
          app.listResult.push(listSplit[i] + " : no es  una palabra reserveda");
        }
        
      }

      
    }

    function split(words) {
      var text = words.replace(/[\s]+/g, " ").trim();
      var wordSplit = text.split(" ");
      return wordSplit;
    }



    

  });

