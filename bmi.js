function fun(){
var a=document.getElementById("h").value;
var b=document.getElementById("g").value;
var e=parseInt(a);
var f=parseInt(b);
var c;
c=(e/((f*f)/10000)).toFixed(2);
m="";
if(c<18.5){
    m="You Are Underweight: "+c;
}
else if(c>=18.5&&c<=24.9){
    m="You Are Normal Weight: "+c;
}
else if(c>=25&&c<=29.9){
    m="You Are OverWeight: "+c;
}
else if(c>=30){
    m="you have Obesity: "+c;
}
document.getElementById("demo").innerHTML=m;
}