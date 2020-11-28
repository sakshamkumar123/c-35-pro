//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  //dog = loadImage("do.png")
  happyDog= loadImage("dogImg1.png")

  
	//load images here
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  foodStock=database.ref('food')
  foodStock.on("value",readStock)

  dog=createSprite(250,200,10,10)
  dog.addImage(happyDog)
  dog.scale = 0.2
}


function draw() { 
  background (46, 139, 87) 

  if(keyWentDown(UP_ARROW) ){
    writeStock(foodS)
    dog.addImage(happyDog)
  }
   

  drawSprites();
  textSize(30)
  fill("black")
  text("food left: "+foodS,170,300)
  //add styles here

}

function writeStock(x){
if (x<=0){
  x=0
}else{
  x=x-1
}
 database.ref('/').update({
   food:x
 })
}

function readStock(data){
   foodS = data.val();
}

