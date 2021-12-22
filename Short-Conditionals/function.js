/*
You can take use of &&(AND operator) and ||(OR operator) to shorten some conditions.
*/


let developer = "Rafi";

// Instead of this
if (developer == "Rafi") {
    console.log(21);
}

// you can do this
developer == "Rafi" && console.log(21);







// Instead of this
if (developer != "Rafi") {
    console.log("clean");
}

//you con do this
developer == "Rafi" || console.log("clean")