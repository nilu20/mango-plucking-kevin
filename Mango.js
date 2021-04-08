class Mango{
    constructor(x, y, r) {
        var Moptions = {
          isStatic:true,
          restitution :0,
                friction :1,
        }
        
        this.body = Bodies.circle(x, y, r, Moptions);
        this.width = width;
        this.height = height;
        this.r= r
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
          imageMode(CENTER);
          ellipseMode(CENTER)
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}