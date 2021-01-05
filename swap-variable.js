var a =5;
var b= 7;

console.log("befor swap : a = ", a ,"b =", b);
var temp =a;
a =b;
b= temp;


console.log("after swap : a = ", a ,"b =", b);


//another way to solve this problem


var x = 9;
var y =7;
x = x + y;
y = x -y;
x = x-y;


console.log("after swap : x = ", x ,"y =", y);


//laguage specific



var p = 12;
var q= 10;

[p,q] = [q,p];  

console.log("after swap : p = ", p ,"q =", q);


