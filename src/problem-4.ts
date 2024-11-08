// type of Circle
type Circle = { shape: "circle"; radius: number };

// type of Rectangle
type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

// Union of Circle and Rectangle
type Shape = Circle | Rectangle;

// Calculatoion
const calculateShapeArea = (value: Shape): number => {
    if (value.shape === "circle") {
        let circleArea = Math.PI * value.radius * value.radius;
        return parseFloat(circleArea.toFixed(2));
    } else if (value.shape === "rectangle") {
        let rectangleArea = value.width * value.height;
        return rectangleArea;
    } else {
        return 0;
    }
};
