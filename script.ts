// Type Assertions

function abcdef(){

    // type assertions
    (document.querySelector("p") as HTMLParagraphElement)
}

// Literal Types

// String literal types
// value change grna mildaina cause its literally defined
let abok: "harsh";

// Number literal types

// another example
let stringornumber: "aashish" | "14";

stringornumber = "aashish";
stringornumber = "14";
//stringornumber = "15"; // error cannot be changed



// Boolean literal types
let isOK: true;

isOK = true;
//isOK = false; // error cannot be changed 


//example