var ghost1, ghost2,ghost3
var sceneImg
var ghost1Img, ghost2Img, ghost3Img
var background1;
var gun1, gunImg;
var bullet1, bulletImg;
var score;
var gameState = "Play"
function preload(){
	sceneImg = loadImage("background.png")
	ghost1Img = loadImage("ghost1.png")
	ghost2Img = loadImage("ghost2.png")
	ghost3Img = loadImage("ghost3.png")
	gunImg = loadImage("gun.png")
	bulletImg = loadImage("bullet.png")
}
function setup(){
createCanvas(800,400)
g1Group = new Group()
g2Group = new Group()
g3Group = new Group()
b1Group = new Group()
background1 = createSprite(400,200)
background1.addImage(sceneImg)
background1.scale = 3   
gun1=createSprite(720,200)     
gun1.addImage(gunImg)    
score = 0     
ground2 = createSprite(790,200,20,800)  
ground2.visible = false;       
}
function draw(){
	background("black")
	if(gameState==="Play"){

	
	if(frameCount%80 === 0){
		var r=Math.round(random(1,3))
		if(r===1){
			g1()
		}
		else if(r===2){
			g2()
		}
		else{
			g3()
		}
	}
	if(keyDown("space")){
		bullets()
	}
	if(keyDown("UP_ARROW")){
		gun1.y = gun1.y-5
	}
	if(keyDown("DOWN_ARROW")){
		gun1.y = gun1.y+5
	}
	if(b1Group.isTouching(g1Group)){
		g1Group.get(0).destroy()
		b1Group.get(0).destroy()
		score = score+1
	}
	if(b1Group.isTouching(g2Group)){
		g2Group.get(0).destroy()
		b1Group.get(0).destroy()
		score = score+1
	}
	if(b1Group.isTouching(g3Group)){
		g3Group.get(0).destroy()
		b1Group.get(0).destroy()
		score = score+1
	}
if(g1Group.isTouching(ground2)||g2Group.isTouching(ground2)||g3Group.isTouching(ground2)){
	gameState = "End"
}
	drawSprites();
textSize(20)
fill("red")
	text("Score: "+score,500,20)
}
if(gameState === "End"){
	textSize(40)
	fill("blue")
	text("Game Over",300,200)
}
}
function bullets(){
	b1 = createSprite (680,gun1.y-5,10,20)
	b1.addImage(bulletImg)
	b1.scale = 0.3
	b1.velocityX = -2
	b1.lifetime = 400
	b1Group.add(b1)
}
function g1(){
	ghost1 = createSprite (-20,Math.round(random(50,350)),10,20)
	ghost1.addImage(ghost1Img)
	ghost1.scale = 0.3
	ghost1.velocityX = 1
	ghost1.lifetime = 1000
	g1Group.add(ghost1)
}
function g2(){
	ghost2 = createSprite(-20,Math.round(random(50,350)),10,20)
	ghost2.addImage(ghost2Img)
	ghost2.scale = 0.3
	ghost2.velocityX = 1
	ghost2.lifetime = 1000
	g2Group.add(ghost2)
}
function g3(){
	ghost3 = createSprite(-20,Math.round(random(50,350)),10,20)
	ghost3.addImage(ghost3Img)
	ghost3.scale = 0.3
	ghost3.velocityX = 1
	ghost3.lifetime = 1000
	g3Group.add(ghost3)
}