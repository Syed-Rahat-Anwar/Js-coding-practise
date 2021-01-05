var speech = 'i wanna be a  good web application developer. i am so excited, and funky.';
count = 0;

for (var i = 0; i< speech.length; i++){

var element = speech[i];
if(element == " " && speech[i-1] != " " ){

    count++;
}

}
count++;
console.log(count);