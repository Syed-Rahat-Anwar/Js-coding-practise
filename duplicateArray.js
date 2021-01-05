var  numbers =[12, 45, 34, 87, 98,32,45,87,45];

var uniqueName = [];
for(var i = 0; i < numbers.length; i++){

    var element = numbers[i];
    
    var index = uniqueName.indexOf(element);
    console.log(index);
    if(index == -1){

        uniqueName.push(element);
    }
     
}
console.log(uniqueName);