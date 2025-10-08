var array = [5,4,9,8,3,2,1,6, 5.6, 0.365,125.56, -1.26 ]
var odd = 0;
var even = 0;
for(var i = 0; i<array.length;i++){
    if(array[i]%2==0){
        even++;
    }
    else{
        odd++;
    }
}
console.log("There are ",even," even numbers in array");
console.log("There are ",odd," odd numbers in array");