// Remove Falsy Values from Array

/* 

Passing Boolean in filter() will remove all falsy values that is => 
undefined, null, 0, "" (empty string), NaN and false 
from any array.

*/



let namesArray = ["JavaScript", 0, "React JS", null, "Python", false];

let filteredArray = namesArray.filter(Boolean);

console.log(filteredArray);
// output- ["JavaScript", "React JS", "Python"]
