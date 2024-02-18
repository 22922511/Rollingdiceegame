
var x1,x2;
function refresh(){

function ranNoForImag1(){
var x=Math.floor(Math.random() * 6 ) + 1;
x1=x;
 return x;              }


var ranimag1 ="./images/"+"dice"+ranNoForImag1()+".png";
document.querySelector(".img1").setAttribute("src",ranimag1);


function ranNoForImag2(){
var y=Math.floor(Math.random() * 6 ) + 1;
x2=y;
 return y;              }


 var ranimag2 ="./images/"+"dice"+ranNoForImag2()+".png";
document.querySelector(".img2").setAttribute("src",ranimag2); 

if(x1>x2) {document.querySelector("h1").innerHTML="Team 1 Won";}

else if(x1<x2) {document.querySelector("h1").innerHTML="Team 2 Won";}

if(x1==x2) {document.querySelector("h1").innerHTML="Oh Draw";}
      }

