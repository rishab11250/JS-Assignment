var income = 1200000;
var tax;
if(income<=250000){
    tax = 0;
}
else if(income<=500000){
    tax = (income-250000)*0.05;
}               
else if(income<=1000000){
    tax = 25000+(income-500000)*0.20;
}
else{
    tax = 200000+25000(income-1000000)*0.3;
}