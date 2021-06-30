let apples: number = 5; //How we assign var types in TS
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colours: string[] = ["red", "green","blue"];
let nums: number[] = [1,2,3];

// Classes
class Car { }
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = { // SEMICOLON to separate property
    x: 10,
    y: 20
};

// Functions - after arrow is the return, before are args!
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json ='{"x" : 10, "y" : 20 }';
const coords: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a var on one line and initialize it later.
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++ ){
    if (words[i] === 'green'){
        foundWord = true;
    }
}

// 3) When we want a variable whose type can't be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // can either be a number or boolean if none found.

for (let i = 0; i < numbers.length; i++ ){
    if (numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}