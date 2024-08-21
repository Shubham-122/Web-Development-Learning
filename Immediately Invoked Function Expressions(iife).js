// var res = (function(){
//     var x = 10;
//     var y = 20;
//     console.log(x+y);
// }) ();

// Now how To use IIFE's to create private variables

var counter = (function(){
    var count = 0;

    return {
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        },
        getCount: function(){
            return count;
        }
    }
}) ();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Here we used getCount() method to access the private variable count. Without it we wouldn't have been able to access this variable.


// console.log(counter.count()), -> this would not work.