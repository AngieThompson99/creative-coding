let s;
let scl = 20; // nthis if for the scale oif the grid to keepo track of how big the snake is
let myAngle = 30;
let food;
let gui;

let system;
let emitters = []; // defining emitters as an array
let params={
   backgroundColour : 220,
   foodred : 255,
   foodgreen : 0,
   foodblue : 100,
   snakeColour : 255,
} 

function setup(){
    createCanvas(1000, 1000);
    background(params.backgroundColour);
   
	

    s = new Snake();
    frameRate(5);
    pickLocation();// make the food at the locations we picked
    //createVector(random(width), random(height));

    //gui
    gui=QuickSettings.create(550,25, "My snake game customisation")
   gui.addRange("BackgroundColour",0 , 255, params.backgroundColour);{
      //output("backgroundColour")
    }
    gui.addRange("food red",0 , 255, params.foodred);{     // RED FOOD
      //output("foodred")
    }
    gui.addRange("food green",0 , 255, params.foodgreen);{   //GREEN FOOD
      //output("foodgreen")
    }
    gui.addRange("food blue",0 , 255, params.foodblue);{     //BLUE FOOD
      //output("foodblue")
    }
    gui.addRange("snake Colour",0 , 255, params.snakeColour);{   //SNAKE COLOUR RED, 0 GREEN AND FULL BLUE
      //output("snakeColour")
    }
    
}

function pickLocation(){ // only pick alocation that is a spot on the grid
    const cols = floor(width/scl); // floor make sit a whole number
    const rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);// multply is by the scale to expand it back out
}

function draw(){
    background(params.backgroundColour);
    if (s.eat(food)){// SNAKE EATS FOOD  
        pickLocation(); // when the food is eaten, respawn the food in a new location
    }
    s.death(); // checks death before update
    s.update(); //updates the values
    s.show(); // show the updated snake

    emitters.forEach(emitter => { // for each element in the array
      emitter.createParticles(); // calling create particles method
      emitter.update();
      emitter.show();

    fill(params.foodred, params.foodgreen, params.foodblue); // COLOUR OF FOOD
    rect(food.x, food.y, scl, scl);// food is already assisned a random location, the size is the scl
    emitters.push(new Emitter(food.x, food.y)) ; // so that the emitter draws where th food is
//break; // will i need to break the loop?
} )


function keyPressed(){ // s.dir is defined in snake.js
    if(keyCode === UP_ARROW){ // ^ if i press the up arrow i want the y axis number to get smaller so that it means it going up
        s.dir(0,-1); // dir = 0;
      
    }else if (keyCode === DOWN_ARROW ){ // if i press the down arrow
        //then i want the direction of the y axis to go down so the number of the y gets bigger
        // this mean if i press the down arrow then it will go down
        s.dir(0,1); // dir = 1;
        
    }else if (keyCode === RIGHT_ARROW ){ // right arrow the x axis gets longer and so it goes to the right --->
        s.dir(1, 0); // dir = 4;
    }else if (keyCode === LEFT_ARROW ){ // if i press the left arrow the the x axis gets smaller and is going to the left <----
        s.dir(-1, 0); // dir = 3;
}
}

  };
