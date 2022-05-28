//driver function used for display and passing values.
function findVowels() {

    //getting values from the page no need to change.
    let str = document.getElementById("wordOne").value;

    if (str == "") {
        alert("Please enter a word or phrase");
        return;
    }

    //implement getVowelCount
    let vowelObj = getVowelCount(str);
    
    //used for display no need to change
    //check if the obj returned is empty
    if (Object.keys(vowelObj).length === 0){
        alert("Error: Vowel Object is Empty");
        return;
    }

    document.getElementById("results").innerHTML = `You entered <strong>"${str}"</strong> it has ${vowelObj.vCount} vowels.<br>The vowels found are ${vowelObj.vFound.toString()}`;

}

//takes an string and returns the vowel count and the vowels found as an object.
function getVowelCount(str) {
    
    return {};

}