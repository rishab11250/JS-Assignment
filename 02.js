var units = 356;
var bill;
if(units<=100){
    bill = units*5;
}
else if(units<=300){
    bill = 500+(units-200)*7;
}
else{
    bill = 500+2100+(units-300)*10;
}
console.log("Your bill is ",bill);