var array = [5,4,9,8,3,2,1,6,0,5.6, 0.365,125.56, -1.26 ];
const limit = 5;
for(var i = 0;i<array.length;i++){
    if(limit<array[i]){
        console.log(array[i]);
    }
}