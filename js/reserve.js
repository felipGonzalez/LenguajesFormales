var WordRerserve = {
"abstract" : "abstract",
"continue": "continue",
"for"      : "Ciclo for",
"new"         : "new",
"switch": "switch",
"assert": "assert",
"default": "default",
"goto": "goto",
"package": "package",
"synchronized": "synchronized",
"boolean": "boolean",
"do": "do",
"if": "Condicional",
"private": "private",
"this": "this",
"break"    : "break", 
"double"  : "Variable numerica para numeros decimales",
"implements": "implements",
"protected": "protected",
"throw": "throw",
"byte"      : "byte",
"else"     : "else",
"import"      : "import",
"public"        : "public",
"throws": "throws",
"case"     : "case",
"enum": "Enumerodo",
"instanceof" : "instanceof", 
"return"       : "return",
"transient": "transient",
"catch"    : "catch",
"extends"  : "extends",
"int"         : "int",
"short"         : "short",
"try": "try",
"char"    : "char", 
"final"   : "final",
"interface"  : "interface",
"static"        : "static",
"void": "void",
"class"    : "class", 
"finally" : "finally",
"long"        : "long",
"strictfp"      : "strictfp",
"volatile": "volatile",
"const"     : "const",
"float"   : "float",
"native"      : "native",
"super"         : "super",
"while": "Ciclo while",
"String" : "Objeto da caracteres"
}

var Operator = {
   "+":"Operador Aritmetico de suma",
   "-":"Operador Aritmetico de resta",
   "*":"Operador Aritmetico de multiplicacion",
   "/":"Operador Aritmetico de divicion",
   "%":"Operador Aritmetico Modulo"
}




angular.module('AnalizadorLexico', []).controller('reserve', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
   $scope.lista = wordReserve;
   $scope.listOperator = Operator;


}]);
