class Ball {

    constructor(x, y,width,height) {
        var options = {
          'density': 1,
          'frictionAir': 1
          //'restitution':0.5
        };
        this.body = Bodies.rectangle(x, y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      };
      display(){
        var pos = this.body.position;		
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        //rotate(angle);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
      };
    };