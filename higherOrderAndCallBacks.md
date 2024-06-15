# JavaScript Higher Order Functions and Callbacks

This document explains the use of higher order functions and callbacks in JavaScript, using the calculation of the area and circumference of a circle as an example.

## Basic Area and Circumference Calculation

First, we define an array of radii:

```javascript
let radii = [2,4,5,6,7,8,9,10,11,12];
```

Next, we define two functions to calculate the area and circumference of circles with these radii:

```javascript
let calculateArea = function(radius){
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

let calculateCircumference = function(radius){
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
```

## Higher Order Functions and Callbacks

We can optimize the above code using higher order functions and callbacks. A higher order function is a function that takes another function as an argument, and/or returns a function as its result. A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

First, we define our callback functions:

```javascript
const areaCallback = function (radius){
    return Math.PI * radius * radius;
}

const circumferenceCallback = function (radius){
    return 2 * Math.PI * radius;
}
```

Next, we define a higher order function that takes a radius and a logic function as arguments:

```javascript
const calculate = function (radius, logic){
    let output = [];
    for(let i=0; i<radius.length; i++){
       output.push(logic(radius[i])); 
    }
    return output;
}
```

We can now use this higher order function to calculate the area and circumference of the circles:

```javascript
let areaResult = calculate(radii, areaCallback);
let circumferenceResult = calculate(radii, circumferenceCallback);
```

## Map Function

Finally, we can use the `Array.prototype.map` function to apply a function to every element in an array. We can define our own version of the `map` function like this:

```javascript
Array.prototype.calculateMap = function (logic){
    let output = [];
    for(let i=0; i<this.length; i++){
       output.push(logic(this[i])); 
    }
    return output;
}

let resultMap = radii.calculateMap(circumferenceCallback);
console.log(resultMap);
```

This will output the circumference of each circle in the `radii` array.