const testbrackets = "[()]{}{[()()]()}";
const testbrackets2 = "{(})[]";
const testbrackets3 = "[(])";

//driver function used for display and passing values.
function checkBrackets() {
    
    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalancedB(testbrackets);
    
    
    //used for display no need to change
    let msg = "";
    
    if (results == true){
        msg = `Brackets are balanced ==> ${testbrackets}`;
    }
    else{
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }

    //display the message
    document.getElementById("results").innerHTML = msg;

}

//takes an array of strings and returns the longest one. 
function isBalanced(brackets) {

    return false

}

