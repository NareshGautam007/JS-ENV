function x() {
    let z = 2005
    let y =  setTimeout(() => {
        console.log(z);
    }, 4000);
    return z;

}

//console.log("Calling Function x ", x()); // 2005 


function a() {
   for(var i = 0; i <=5; i++) {
       setTimeout(() => {
           console.log(i);
       },i * 1000)
   }
   console.log("JavaScript Values")
}

// There are same memory locations for i values in var keyword which are passed through settimeout functions // 6 6 6 6 6 6

//console.log("Calling Function a ", a()); // 6 6 6 6 6 6 JavaScript Values

function b() {
    for(let i = 0; i <=5; i++) {
        setTimeout(() => {
            console.log(i);
        },i * 1000)
    }
    console.log("JavaScript Values With Let Function")
}
// There will be separate copy of let function for i values which will be passed to settimeout  functions // 0 1 2 3 4 5

//console.log("Calling Function b ", b()); // 0 1 2 3 4 5 JavaScript Values With Let Function


// Sorting the issue with var keyword - the issue with the same memory location for i values in var keyword which are passed through settimeout functions
// We will use the closure concept to solve this issue


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

//console.log("Calling Function c ", c()); // undefined
