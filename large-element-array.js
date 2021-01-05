var  marks =[12, 45, 34,87, 98,32, 56,908];
 
 var max = marks[0];
 for(var i =0 ; i< marks.length ; i++){

    var element = marks[i];

    if(element > max){
        max = element;

    }
    
}

console.log("The most highest value is : " , max);


