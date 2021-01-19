class Plingo{
    constructor(x,y,r){
        var options={
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.5,
        };

         this.x=x;
         this.y=y;
         this.r=r;

         this.body=Bodies.circle(this.x,this.y,this.r,options);
         
         World.add(world,this.body);

         
         

    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();

        for(var j=40;j<=width;j=j+50){
            plingo.push(new Plingo(j,75))
        }
        for(var j=15;j<=width-10;j=j+50){
            plingo.push(new Plingo(j,175))
        }
        
        
    }
}
 
