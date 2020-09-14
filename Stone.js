class Stone {
  constructor(x,y,r) {
    var options = {
        isStatic: false,
        restitution: 0,
        friction: 1,
        density: 1.2
    }
    
    this.x = x;
    this.y = y;
    this.r=r
    this.body = Bodies.rectangle(this.x,this.y,this.r,options);
    this.image = loadImage("sprites/stone.png");
    World.add(world, this.body);
  }
  display(){
   var stoneposition=this.body.position
   this.body.position.x = mouseX;
   this.body.position.y = mouseY;
   push();
translate(stoneposition.x,stoneposition.y)
rotate(this.body.angle)
imageMode(CENTER)
ellipseMode(CENTER)
image(this.image,0,0,this.r*2,this.r*2);
pop();
   
  }
}
    
      
     
    
  
      
      
    
  