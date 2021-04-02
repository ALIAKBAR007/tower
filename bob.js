class Bob {
  constructor(x, y) {
    var z = {
        'restitution':0.8,
        'friction':0.3,
        'density':2.0
    }
    this.body = Bodies.rectangle(x, y, 50, 50, z);
    this.width = 50;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    pos.x = mouseX
    pos.y = mouseY
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
};