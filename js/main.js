//1
var a = 0/0;
console.log("a = " + a);
console.log(a == a);
//Resposta
var a = 0/0;
var b = 1;
console.log("a = " + a);
console.log("b = " + b);
console.log("(a > b) ->" + (a > b));
console.log("(a < b) ->" + (a < b));

//2
if ("") {
    console.log('verdadeiro');
} 
if (false == "") {
    console.log('falso');
}

//3
if ([]) { 
    console.log('verdadeiro'); 
} 
if (false == []) { 
    console.log('falso');
}
//Resposta
var a = [];
console.log("A variável 'a' é nula: " + (null == a));
console.log("A variável 'a' é indefinida: " + (undefined == a));
console.log("O valor 'numérico' da variável 'a' é: " + (+a));

//4
if ('0') {
    console.log('verdadeiro'); 
} 
if (false == '0') { 
    console.log('falso'); 
}
//Resposta
var a = '0';
console.log("A variável 'a' é nula: " + (null == a));
console.log("A variável 'a' é indefinida: " + (undefined == a));
console.log("A variável 'a' é vazia: " + ('' == a));
console.log("O valor 'numérico' da variável 'a' é: " + (+a));

//5
console.log([] == ![]);
//Resposta
var a = [];
console.log("A variável 'a' é nula: " + (null == a));
console.log("A variável 'a' é indefinida: " + (undefined == a));
console.log("O valor 'numérico' da variável 'a' é: " + (+a));

//6
name = 1;
name = name + 2;
console.log(name);
//Resposta
document.getElementById('output').innerHTML = 1;
document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + 2;

//7
var x = 2;
x = (~x + 1);
console.log(x);

//8
var a = '1';
var b = a++;
console.log(b);
//Resposta
var a = '1';
var b = ++a;
console.log(b);

//9
var a = 'A';
var b = a++;
console.log(b);

//10
var a = '0xA';
var b = a++;
console.log(b);

//11
console.log(10.toString());

//12
Object.prototype.toString = function() {
    return "S";
}
var a = new Object();
console.log(a);

//13
Number.prototype.toString = function() {
    return "S";
}
var a = 1;
console.log(a);

//14
Number.prototype.toString = function() {
    return "S";
}
var a = 1;
console.log(a.toString());

//15
var fruta = 'b' + 'a' + + 'b' + 'a';
console.log(fruta);