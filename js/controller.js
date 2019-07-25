angular.module('AnalizadorLexico', [])
  .controller('Controller', function ($scope, $http) {
    var app = this;
    app.textString = "";
    app.listResult;



    app.verifySintaxis = function () {
      app.listResult = [];
      console.log(split(app.textString));
      var listSplit = split(app.textString);
      for (let i = 0; i < listSplit.length; i++) {
        if (WordRerserve[listSplit[i]] !== undefined) {

          app.listResult.push(WordRerserve[listSplit[i]] + " : Es una palabra reserveda");

        } else if (Operator[listSplit[i]] !== undefined) {

          app.listResult.push(listSplit[i] + "  " + Operator[listSplit[i]]);

        } else {
          app.listResult.push(listSplit[i] + " : Identificador");
        }

      }
    }

    function split(words) {
      var text = words.replace(/[\s]+/g, " ").trim();
      var wordSplit = text.split(" ");
      return wordSplit;
    }





  });

