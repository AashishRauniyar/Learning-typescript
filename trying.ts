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