const numbers = [1,3,5,7,9];

//driver function used for display and passing values.
function displayNumbers() {
    
    //implement the four functions to return sum, avg, max and min
    let sum = sumNumbers(numbers);
    
    //used for display not need to change unless you are doing only the sum function
    let msg = `Sum = ${sum}`;
    
    //display the message    
    document.getElementById("results").innerHTML = msg;
    document.getElementById("numberslist").innerHTML = numbers.toString();
}

//takes an array of numbers and the current index in the array and returns the sum of all the numbers using recursion
//Recursion is the technique of the function calling itself. 
function sumNumbers(numArry) {
    return 0;
}

