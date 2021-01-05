var  numbers =[12, 45, 34, 87, 98,32, 56, 90];
var sum =0;

for(var i = 0 ; i< numbers.length; i++){

var element = numbers[i];
sum = sum+ element
console.log(i,element, sum);

}
console.log(sum);

//with function


function getArraySum(numbers){

    var sum =0;

    for(var i = 0 ; i< numbers.length; i++){
    
    var element = numbers[i];
    sum = sum+ element;
    
}
   return sum;
}
var  numbers =[12, 45, 34, 87, 98,32];
var output = getArraySum(numbers);

var arraySum = getArraySum([23,67,89,45]);
console.log(arraySum);

console.log( 'the result is : ' ,output);