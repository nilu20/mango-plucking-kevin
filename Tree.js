class Tree{
    constructor(x, y) {
        var Toptions = {
           isStatic:true
           
        }
        this.x=x;
        this.y=y;
        this.treeWidth=450;
        this.treeHeight=600;
        this.treeThickness=10;
        
        this.image = loadImage("sprites/tree.png");
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness)
        World.add(world, this.bottomBody)
  
      }
      display(){
   
        
         var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,this.treeHeight-900,this.treeWidth, this.treeHeight)
			pop()
      }
}