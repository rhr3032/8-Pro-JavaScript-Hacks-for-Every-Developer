/*
With replace() method including regex(with a modifier) you can replace all the occurence of a string.
*/

let sentence = "Hi I'm Raisul Hasan Rafi, a full stack web developer.";

console.log(sentence.replace(/Raisul Hasan Rafi/g, "Rafi"));


// output : Hi I'm Rafi, a full stack web developer.