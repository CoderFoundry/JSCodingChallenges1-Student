const numbers = [9, 1, 3, 27, 15, -5, 13, 7];

//driver function used for display and passing values.
function displayNumbers() {
    
    //implement the four functions to return sum, avg, max and min
    let sum = sumNumbers(numbers);
    let avg = avgNumber(numbers);
    let max = maxNumber(numbers);
    let min = minNumber(numbers);
    let sumRec = sumNumbersRecursive(numbers,index);

    //used for display not need to change unless you are doing only the sum function
    let msg = `Sum = ${sum}<br>Avg = ${avg.toFixed(2)}<br>Max = ${max}<br>Min = ${min}`;
    
    //display the message    
    document.getElementById("results").innerHTML = msg;
    document.getElementById("numberslist").innerHTML = numbers.toString();
}

//takes an array of numbers and returns the sum of all the numbers
function sumNumbers(numArry) {
    return 0;
}

//takes an array of numbers and the current index in the array and returns the sum of all the numbers using recursion
//Recursion is the technique of the function calling itself. 
//NOTE * SEE CHALLENGE 11. 
function sumNumbersRecursive(numArry, index) {
    return 0;
}


//takes an array of numbers and returns the average of all the numbers
function avgNumber(numArry) {
    return 0;
}

//takes an array of numbers and returns the max number
function maxNumber(numArry) {
    return 0;
}

//takes an array of numbers and returns the min number
function minNumber(numArry) {
    return 0;
}