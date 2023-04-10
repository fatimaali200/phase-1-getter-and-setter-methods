class Circle{
    constructor(radius){
        this.radius=radius;
    }
    get diameter(){
        return this.radius *2;
 
    }
    get circumference(){
        return Math.PI*this.diameter;

    }
    get area(){
        return Math.PI*Math.pow(this.radius,2);

    }

    set diameter(n){
        this.radius=n/2;

    }
    set circumference(n){
       this.radius=n/(2*Math.PI);
    }

    set area(n){
        this.radius=Math.sqrt(n/Math.PI);

    }

}

let  shapeCalculator=new Circle(6);
shapeCalculator.diameter;
shapeCalculator.circumference;
shapeCalculator.area;
shapeCalculator.diameter=36;
shapeCalculator.circumference=100;
shapeCalculator.area=200;