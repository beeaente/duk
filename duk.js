 // Ash Valente
 // Nicholas Brown-Hernandez
 // Web FX 502-A22 sect 03
 // duk

 //*How to use: move your mouse to move duck, click on duck to make duck angry then hold space bar to make "got any grapes appear"
 //*This is about the duck story. How the duck walks up to the lemonade stand and asks the man running the stand if he's got any 
 //*grapes and gets angry when he finds out there aren't any grapes.

function setup() {
  createCanvas(windowWidth, windowHeight)

  background(44,163,63)
  img = loadImage("duk.jpg")
  imag = loadImage("Lemonade_stand.jpg")
  im = loadImage("angyduk.jpeg")
  grapes = loadImage("grapes.png")
  
  
  rect(0,0,windowWidth,300)
  fill(169,239,244)
}

function draw() {
  
//display  
  background(44,163,63)
  image(img,mouseX,mouseY)  
  image(imag,900,300)
  imag.resize(500,550)
  rect(0,0,windowWidth,300)
  fill(169,239,244)

if (keyIsDown(32))
    image(grapes, random(2000),random(800))
  frameRate(20)
}

function mousePressed(){
  img = im
}  

function keyPressed(){
  if (keyIsDown(LEFT_ARROW))
    image(grapes, random(3000),random(200))
  
}
