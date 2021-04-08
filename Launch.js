class Launch{
    constructor(body1,point2){
var options={

    bodyA:body1,
     pointB:point2,
     stiffness: 0.04,
     length:10
     
    }

    this.launch=Constraint.create(options)
    World.add(world,this.launch)
    }
      
    fly() {

        this.launch.bodyA=null

    }
    
    attach(body){
		this.launch.bodyA = body;
	}
      
    show(){
        if(this.launch.bodyA){
            var pointA= this.launch.bodyA.position
            var pointB= this.launch.pointB
            strokeWeight(3)
            stroke("red")
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            } 
        }
    
}