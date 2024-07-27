"use strict";
//primitive types:
// number boolean undefined string characters
//reference types:
// arrays objects functions
let a = 12;
let b = a;
let arrok = [1, 2, 3, 4, 5];
let arr2 = arrok;
arr2.pop();
// now the last value will be removed from both the arrays due to referencing in js ns ts
let ab;
let arr;
let ok;
let isDone;
// example of tuple 
let myArr = [1, 'hello'];
let newArr = [true, 'hello', 1];
//this is a loophole
newArr.push(2);
console.log(newArr);
// never defines that it will never return anything
function abcd() {
    while (true) {
        console.log('hello infinitelu');
    }
}
// doesnot return anything
function defg() {
    console.log("hello");
}
//enums
let upDirection = "UP";
let downDirection = "DOWN";
let leftDirection = "LEFT";
let rightDirection = "RIGHT";
var Direction;
(function (Direction) {
    Direction["TOP"] = "TOP";
    Direction["BUTTOM"] = "BOTTOM";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
Direction.BUTTOM;
//real life example
var MousePosition;
(function (MousePosition) {
    MousePosition[MousePosition["x"] = 0] = "x";
    MousePosition[MousePosition["y"] = 0] = "y";
})(MousePosition || (MousePosition = {}));
// Type Inference
let z = 10;
// Union
let variables;
// common methods matra dinxa
variables = "12";
if (typeof variables === 'string') {
    variables.toUpperCase();
}
// else if(typeof variables === 'number'){
//     variables.toFixed(2);
// }
// function ma xa vane error didaina
function abcde(avar) {
    if (typeof avar === 'string') {
        avar.toUpperCase();
    }
    else if (typeof avar === 'number') {
        avar.toFixed(2);
    }
}
abcde('hello');
abcde(10);
// Intersection types
let k;
let value = {
    name: 'Ram',
    section: 'A',
};
let l = 'Ram';
let user1 = {
    name: 'Ram',
    age: 23,
    address: 'Kathmandu',
};
function abcdee(human) {
    console.log(human);
    human.name;
    human.age;
}
function getMithai(food) {
    console.log(food);
    food.sweet;
}
function getSpicyFood(food) {
    console.log(food);
    food.spicy;
}
