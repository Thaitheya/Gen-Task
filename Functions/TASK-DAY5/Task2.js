class Circle {
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `radius=${this.radius},color=${this.color}`;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
const circle1 = new Circle();
console.log(circle1.toString());
console.log("Area of the circle: ",circle1.getArea().toFixed(2));
console.log("Area of the Circumference: ",circle1.getCircumference().toFixed(2));
console.log("-----------------------------------------------")
const circle2 = new Circle(2.5, 'blue');
console.log(circle2.toString()); 
console.log("Area of the circle: ",circle2.getArea().toFixed(2));
console.log("Area of the Circumference: ",circle2.getCircumference().toFixed(2));
