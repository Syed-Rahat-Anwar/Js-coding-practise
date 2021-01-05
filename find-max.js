var business = 650;
var minister = 1150;
var sochib = 950;
if(business > minister){

    if(business > sochib){
        console.log('business is bigger');
    }

    else{

        console.log("sochib is bigger");
    }
}

else{


    if(minister > sochib){
        console.log('minister is bigger');
    }

    else{
        console.log('sochib is bigger');
    }
}

//different way

var business = 750;
var minister = 1350;
var sochib = 1750;


var max = Math.max(business, minister, sochib);
console.log(max);