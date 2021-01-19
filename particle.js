class Particle{
    constructor(x,y,r){
        var options={
            'isStatic':false,
            'friction':1,
            'restitution':0.04
        };

         //this.x=x;
         //this.y=y;
         this.r=r;

         this.body=Bodies.circle(x,y,this.r,options);
         this.color=color(random(0,255),random(0,255),random(0,255));
         World.add(world,this.body);


       
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        nostroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
        
        
    }

    
}