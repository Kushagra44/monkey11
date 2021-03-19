
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var PLAY=1
var END=0
var gameState=PLAY
var score
var survivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  obstacleImage=loadImage("obstacle.png")
 
}



function setup() {
  createCanvas(400,400)
monkey=createSprite(50,280,10,10)
  monkey.addAnimation("m1",monkey_running)
  monkey.scale=0.1
  ground=createSprite(70,350,800,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  bananaGroup=new Group()
  obstacleGroup=new Group()
  score=0
  survivalTime=0
  
}


function draw() {
  background("white")
  fill (0)
  text ("SURVIVAL TIME: "+survivalTime,100,30)
  
  text ("SCORE: "+score,300,50)
  monkey.collide(ground)
  if(gameState===PLAY){
    survivalTime=Math.ceil(frameCount/frameRate())
    ground.velocityX=-4
    if(ground.x<0){
      ground.x=ground.width/2
    }
    if(keyDown("Space")&&monkey.y>=314){
      monkey.velocityY=-16
    }
    monkey.velocityY=monkey.velocityY+0.8
  
    bananaFood()
   obstacles()
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach()
    score=score+1
    
  }
  if(obstacleGroup.isTouching(monkey)){
    gameState=END
  }
  }
  if(gameState===END){
    survivalTime=0
    survivalTime.visible=false
    obstacleGroup.destroyEach()
    bananaGroup.destroyEach()
ground.velocity=0
    stroke("red")
    strokeWeight(4)
    fill("red")
    textSize(30)
    text("GAME OVER",110,200)
    fill("blue")
    stroke("blue")
    strokeWeight(4)
    textSize(30)
    text("MONKEY IS DEAD",70,240)
  }
drawSprites()
  
  
}


function bananaFood(){
  if(frameCount%80===0){
    
  
  banana=createSprite(400,350,40,10)
  banana.addImage(bananaImage)
    banana.velocityX=-4
    banana.y=Math.round(random(120,200))
    banana.scale=0.1
    banana.lifetime=200
    bananaGroup.add(banana)
  }
}
function obstacles(){
   if(frameCount%300===0){
    
  
  obstacle=createSprite(250,325,10,10)
  obstacle.addImage(obstacleImage)
    obstacle.velocityX=-4
    obstacle.scale=0.1
    obstacle.lifetime=200
     obstacleGroup.add(obstacle)
  }
}




