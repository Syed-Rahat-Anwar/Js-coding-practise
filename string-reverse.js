var speech = "i wanna be a good web application developer. i am so excited, and funky.";

var reverse = "";

// for(var i = speech.length ; i >= 0 ; i--){
// var element = speech[i];
// reverse = reverse+ element ;
 
// }
// console.log(reverse);

for(var i = 0; i< speech.length ; i++){
    var element = speech[i];
    reverse =element + reverse;
     
    }
    console.log(reverse);
