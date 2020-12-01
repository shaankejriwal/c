var spaceship,backgroundImg,background10;

function preload(){
 backgroundImg = loadImage("images/background.png");
 spaceCraftImg = loadImage("images/spacecraft.png");
 asteroid1Img = loadImage("images/asteroid1.png");
 asteroid2Img = loadImage("images/asteroid2.png");
 asteroid3Img = loadImage("images/asteroid3.png");
 asteroid4Img = loadImage("images/asteroid4.png");
}

function setup(){
 createCanvas(windowWidth,windowHeight);
 
 background10 = createSprite(width,height);
 background10.addImage("images/background.png",backgroundImg);
 background10.scale = 5;

 background10.velocityY = 5;

 spaceship = createSprite(width/2,height-100,30,30);
 spaceship.addImage("images/spacecraft.png",spaceCraftImg);
 spaceship.scale = 0.5;
}

function draw(){
 background(0);

 if(background10.y>height){
	background10.y = height/2;
}

 if(keyDown("UP_ARROW")){
	 spaceship.y -= 10;
 }

 if(keyDown("DOWN_ARROW")){
	 spaceship.y += 10;
 }

 if(keyDown("LEFT_ARROW")){
	 spaceship.x -= 10;
 }

 if(keyDown("RIGHT_ARROW")){
	 spaceship.x += 10;
 }

 spawnAsteroids();

 drawSprites();
}


function spawnAsteroids(){
	if(frameCount%20 === 0){
		asteroid = createSprite(width-80,height/2,30,30);
		asteroid.scale = 0.2;
		asteroid.velocityX = -8;
		asteroid.y = Math.round(random(30,height-30));
		var rand = Math.round(random(1,4))
		switch(rand){
			case 1: asteroid.addImage("images/asteroid1.png",asteroid1Img);
			break;
			case 2: asteroid.addImage("images/asteroid2.png",asteroid2Img);
			break;
			case 3: asteroid.addImage("as3",asteroid3Img);
			break;
			case 4: asteroid.addImage("as4",asteroid4Img);
			break;
			default: 
			break;
		}
	}
}

