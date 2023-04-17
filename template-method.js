// The template method is a method in a superclass, usually an abstract superclass, and defines the skeleton of an operation in terms of a number of high-level steps. These steps are themselves implemented by additional helper methods in the same class as the template method.
// The helper methods may be either abstract methods, in which case subclasses are required to provide concrete implementations, or hook methods, which have empty bodies in the superclass. Subclasses can (but are not required to) customize the operation by overriding the hook methods. The intent of the template method is to define the overall structure of the operation, while allowing subclasses to refine, or redefine, certain steps
class Shape{
    constructor(ctx){
        this.ctx = ctx;
    }
    render(){
        this.update();
        this.draw();
    }
    update(){
        throw Error('must be overriden')
    }
    draw(){
        throw Error('must be overriden')
    }
}
class Circle{
    constructor(ctx,x,y,radius){
        super(ctx);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    update(x,y,radius){

    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.radius, this.x, this.y, 0, 2 * Math.PI);
        ctx.stroke();
    }
}