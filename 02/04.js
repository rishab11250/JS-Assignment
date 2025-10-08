var array = [5,4,9,8,3,2,1,6, 5.6, 0.365,125.56, -1.26 ]
var large = array[0];
for(var i = 0; i<array.length;i++){
    if(array[i]>=large){
        large = array[i];
    }
}
console.log("The largest number is ",large);