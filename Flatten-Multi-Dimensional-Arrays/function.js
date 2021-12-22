/*
You can easily flatten multi-dimensional arrays using the flat() method but flat() method only flattens the first level in the multi-dimensional array.


But you can flatten any level of multi-dimensional arrays by passing `infinity` in the flat() method.
*/


let oneLevel = ["a", "b", ["c", "d"], "e", ["f", "g"]];
console.log(oneLevel.flat());
// output : ["a", "b", "c", "d", "e", "f", "g"]




let multiLevel = ["a", ["b", "c", ["d", "e", ["f", "g"]]]];
console.log(multiLevel.flat());
// output : ["a", "b", "c", Array(3)]

console.log(oneLevel.flat(Infinity));
// output : ["a", "b", "c", "d", "e", "f", "g"]