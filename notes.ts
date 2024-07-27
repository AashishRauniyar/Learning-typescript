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




let ab: number; 

let arr: [];

let ok: string;

let isDone: boolean;

// example of tuple 
let myArr: [number, string] = [1, 'hello'];

let newArr: [boolean, string, number] = [true, 'hello', 1]; 

//this is a loophole
newArr.push(2);
console.log(newArr);


// never defines that it will never return anything
function abcd(): never{
    while (true) {
        console.log('hello infinitelu');
        
    }
}

// doesnot return anything
function defg(): void{
    console.log("hello");
    
}

//enums

let upDirection = "UP";
let downDirection = "DOWN";
let leftDirection = "LEFT";
let rightDirection = "RIGHT";

enum Direction {
    TOP = "TOP",
    BUTTOM = "BOTTOM",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
}

Direction.BUTTOM

//real life example

enum MousePosition{
    x = 0,
    y = 0,
}


// Type Inference

let z = 10;

// Union

let variables: string | number;
// common methods matra dinxa

variables = "12";

if(typeof variables === 'string'){
    variables.toUpperCase();

}
// else if(typeof variables === 'number'){
//     variables.toFixed(2);
// }


// function ma xa vane error didaina


function abcde(avar: string | number){
    if(typeof avar === 'string'){
        avar.toUpperCase();
    }
    else if(typeof avar === 'number'){
        avar.toFixed(2);
    }
}

abcde('hello');
abcde(10);

// Intersection types

let k: number & string;

type ClassMates = {
    section: string,
}

type Students={
    name: string,
}

type School = ClassMates & Students;

let value: School = {
    name: 'Ram',
    section: 'A',
}



//Type Aliases


// primtive type aliases
// object type aliases

type name = string;
let l: name = 'Ram';

type user ={
    name: string,
    age: number,
    address: string,
}

let user1: user = {
    name: 'Ram',
    age: 23,
    address: 'Kathmandu',
} 

interface Human{
    name: string;
}

interface Human{
    age: number;
}


function abcdee(human: Human){
    console.log(human);
    human.name;
    human.age;
}


interface Food{
    name: string,
    price: number,

}

// when we extend we can get the properties of interface which we extended
interface MithaFood extends Food{
    sweet: boolean,
}

interface SpicyFood extends Food{
    spicy: boolean,
}


function getMithai(food: MithaFood){
    console.log(food);
    food.sweet   
}

function getSpicyFood(food: SpicyFood){
    console.log(food);
    food.spicy;
}


// Interface

interface User{
    name: string,
    username: string,
    age: number,
    email: string,
    pasword: string,

}

type Sankhya = number;

// type ma = auxa but interface ma audaina

function getUser(user: User){
    
}

// classes in TS, just like in any other programming language

// inside classes writing function is denied

class AirConditioner{
    color= "white";
    category= "AC";
    company= "Sony";
    tonnage= 1.5;
    temperature = 22;

    turnOn(name: string){
        console.log(`turning on ${name}`);
    }

    turnOff(){
        console.log("Remote is off");
    }

    raiseTemperature(){
        this.temperature++;
    }

    decreaseTemperature(){
        console.log("Temperature is decreased");
    }

    printBrand(company: string){
        console.log(this.company);
    }

}

let ac1 = new AirConditioner();
let ac2 = new AirConditioner();


ac1.turnOn("ac1");
ac2.turnOn("ac1");

// Another class example

type Data = string | null;

class Pendrive{

    company= "San Disk";
    price = 1200;
    data: string | null = null;

    putData(data: Data){
        console.log(`putting some data ${data}`);
        this.data = data;
    }

    getData(){
        console.log(this.data);
        
    }

}

let pendrive1 = new Pendrive();
pendrive1.putData("12");
pendrive1.getData();


// Extending class 
class Food{
    price = 1200;

    eat(){
        console.log("eating");
        
    }
}

class Mithai extends Food{
    name = "mithai";
}


let mithai1 = new Mithai();

mithai1.eat();

