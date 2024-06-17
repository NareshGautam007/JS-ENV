# JavaScript Closures

Closures in JavaScript are functions that have access to the outer (enclosing) function's variables—scope chain.

## Example 1: Basic Closure

```javascript
function a() {
    var x = 1000;
    function b() {
        console.log(x);
    }
    return b;
}
```
In this example, function `b` is a closure that has access to variable `x` from its outer function `a`.

## Example 2: Nested Closures

```javascript
function outest(){
    var c = 20;
    function outer1(){
        var b = 10;
        function inner1(){
            var a = 5;
            console.log(a,b,c);
        }
        return inner1;
    }
    return outer1;
}
```
In this example, function `inner1` is a closure that has access to variables `a`, `b`, and `c` from its outer functions `outer1` and `outest`.

## Example 3: Closure with Global Variable

```javascript
function g(){
    var x = 1000;
    var y = 3000;
    function h(){
        console.log(x);
        function i(){
            console.log(y,z)
        }
        return i;
    }
    return h;
}
let z = "This is outside the function, the take the hierarchy from the global scope"
```
In this example, function `i` is a closure that has access to variables `x`, `y` from its outer functions and global variable `z`.

## Example 4: Closure for Data Hiding and Encapsulation

```javascript
function counter(){
    var count = 0;
    return function inCrement(){
        count++;
        console.log(count);
    }
}
```
In this example, function `inCrement` is a closure that has access to variable `count` from its outer function `counter`. This demonstrates data hiding and encapsulation as `count` is not directly accessible from outside the `counter` function.

## Example 5: Closure with Class Constructor

```javascript
class counterWithConstructor {
    constructor() {
        var count = 0;
        this.inCrement = function () {
            count++;
            console.log(count);
        };
        this.deCrement = function () {
            count--;
            console.log(count);
        };
    }
}
```
In this example, `inCrement` and `deCrement` methods are closures that have access to variable `count` from the `counterWithConstructor` class constructor. This demonstrates data hiding and encapsulation as `count` is not directly accessible from outside the class constructor.
```
