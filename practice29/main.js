
// Build a function, do_math, that takes in 3 parameters: num1 (number), num2 (number), and operator (string)

// it uses the operator to determine what math to do to the numbers
// if '+', it adds them
// if '-', it subtracts them
// if '*' or 'x' or 'X', it multiplies them
// if '/', it divides them
// if then returns the result
// Example:
// do_math(5,2,'*')
// Return: 10

// function do_math(num1, num2, operator){
//     if (hello==="hello"){
//         var output= num1 + num2; 
//         return output; 
//     }
//     else if(){

//     }

// }

function doMath(num1, num2, operator){
    var result = null; 
    switch (operator){
       case "+":
       result=num1 * num2; 
       break; 
    case "-":
        result=num1 - num2; 
    case"*":
    case "X":
    case "x":
        result= num1 * num2; 
        break; 
    case "/":
        result= num1/num2; 
        break;   
    }
    return result; 
}

console.log(doMath (6,2, "+")); 