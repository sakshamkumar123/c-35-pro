//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  dog = loadImage("doglmg.png")
  happyDog= loadImage("dogImg1.png")

  
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database
  foodStock=database.ref('food')
  foodStock.on("value",readStock)

  dog=createSprite(250,200,50,50)
  dog.addImage(dog)
}


function draw() { 
  background (46, 139, 87) 

  if(keyWentDown(UP_ARROW) ){
    writeStock(foodS)
    dog.addImage(happyDog)
  }
   
  textSize(35)
  fill(black)
  text("food left"+foods,200,300)
  drawSprites();
  //add styles here

}

function writeStock(x){
if (x<=0){
  x=0
}else{
  x=x-1
}
 database.ref('food').update({
   food:x
 })
}


