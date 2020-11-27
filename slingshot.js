class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        
        this.bodyA=bodyA
            this.pointB=pointB
            this.Sling=Constraint.create(options)
            World.add(world,this.Sling)
        }
    
        attach(body){
            this.Sling.bodyA=bodyA ;
        }
    
        fly()
        {
            this.Sling.bodyA=null;
        }
    
        display()
        {
            if(this.Sling.bodyA)
            {
                var pointA=this.bodyA.position;
                var pointB=this.pointB
    
                strokeWeight(2);		
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    }
    
    
