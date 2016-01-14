//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var tree;
var rotation;
var serial;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
//asterisk = loadAnimation("assets/asterisk.png", "assets/triangle.png", "assets/square.png", "assets/cloud.png", "assets/star.png", "assets/mess.png", "assets/monster.png");
tree = loadAnimation("assets/Tree_00000.png", "assets/Tree_00028.png");

  
}

function setup() {
  createCanvas(1000,1000,windowWidth,windowHeight);
    //animation(tree, width/2, height/2);
    
    serial = new p5.SerialPort();
    serial.open("/dev/cu.usbmodem1411");
    serial.onData(gotData);

}
function gotData() {
  // Read the data as text (a string)!
  var data = serial.readLine();
  // Check to make sure something really came in
  if (data.length > 0); {
    rotation=data;
    // Look at the data
    // Do something with it, like to another variable?
    console.log(data);
    
    
    
    //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
    image(tree.getImageAt(rotation),0,0,windowWidth,windowHeight);
  }
}

function draw() {
  //background(255,255,255);  
  // print(rotation)
  
  
  
  
//  animation(asterisk, 500, 150);
}


