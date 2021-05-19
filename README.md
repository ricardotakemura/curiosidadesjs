# Coisas medonhas que existem em Javascript e você nunca percebeu.
## 1. NaN não é igual a NaN.
```javascript
//console.clear();
var a = 0/0;
console.log(a == a);
```
### Por que isso ocorre?
- Pela definição do ECMA (https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison) valores como **NaN**, **+&infin;** e **-&infin;** ao serem comparados devem retornar **false**.
- Talvez, por **NaN** não ser um valor definido (qual é o valor de NaN?), não seja possível compará-lo. Por exemplo:
```javascript
//console.clear();
var a = 0/0;
var b = 1;
console.log("a = " + a);
console.log("b = " + b);
console.log("(a > b) ->" + (a > b));
console.log("(a < b) ->" + (a < b));
```
**A questão é:** um **NaN** é maior que 1 ou um **NaN** é menor que 1?
## 2. Verificação de uma string vazia.
```javascript
//console.clear();
if ("") {
    console.log('verdadeiro');
} 
if (false == "") {
    console.log('falso');
}
```
### Por que isso ocorre?
- Pelas definições do ECMA (https://262.ecma-international.org/11.0/#sec-toboolean e https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison), se o argumento for uma string vazia retorna **false**, senão **true**.
## 3. Verificação de um array vazio.
```javascript
//console.clear();
if ([]) { 
    console.log('verdadeiro'); 
} 
if (false == []) { 
    console.log('falso');
}
```
### Por que isso ocorre?
- Pelas definições do ECMA (https://262.ecma-international.org/11.0/#sec-toboolean e https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison), se o argumento for um objeto, sempre retornará **true**.
- Talvez por causa que o primeiro **if** verifica se o objeto esta preenchido (se ele é diferente de **null** e **undefined**) e o segundo transforma o objeto é um valor "numérico". Exemplo:
```javascript
//console.clear();
var a = [];
console.log("A variável 'a' é nula: " + (null == a));
console.log("A variável 'a' é indefinida: " + (undefined == a));
console.log("O valor 'numérico' da variável 'a' é: " + (+a));
```
## 4. Verificação do valor '0' (string).
```javascript
//console.clear();
if ('0') {
    console.log('verdadeiro'); 
} 
if (false == '0') { 
    console.log('falso'); 
}
```
### Por que isso ocorre?
- Pelas definições do ECMA (https://262.ecma-international.org/11.0/#sec-toboolean e https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison), se o argumento for uma string que não seja vazia, retornará **true**.
- O mesmo motivo do item anterior:
```javascript
//console.clear();
var a = '0';
console.log("A variável 'a' é nula: " + (null == a));
console.log("A variável 'a' é indefinida: " + (undefined == a));
console.log("A variável 'a' é vazia: " + ('' == a));
console.log("O valor 'numérico' da variável 'a' é: " + (+a));
```
## 5. [] é igual a ![].
```javascript
//console.clear();
console.log([] == ![]);
```
### Por que isso ocorre?
- Pelas definições do ECMA (https://262.ecma-international.org/11.0/#sec-toboolean e https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison), se o argumento for um objeto, sempre retornará **true**.
- O mesmo motivo do item 3:
```javascript
//console.clear();
var a = [];
console.log("A variável 'a' é nula: " + (null == a));
console.log("A variável 'a' é indefinida: " + (undefined == a));
console.log("O valor 'numérico' da variável 'a' é: " + (+a));
```
## 6. name é sempre string.
```javascript
//console.clear();
name = 1;
name = name + 2;
console.log(name);
```
### Por que isso ocorre?
- Por causa que a propriedade name (window.name) é definida como uma string, mesmo colocando um valor numérico. Isso ocorre também com outras propriedades de componentes, como innerHTML:
```javascript
//console.clear();
document.getElementById('output').innerHTML = 1;
document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + 2;
```
## 7. Somar dois valores positivos retorna um valor negativo.
```javascript
//console.clear();
var x = 2;
x = (~x + 1);
console.log(x);
```
### Por que isso ocorre?
- Este é a formula binária para inversão de um número, chamada **complemento de dois** (https://pt.wikipedia.org/wiki/Complemento_para_dois).
## 8. Incremento não incrementa?
```javascript
//console.clear();
var a = '1';
var b = a++;
console.log(b);
```
### Por que isso ocorre?
- O operador **++**, se colocado a direita, transforma o valor para um número e retorna este, incrementando logo em seguida. Para que o valor incrementado seja retornado, o operador deve ser colocado a esquerda:
```javascript
//console.clear();
var a = '1';
var b = ++a;
console.log(b);
```
## 9. Incremento de 'A' retorna NaN.
```javascript
//console.clear();
var a = 'A';
var b = a++;
console.log(b);
```
### Por que isso ocorre?
- Ao fazer um operação matemática (ou seja, numérica), o interpretador tenta transformar o valor 'A' para um número (o que ele não é), por isso ele retorna **NaN** mesmo este valor não seja o incrementado.
## 10. Incremento de '0xA' retorna 10.
```javascript
//console.clear();
var a = '0xA';
var b = a++;
console.log(b);
```
### Por que isso ocorre?
- Ao fazer um operação matemática (ou seja, numérica), o interpretador transforma o valor **'0xA'** para um número, como **'0xA'** é um valor hexadecimal válido, ele retorna **10** (**'A'** é igual a **10** em hexadecimal).
## 11. toString não funciona em números literais.
```javascript
//console.clear();
console.log(10.toString());
```
### Por que isso ocorre?
- Para o interpretador, o ponto pode representar valores decimais em um número literal, por isso ocorre o erro.
## 12. Usando prototype para reescrever um método.
```javascript
//console.clear();
Object.prototype.toString = function() {
    return "S";
}
var a = new Object();
console.log(a);
```
### Por que isso ocorre?
- A propriedade **prototype** é especial. Ela pode adicionar ou reescrever de algumas funções de 'classes' pre-existentes, podendo ser usadas pelo objetos desta classe.
## 13. prototype não funciona em números?
```javascript
//console.clear();
Number.prototype.toString = function() {
    return "S";
}
var a = 1;
console.log(a);
```
### Por que isso ocorre?
- Valores primitivos não usam o método **toString** para serem exibidos.
## 14. prototype funciona em números?
```javascript
//console.clear();
Number.prototype.toString = function() {
    return "S";
}
var a = 1;
console.log(a.toString());
```
### Por que isso ocorre?
- Ao explicitar o método **toString** de um **number**, é exibido o valor do retorno da função reescrita.
## 15. Concatenação de strings 'b' e 'a' retorna 'baNaNa'.
```javascript
//console.clear();
var fruta = 'b' + 'a' + + 'b' + 'a';
console.log(fruta);
```
### Por que isso ocorre?
- Por causa da seguinte operação: **+'b'**. Isso faz com que o valor **'b'** seja transformado em um número, como não é um valor numérico válido, esta operação retorna **NaN**.