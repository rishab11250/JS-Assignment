var array = [5,4,9,8,3,2,1,6,0,5.6, 0.365,125.56, -1.26 ];
var zero = 0;
var positive = 0;
var negative = 0;
for(var i = 0;i<=array.length;i++){
    if(array[i] == 0){
        zero++;
    }
    else if(array[i]>0){
        positive++;
    }
    else if(array[i]<0){
        negative++;
    }
}
console.log("Total zero in array are ",zero);
console.log("Total Positive number in array are ",positive);
console.log("Total Negative number in array are ",negative);