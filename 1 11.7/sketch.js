var mySound; 
var mySound1; 
var mySound2; 

var x = 100
var y = 120
var xRate = 8
var yRate = 4
//var img ;


function preload(){

mySound = loadSound("assets/Drum4.mp3");
mySound1 = loadSound("assets/Romantic Guitar.mp3");
mySound2= loadSound("assets/sad_violun.mp3");

}


function setup(){

createCanvas(500,500);

}

function draw() {

background(mouseX,mouseY,0);

//mySound.play();
fill(mouseX,80,mouseX);

//texture(img);
ellipse(x,y,mouseX, mouseX);
rect(x,y,mouseX, mouseY);
line(x,y,mouseX, mouseY);


x += xRate;
y += yRate;

if( x > width  || x < 40){
	xRate *= -1;
mySound.play();


}
if(y > height  || y < 40){
	yRate *= -1;
mySound1.play();

}

function mousePressed() {

	  mySound3.play();

	}

}


	