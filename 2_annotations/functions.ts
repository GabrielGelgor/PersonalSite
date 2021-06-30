// Conscise way to annotate a function!
const add = (a: number, b: number): number => {
    return a + b;
};

const sub = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
};

const mult = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
}

// A return type of 'never' indicates that we will NEVER reach the end
// of the function due to some interruption.
const throwError = (message: string): never => {
    throw new Error(message);
};

// Destructuring with annotations
const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
};