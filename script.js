function greet(name = "Guest") {
    return "Hello, " + name + "!!";
}
console.log(greet("Trish"));
console.log(greet());

function addNumbers (num1, num2){
    console.log("Inside the function, num1 = " + num1 + " and num2 = " + num2);
    return num1 + num2;
    
}
console.log(addNumbers(40,7));

let x = 27;

function changeValue() {
    let x = 42;
    console.log("Inside the function, the local variable x = " + x);
}

console.log("Before function call, the global variable x =" + x);

changeValue();

console.log("After the function call, x is still " + x);

function outerFunction(){
    let count = 5;
    return function(){
        count++;
        console.log("This is my variable incrementing by one inside the closure: " + count);
    }
}

const increment = outerFunction();

increment();
increment();
increment();


