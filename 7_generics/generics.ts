class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number{
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string{
        return this.collection[index];
    }
}

// Condensing the above two down by using generics!
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get (index: number): T{
        return this.collection[index];
    }
}

const strings = new ArrayOfAnything<string>(["a","b","c"]);

// Type inference works with generics!
const nums = new ArrayOfAnything([1,2,3]); // TS knows that nums is an ArrayOfAnything<number>

// Example of generics with functions

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

printAnything<string>(["a","b","c"]);
printAnything(["a","b","c"]); // Same as above w/ inference - but we want to have it anyways for proper error checking.

// Generic Constraints
class Car {
    print() {
        console.log("I am a car");
    }
}

class House {
    print() {
        console.log("I am a House");
    }
}

interface Printable {
    print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void{ // The extends syntax guarantees that our generic type MUST conform to the interface!
    for (let i = 0; i < arr.length; i++){
        arr[i].print();
    }
}

printHousesOrCars<House>([new House(), new House()]);