// Convert-any-Values-to-Boolean.

/*
Using !! in front of any value will convert that value to boolean
*/



console.log(!!"string");
// output- true


console.log(!!0);
// output- false


console.log(!!1);
// output- true


console.log(!!undefined);
// output- false


// Note: Doing !!value is same as doing Boolean(value)