function a() {
    var x = 1000;
    var y = 3000;
   //console.log(y)
    function b() {
        console.log(x);
    }
    return b;
}

//console.log("Calling Function a ", a()); // 1000

//a()()

// var close = a()
// console.log(close())

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

//outest()()() // console.log(a,b,c) // 5 10 20


let d = outest()
//d()() // console.log(a,b,c) // 5 10 20

let e = outest()()
//e() // console.log(a,b,c) // 5 10 20


function f(){
    var x = 1000;
    var y = 3000;
   //console.log(y)

}

//console.log(f()) // undefined // The undefined is returned because the function f() does not have a return statement.


function g(){
    var x = 1000;
    var y = 3000;
   //console.log(y)
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

//g()()() // 1000 This is outside the function, the take the hierarchy from the global scope
// The closure is a function that has access to the outer function scope even after the outer function has returned.

// Benefits of Closure in JavaScript 
// Data hiding and encapsulation - closer will help use to data hiding and encapsulation

function counter(){
    var count = 0;
    return function inCrement(){
        count++;
        console.log(count);
    }
    //console.log(count) // 0

}
// there will be the count variable is secured by the closure function
//console.log(count) // ReferenceError: count is not defined
//counter()() // 1


class counterWithConstructor {
    constructor() {
        var count = 0;
        this.inCrement = function () {
            count++;
            console.log(count);
        };
        //console.log(count) // 0
        this.deCrement = function () {
            count--;
            console.log(count);
        };
    }
}

let counterWithConstructorObj = new counterWithConstructor()
// Calling increment the counter value 
counterWithConstructorObj.inCrement() // 1

// Calling the decrement the counter value
counterWithConstructorObj.deCrement() // 0





// Disadvange of the closure
// Clouser is takes all of momory the execute the function with exumulate the veriable and fucntioson 
// if the closure is not handle properly this can cause of the momory leaks or freeze the executation or browser
// Becuase the closure is not garabse collector untill the whole execution is done

//### Garbase collection 
// Garbase collection is the machenisam which is take the unused verible and function the takes them at the time of execution and remove from memeru 
// V8 and Chrome has smart garbase collection machanisam
