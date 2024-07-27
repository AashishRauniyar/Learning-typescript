let a: number; 

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

