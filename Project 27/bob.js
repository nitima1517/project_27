class Bob{

    constructor(x,y,radius){

        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.radius = radius;
        this.x = x;
        this.y = y;
     this.body = Bodies.circle(this.x, this.y, this.radius, options)
     this.body.shapeColor = "red";     
     World.add(world, this.body)
    };
    display(){
         
        var pos = this.body.position;
        fill("red")
        ellipse(pos.x, pos.y, this.radius, this.radius)
    };
};