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
// type ma = auxa but interface ma audaina
function getUser(user) {
}
// classes in TS, just like in any other programming language
// inside classes writing function is denied
class AirConditioner {
    constructor() {
        this.color = "white";
        this.category = "AC";
        this.company = "Sony";
        this.tonnage = 1.5;
        this.temperature = 22;
    }
    turnOn(name) {
        console.log(`turning on ${name}`);
    }
    turnOff() {
        console.log("Remote is off");
    }
    raiseTemperature() {
        this.temperature++;
    }
    decreaseTemperature() {
        console.log("Temperature is decreased");
    }
    printBrand(company) {
        console.log(this.company);
    }
}
let ac1 = new AirConditioner();
let ac2 = new AirConditioner();
ac1.turnOn("ac1");
ac2.turnOn("ac1");
class Pendrive {
    constructor() {
        this.company = "San Disk";
        this.price = 1200;
        this.data = null;
    }
    putData(data) {
        console.log(`putting some data ${data}`);
        this.data = data;
    }
    getData() {
        console.log(this.data);
    }
}
let pendrive1 = new Pendrive();
pendrive1.putData("12");
pendrive1.getData();
// Extending class 
class Food {
    constructor() {
        this.price = 1200;
    }
    eat() {
        console.log("eating");
    }
}
class Mithai extends Food {
    constructor() {
        super(...arguments);
        this.name = "mithai";
    }
}
let mithai1 = new Mithai();
mithai1.eat();
// constructor is a special type of method that initiates the object
// run foremost
class Shoes {
    constructor(name) {
        this.company = name;
    }
}
let s1 = new Shoes("nike");
let s2 = new Shoes("adidas");
class Bottle {
    // initializing and declaring at the same place
    // we dont need to declare variable separately after we have added access modifier
    // in the parameter of constructor
    constructor(shape) {
        this.shape = shape;
        this.shape = shape;
    }
}
// acccess modifiers
// public protected void
// if an variable is private, it can only be accessed into class
//in this case we have to create getter 
//public can be used inside class and can be accessed outside class via instance
//private can be accessed inside class and can not be accessed in derived class
//protected can be accessed inside class and can be accessed in derived class but not outside class
class User {
    constructor() {
        this.balance = 1390;
    }
}
let u1 = new User();
//u1.balance = 1; // throws an error
class Admin extends User {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    getBalance() {
        this.balance;
    }
}
let a1 = new Admin();
// another example
class Abcd {
    constructor() {
        this.name = "aashish";
    }
    setName(name) {
        this.name = name;
    }
}
let okk = new Abcd();
okk.setName("ramesh");
// readonly properties
class Omg {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
let omg = new Omg("omg");
omg.getName();
// used for discount in real life
// Getters and setters
class GetSet {
    constructor(username) {
        this.username = username;
        this.username = username;
    }
    // works like property of an object / not a function
    get name() {
        return this.username;
    }
    set name(value) {
        this.username = value;
    }
}
let getset = new GetSet("Ram");
// can be accessed using name of getter and also value of it can be set
console.log(getset.name);
getset.name = "Shyam";
console.log(getset.name);
// getter and setter are used to access the private properties of the class
// Functions in Type script
// same as JS
// must return anything or write void
// it is important to specify return type of a function like in java
// named function
function newOK() {
    console.log("hello");
}
// anonymous function
let qq = function () {
    console.log("hello");
};
//example of anonymous function
// arrow function
const abb = () => {
    console.log("hello");
};
// Explicit return type
// afai return type lekhyo vane
// like in the example below
function divide(a, b) {
    return a / b;
}
// implicit return type
// return type lekhyena vane, automatically hune
//example
function subtract(a, b) {
    return a - b;
}
// Optional parameters
// value is not compulsory to give using ? sign
function randomOne(name, age) {
    console.log(name, age);
}
let newVar = randomOne('Ram');
// Default parameters
// default value is given to the parameter
// if no value is given, default value is used
function randomTwo(name = "aashish", age = 23) {
    console.log(name, age);
}
randomTwo();
// Rest Parameters ...
// used to pass multiple values to a function
// it is an array
// rest parameter should be the last parameter
function names(...names) {
    console.log(names);
}
names('Ram', 'Shyam', 'Hari');
// Exporting and importing
// export const PI = 3.14;
// import { PI } from "./utils";
// console.log(PI); // 3.14
