// Interface Segregation Principle
/**
 * Clients should not be forced to depend upon interfaces that they don't use.——客户端只依赖于它所需要的接口；它需要什么接口就提供什么接口，把不需要的接口剔除掉。
 * The dependency of one class to another one should depend on the smallest possible interface.——类间的依赖关系应建立在最小的接口上
 * 即，接口尽量细化，接口中的方法尽量少
 */

interface IShape {
    drawCircle();
    drawSquare();
    drawRectangle();
    // drawTriangle();
}

class Circle implements IShape {
    drawCircle() {
        //...
    }
    drawSquare() {
        //...
    }
    drawRectangle() {
        //...
    }
}
class Square implements IShape {
    drawCircle() {
        //...
    }
    drawSquare() {
        //...
    }
    drawRectangle() {
        //...
    }
}
class Rectangle implements IShape {
    drawCircle() {
        //...
    }
    drawSquare() {
        //...
    }
    drawRectangle() {
        //...
    }
}


interface IShape {
    draw();
}
interface ICircle {
    drawCircle();
}
interface ISquare {
    drawSquare();
}
interface IRectangle {
    drawRectangle();
}
interface ITriangle {
    drawTriangle();
}

class Circle implements ICircle {
    drawCircle() {
        //...
    }
}
class Square implements ISquare {
    drawSquare() {
        //...
    }
}
class Rectangle implements IRectangle {
    drawRectangle() {
        //...
    }
}
class Triangle implements ITriangle {
    drawTriangle() {
        //...
    }
}
class CustomShape implements IShape {
    draw() {
        //...
    }
}


class Circle implements IShape {
    draw(){
        //...
    }
}

class Triangle implements IShape {
    draw(){
        //...
    }
}

class Square implements IShape {
    draw(){
        //...
    }
}

class Rectangle implements IShape {
    draw(){
        //...
    }
} 