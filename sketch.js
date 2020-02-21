function setup() {
  createCanvas(windowWidth,windowHeight)
  background(51)
  stroke(255)
  strokeWeight(1)
  angleMode(RADIANS)
  angle = PI/4
  slider = createSlider(0, TWO_PI, random(TWO_PI), 0.001)
  slider.position(0,0)
  nombreDeFaces = int(random(2,10))
  treeSize = 150

}

function draw() {
  background(0)
  angleMode(RADIANS)

  translate(width/2, height/2)
  angle = slider.value()
  console.log(slider.value())

  for (i = 0; i < nombreDeFaces; i ++){
  push()
  rotate(TWO_PI/nombreDeFaces*i)
  branche(treeSize)

  pop()

  }

}

function branche(taille, scaleSwitcher){

  line(0, 0, 0, -taille)
  translate(0, -taille)

  if (taille > nombreDeFaces + 2){
    push()
    rotate(angle)
    branche(taille*0.65)

    pop()

    push()
    rotate(-angle)
    branche(taille*0.65)
    pop()
  }

}
