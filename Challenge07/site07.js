//driver function used for display and passing values.
function checkPalindrome() {
    
    //get values from the page. no need to change.
    let str = document.getElementById("wordOne").value;

    if (str == "") {
        alert("Please enter a word or phrase");
        return;
    }

    //implement the isPalindrome function
    let palindrome = isPalindrome(str);
    
    //used for display. no need to change.
    let msg = "";
   
    if (palindrome == true) {
        msg = "The word or phrase is a palindrome";
    }
    else{
        msg = "The word or phrase is NOT a palindrome";
    }

    document.getElementById("results").innerHTML = msg;
}

//takes an string to check if it is a palindrome.
//returns true or false. 
function isPalindrome(str) {

    return false;
}