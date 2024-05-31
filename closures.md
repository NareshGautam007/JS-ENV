## Closure In JavaScript

The functions and the lexical environment are bound together in JavaScript as called as the closure

## Example
![Closure img](../JS-ENV/images/closure.png)

##Script Example
```
function x(){
    var x = 100
    function y(){
        console.log(x) // console
    }
    console.log(x) // console
}
console.log(y) // console

OUTPUT :-
100

```