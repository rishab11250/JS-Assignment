var num1 = 87;
var num2 = 88;
var num3 = 80;
var num4 = 85;
var num5 = 90;
const total = num1+num2+num3+num4+num5;
const percent = total/5;
if(percent>=90){
    console.log("Grade A");
}
else if(percent>=80){
    console.log("Grade B");
}
else if(percent>=70){
    console.log("Grade C");
}
else if(percent>=60){
    console.log("Grade D");
}
else{
    console.log("Fail");
}