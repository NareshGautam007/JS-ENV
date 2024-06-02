```markdown
# JavaScript setTimeout and Closure

This material covers the use of `setTimeout` function and closures in JavaScript.

## Example 1: Basic setTimeout

```javascript
function x() {
    let z = 2005
    let y =  setTimeout(() => {
        console.log(z);
    }, 4000);
    return z;
}
```
In this example, `setTimeout` is used to delay the execution of a function that logs the value of `z`.

## Example 2: setTimeout with var in loop

```javascript
function a() {
   for(var i = 0; i <=5; i++) {
       setTimeout(() => {
           console.log(i);
       },i * 1000)
   }
   console.log("JavaScript Values")
}
```
In this example, `setTimeout` is used within a loop. However, because `var` does not have block scope, all the functions created by `setTimeout` share the same `i` variable, leading to unexpected results.

## Example 3: setTimeout with let in loop

```javascript
function b() {
    for(let i = 0; i <=5; i++) {
        setTimeout(() => {
            console.log(i);
        },i * 1000)
    }
    console.log("JavaScript Values With Let Function")
}
```
In this example, `let` is used instead of `var` in the loop. Because `let` has block scope, each function created by `setTimeout` gets its own `i` variable, leading to the expected results.

## Example 4: setTimeout with closure in loop

```javascript
function c(){
    for(var i=0; i<=5;i++){
        function closure(x) {
            setTimeout(() =>{
                console.log(x);
            },x * 1000)
        }
        closure(i);
    }
}
```
In this example, a closure is used to create a separate scope for each `i` variable, solving the issue with `var` in the loop. Each function created by `setTimeout` gets its own `i` variable, leading to the expected results.
```
