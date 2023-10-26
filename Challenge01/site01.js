const marvelHeroes = [
    "Ant-Man",
    "Black Panther",
    "Black Widow",
    "Captain America",
    "Doctor Strange",
    "Hawkeye",
    "Hulk",
    "Iron Man",
    "Luke Cage",
    "Moon Knight",
    "Ms. Marvel",
    "Scarlet Witch",
    "Spider-Man",
    "Thor",
    "Wasp"
]
 // Driver function used for display and passing values.
 function findHero() {
    // Implement the function findLongestString that returns the longest word.
    let lword = findLongestString(marvelHeroes);

    // Used for display.
    document.getElementById("results").innerHTML = lword;

    // Extra credit: display all of the heroes to the page
}

// Takes an array of strings and returns the longest one. 
function findLongestString(namesArry) {
    // Declare a variable to store the longest string
    let lstring = "";

    for (let index = 0; index < namesArry.length; index++) {
        if (namesArry[index].length > lstring.length) {
            // Update lstring with the longer string
            lstring = namesArry[index];
        }
    }

    // Return the longest string
    return lstring;
}

// Call the driver function to find and display the longest hero
findHero();