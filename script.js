//PLAYER 1
var  randomNumber= Math.floor(Math.random()*6)+1;
//creating a string from dice1 to dice2 image 
var randomImagesDice="dice"+ randomNumber+".png";
//creating a string from images/dice6.png
var randomImageSources= "images/"+randomImagesDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSources);

//PLAYER 2
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//H1 CHANGER
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}