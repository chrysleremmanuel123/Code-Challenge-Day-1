// Alice was bored that day,so she was sitting on the riverbank.
// Suddenly  she notices a talking, White Rabbit with a pocket watch. 
// It ran fast,and she followed it, down a rabbit hole.
// She fell into the hole and found a magical wonderland with dark trees, beautiful flowers.
// She found many ways numbered from 1,2,3,........18.
// she was confused which is the right way that will lead her to her home. 
// She found a cute bird, standing in one of the tree. 
// Alice asked the bird the way to go back to her home.
// The bird said a two digit number( say 23 ) and asked her to find the sum of its digits (2+3=5) and that numbered way will lead her to her home.
// Alice was already confused, so pls help Alice in finding the route to her home....


//Write a function to return the route to her home
let unit;
let tens;
let result;
var find_Route = function (number) {
    unit = Math.trunc(number % 10);
    tens = Math.trunc((number / 10) % 10);
    result = unit + tens;
    return result;
}

//Run SpecRunner.html to check the Test Case.