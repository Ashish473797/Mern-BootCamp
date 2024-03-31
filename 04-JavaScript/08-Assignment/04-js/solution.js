
class Shape{
    shape;

    constructor(){
        this.shape = 'anyshape';
    }

    draw(){
        console.log('Draw ', this.shape);
    }
}

class Circle extends Shape{
    
    constructor(){
        super('circle');
    }

    draw(){
        console.log('Draw Circle');
    }
}

class Rectangle extends Shape{

    constructor(){
        super('rectangle');
    }

    draw(){
        console.log('Draw Rectangle');
    }
}

let shape = new Shape();
shape.draw();

let circle = new Circle();
circle.draw();

let rectangle = new Rectangle();
rectangle.draw();