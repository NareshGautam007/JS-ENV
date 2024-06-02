```markdown
# JavaScript setTimeout and Scope

This document explains the behavior of `setTimeout` in JavaScript and how it interacts with different variable scopes.

## Function `x`

```javascript
function x() {
    let z = 2005
    let y =  setTimeout(() => {
        console.log(z);
    }, 4000);
    return z;
}
```

Function `x` declares a variable `z` with the value `2005`. It then sets a timeout to log the value of `z` after 4 seconds. The function returns the value of `z`.

## Function `a`

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

Function `a` demonstrates the issue with using `var` in a `for` loop with `setTimeout`. Because `var` is function-scoped, all the timeouts refer to the same `i` variable, which is `6` after the loop ends.

## Function `b`

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

Function `b` solves the issue in function `a` by using `let` instead of `var`. Because `let` is block-scoped, each timeout refers to a different `i` variable.

## Function `c`

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

Function `c` also solves the issue in function `a`, but by using a closure. Each timeout now refers to the `x` parameter of the `closure` function, which is a different variable for each iteration of the loop.
```
