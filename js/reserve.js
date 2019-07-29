var WordRerserve = {
    "abstract": "abstract",
    "continue": "continue",
    "for": "Ciclo for",
    "new": "new",
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
    "break": "break",
    "double": "Variable numerica para numeros decimales",
    "implements": "implements",
    "protected": "protected",
    "throw": "throw",
    "byte": "byte",
    "else": "else",
    "import": "import",
    "public": "public",
    "throws": "throws",
    "case": "case",
    "enum": "Enumerodo",
    "instanceof": "instanceof",
    "return": "return",
    "transient": "transient",
    "catch": "catch",
    "extends": "extends",
    "int": "int",
    "short": "short",
    "try": "try",
    "char": "char",
    "final": "final",
    "interface": "interface",
    "static": "static",
    "void": "void",
    "class": "class",
    "finally": "finally",
    "long": "long",
    "strictfp": "strictfp",
    "volatile": "volatile",
    "const": "const",
    "float": "float",
    "native": "native",
    "super": "super",
    "while": "Ciclo while",
    "String": "Objeto da caracteres"
}

var Operator = {
    "+": "Operador Aritmetico de suma",
    "-": "Operador Aritmetico de resta",
    "*": "Operador Aritmetico de multiplicacion",
    "/": "Operador Aritmetico de divicion",
    "%": "Operador Aritmetico Modulo"
}

var typesData = {
    "String": "Es una cadena",
    "int": "es un numero entero",
    "double": "es un numero decimal",
    "float": "es un numero flotante",
    "char": "Es un caracter",
}

const string = new RegExp(/\s*((String)\s([a-zA-Z0-9]*)(\s*=\s*"[a-zA-Z\s]*")?\s*;\s*)/);
const number = new RegExp(`\\s*((int|double|float)\\s([a-zA-Z0-9]*)(\\s*=\\s*[0-9]*)?\\s*;\\s*)`);
const character = new RegExp(/\s*((char)\s([a-zA-Z0-9]*)(\s*=\s*"[a-zA-Z\s]")?\s*;\s*)/);
const For = new RegExp(`\\s*(for)\\s*\\((\\s*(int|double|float)\\s+[a-z]+\\s*(=)\\s*[0-9]+\\s*(;)\\s*[a-z]+\\s*(>|<|>=|<=|==|!=)\\s*[0-9]+\\s*(;)\\s*[a-z]+(\\+\\+|\\-\\-)\\))\\s*\\{\\s*`);
const While = new RegExp(/\s*(while)\s*[(]\s*(([a-zA-Z0-9]+\s*(>|<|>=|<=|==|!=)\s*[a-zA-Z0-9]+\s*)|[a-zA-Z0-9]+)\s*[)]\s*\{/);
const If = new RegExp(/\s*(if)\s*[(]\s*([a-zA-Z0-9]*|([a-zA-Z0-9]*\s*(>|<|>=|<=|==|!=)\s*[a-zA-Z0-9]*\s*))\s*[)]\s*\{\s*/);
const ElseIf = new RegExp(/(\s*}\s*else\s+if)\s*[(]\s*([a-zA-Z0-9]*|([a-zA-Z0-9]*\s*(>|<|>=|<=|==|!=)\s*[a-zA-Z0-9]*\s*))\s*[)]\s*\{\s*/);
const Else = new RegExp(/\s*}\s*else\s*{\s*/);

const derecho = new RegExp(/\}/);

const codigo = new RegExp(/(codigo)/);

angular.module('AnalizadorLexico', []).controller('reserve', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    $scope.lista = wordReserve;
    $scope.listOperator = Operator;
}]);