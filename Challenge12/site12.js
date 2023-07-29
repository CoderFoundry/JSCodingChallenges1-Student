

//driver function used for display and passing values.
function displayNumbers() {

    //implement fizzbuzz and return the array of values
    let FizzBuzz = fizzBuzz();
    
    //no need to change just used to display the values
    document.getElementById("numberslist").textContent = FizzBuzz.join(", ");
}

//Returns an array of numbers from 1 to 100
//and for multiples of ‘3’ use “Fizz” instead of the number
//and for the multiples of ‘5’ use “Buzz” 
// and for multiples of both 3 and 5 using "FizzBuzz".
function fizzBuzz() {
    return [];
}


