var bg
var earth,earth_Image
var rocket,rocket_Image
var rocket_Count=0
var spaceShip,spaceShip_Image1,spaceShip_Image2,spaceShip_Image3,spaceShip_Image4,spaceShip_Image5,spaceShip_Image6,spaceShip_Image7,spaceShip_Image8
var spaceShip_Group,rocket_Group
var score=0
var player_panel, player_panel_Image
var gameState="start"


function preload(){
  bg=loadImage("bg1.jpg")
  earth_Image=loadImage("earth.png")
  rocket_Image=loadImage("rocket.png")
  spaceShip_Image1=loadImage("spacecraft1.png")
  spaceShip_Image2=loadImage("spacecraft2.png")
  spaceShip_Image3=loadImage("spacecraft3.png")
  spaceShip_Image4=loadImage("spacecraft4.png")
  spaceShip_Image5=loadImage("spacecraft5.png")
  spaceShip_Image6=loadImage("spacecraft6.png")
  spaceShip_Image7=loadImage("spacecraft7.png")
  spaceShip_Image8=loadImage("spacecraft8.png")
  player_panel_Image=loadImage("player_panel.png")
}

function setup() {
  createCanvas(1366,625);
  spaceShip_Group=new Group()

  player_panel=createSprite(685,600,100,20)
  player_panel.addImage(player_panel_Image)
  player_panel.scale=1.08
  
  
  
}

function draw() {
  background(bg); 
  
 
  aliens_space_ships()

  
  mousePressed()
  drawSprites();
  /*fill("white")
  textSize(20)
  text("SCORE : "+score,1300,200)*/
}




function aliens_space_ships(){
  if(frameCount % 175===0){
    spaceShip=createSprite(Math.round(random(50,1360)),50,50,50)
    var rand = Math.round(random(1,8));
  switch(rand) {
    case 1: spaceShip.addImage(spaceShip_Image1);
            break;
    case 2: spaceShip.addImage(spaceShip_Image2);
            break;
    case 3: spaceShip.addImage(spaceShip_Image3);
            break;
    case 4: spaceShip.addImage(spaceShip_Image4);
            break;
    case 5: spaceShip.addImage(spaceShip_Image5);
            break;
    case 6: spaceShip.addImage(spaceShip_Image6);
            break;
    case 7: spaceShip.addImage(spaceShip_Image7);
            break;
    case 8: spaceShip.addImage(spaceShip_Image8);
            break;
    default: break;
  }
  spaceShip.scale=0.4
  spaceShip.velocity.y=5
  spaceShip.lifetime=55

  spaceShip_Group.add(spaceShip)

  }

}

function mousePressed(){
  if(gameState!=="over"){
    rocket=createSprite(600,400,20,20)
    rocket.addImage(rocket_Image)
    rocket.scale=0.5
  
    rocket.velocity.y=-7
  }
  if(rocket.y===400){
    rocket.x=mouseX
  }
}