// constructor is a special type of method that initiates the object
// run foremost

class Shoes{
    public company: string;


    constructor(name: string){
        this.company = name;
    }
    
}

let s1 = new Shoes("nike");
let s2 = new Shoes("adidas");


class Bottle{
    
    // initializing and declaring at the same place
    // we dont need to declare variable separately after we have added access modifier
    // in the parameter of constructor
    constructor(public shape: string){
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

class User{

    protected balance = 1390;
}

let u1 = new User();
//u1.balance = 1; // throws an error

class Admin extends User{
    private isAdmin = true;

    getBalance(){
        this.balance;
    }

}

let a1 = new Admin();



// another example

class Abcd{

    private name = "aashish";
    setName(name: string){
        this.name = name;
    }

}

let okk = new Abcd();

okk.setName("ramesh");

// readonly properties

class Omg{

    constructor(public readonly name: string){
        this.name = name;
    }

    getName(){
        console.log(this.name);
        
    }

    // i cannot do set name as name is only read only


}



let omg = new Omg("omg");

omg.getName();

// used for discount in real life


// Getters and setters

class GetSet{
    constructor(public username: string){
        this.username = username;
    }

    // works like property of an object / not a function
    get name(){
        return this.username;
    }

    set name(value: string){
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
function newOK(): void{
    console.log("hello");

}

// anonymous function
let qq = function(): void{
    console.log("hello");
}

//example of anonymous function


// arrow function
const abb = (): void => {
    console.log("hello");
}


// Explicit return type
// afai return type lekhyo vane
// like in the example below
function divide(a: number, b: number): number{
    return a / b;  
}



// implicit return type
// return type lekhyena vane, automatically hune
//example

function subtract(a: number, b: number){
    return a - b;
}

// Optional parameters
// value is not compulsory to give using ? sign

function randomOne(name: string, age?: number): void{
    console.log(name, age);
}


let newVar = randomOne('Ram');


// Default parameters
// default value is given to the parameter
// if no value is given, default value is used

function randomTwo(name: string = "aashish", age: number = 23): void{
    console.log(name, age);
}

randomTwo();

// Rest Parameters ...
// used to pass multiple values to a function
// it is an array
// rest parameter should be the last parameter


function names(...names: string[]){
    console.log(names);
}

names('Ram', 'Shyam', 'Hari');


// Exporting and importing

// export const PI = 3.14;

// import { PI } from "./utils";

// console.log(PI); // 3.14


// Generic in ts

// How should you install TypeScript in your project via npm?

// Run npm install typescript --save-dev in your terminal in your project's root folder.
// Run npm install typescript -g typescript anywhere in your terminal.

// Incorrect


// Run npm install typescript -dev in your terminal in your Visual Studio folder.


/*

In TypeScript, a generic type is a way to create reusable and flexible components or functions that can work with a variety of types, rather than a single one. Generics allow you to define a placeholder type that can be specified later, when the function or component is used. This increases the flexibility and reusability of the code.

Here’s an example to illustrate the concept:

typescript

// A simple function to return the first element of an array
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

// Using the generic function with different types
let numberArray = [1, 2, 3];
let stringArray = ['a', 'b', 'c'];

let firstNumber = firstElement(numberArray); // firstNumber is of type number
let firstString = firstElement(stringArray); // firstString is of type string

In this example:

    T is a type parameter that acts as a placeholder for the actual type.
    firstElement is a generic function that takes an array of type T and returns an element of type T.
    When firstElement is called with an array of numbers, T is inferred to be number.
    When firstElement is called with an array of strings, T is inferred to be string.

Generics are not limited to functions; they can also be used with classes, interfaces, and other structures. For example:

typescript

class GenericClass<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

let numberInstance = new GenericClass<number>(123);
let stringInstance = new GenericClass<string>('hello');

console.log(numberInstance.getValue()); // 123
console.log(stringInstance.getValue()); // hello

Here, GenericClass is a generic class with a type parameter T. Instances of GenericClass can hold values of different types, specified when the instance is created.
*/