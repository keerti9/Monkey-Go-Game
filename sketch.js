
var monkey , monkey_running
var banana ,bananaImage, rock, rockImage
var FoodGroup, rockGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  
  monkey.scale=0.1

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  FoodGroup= new Group();
  rockGroup= new Group();
}


function draw() {
background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500,50);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  monkey.collide(ground);
  spawnRock();
  spawnBanana();
  drawSprites();

  
}


function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    bananalifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

function spawnRock() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var rock = createSprite(400,315 ,40,10);
    rock.addImage(rockImage);
    rock.scale = 0.2;
    rock.velocityX = -3;
    
     //assign lifetime to the variable
   rock.lifetime = 200;
    
    rockGroup.add(rock);
  }
}





