function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0; //length of snake
    this.tail = [];// an array


// SNAKE EATS FOOD

    this.eat = function(pos){ // receives the vector for where the food is 
        var d = dist(this.x, this.y, pos.x, pos.y); // distance between where the snake is and where the food is
        if (d < 5){ // if that distance is less than one pixel
            this.total++;
            return true; // this tells me that the snake did eat the food
        }else{
            return false; // this tells me if the snake didnt eat the food

        } // END OF SNAKE EATS FOOD
    }


    this.dir = function(x, y) {//the direction
        this.xspeed = x; // the x axis speed
        this.yspeed = y; // the y axis speed
    
    }

// DEATH
   this.death = function(){
       for (var i = 0; i <this.tail.length; i ++){
           var pos = this.tail[i]; // lok at each position on the tail
           var d = dist(this.x, this.y, pos.x, pos.y); // the snake except for the head
           if (d < 1){
               console.log('starting over');// when i ide it will print starting over in console
               this.total = 0;
               this.tail = [];
           }
       }
   }

    this.update = function(){ 
        if (this.total === this.tail.length){ 
        for (var i = 0; i < this.total-1; i++){
            this.tail[i] = this.tail[i+1]; // show the tail as it was a moment ago so that the long tail follows the route it was taking
        }
    }
        this.tail[this.total-1] = createVector(this.x,this.y); // new vector is the new location



        this.x = this.x +this.xspeed*scl; // the x value changes by the speed value
        this.y = this.y +this.yspeed*scl; // same as the y value it changes based on the speed, as it always updates

        // this constrains it so it doesnt go off the border
        this.x = constrain(this.x, 0, width-scl); // width constraint
        this.y = constrain(this.y, 0, height-scl); // height constraint
        
    }
    

    this.show =function(){
        fill(params.snakeColour);
        for (var i = 0; i < this.tail.length; i++){
//tail of the snake            
            angleMode(DEGREES);
          ellipse(this.tail[i].x, this.tail[i].y, scl*2, scl*2); // multipliyes the scale of the point on the frid by two so the cirles overlap eachother giving a snake look
            //rect(this.tail[i].x, this.tail[i].y, scl, scl); // for loop adding to tail length
        }
       
//head of the snake
        angleMode(DEGREES);
        arc(this.x, this.y, scl*2, scl*2, myAngle/2, 360 - myAngle/2, PIE); 
        //rect(this.x, this.y, scl, scl); // draws snake at the scale
    }
     //fill(255);
        //for (var i = 0; < this.total i++){
           // rect(this.tail[i].x, this.tail[i].y, scl, scl);
        //}

        //s.dir(0,1); // dir = 1;

        //if( s.dir = (0,1)){
           // translate(50, 50);
           // rotate(Angle);
           // angleMode(DEGREES);
       // arc(this.x, this.y, scl*2, scl*2, myAngle/2, 360 - myAngle/2, PIE); 
        //}
   
}