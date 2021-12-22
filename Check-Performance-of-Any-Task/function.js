/*
You can use performance.now() method to check how much milliseconds it took to complete a specific task,

wrap your task with performance.now() time stamps, just like shown below:-
*/



let time1 =performance.now();

for (i = 0; i < 5000; i++) {
    console.log(i);
}




let time2 =performance.now();

console.log(`loop took: ${time2 - time1} milliseconds to execute`);


// output : loop took: 112.89999997615814 milliseconds to execute



/* Note: the time can vary with machines */
