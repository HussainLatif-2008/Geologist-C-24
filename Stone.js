class Stone {
    constructor(x, y, width, height) {
      var options = {
        
          'restitution':0.2,
          'friction':0.2,
          'density':1
          
      }
      this.body = Matter.Bodies.circle(x, y, 100, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      stroke("black");
      strokeWeight(3);
      ellipse(0, 0, 150, 150);
      pop();
    }
  };
  