var cat,catImg;
var mouse,mouseImg;
var garden,gardenImg;
function preload() {
    //load the images here
catImg=loadImage(cat1.png,cat2.png,cat3.png,cat4.png);
mouseImg=loadImage(mouse1.png,mouse2.png,mouse3.png,mouse4.png);
gardenImg=loadImage(garden.png);
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here




}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){


    
}

}
