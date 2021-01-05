var  dog, happyDog, database, foodS, foodStock,dogImg
var database;
function preload()
{
dogImg = loadImage("images/dogImg.png")
dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
 
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
}

 foodStock = database.ref("food") 
 goodStock.on("value",function(data){
   FoodS = data.val()
 })

 text("PRESS UP ARROW KEY TO FEED THE DOG")
 
  drawSprites();
 
  

}



