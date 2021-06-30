const carMakers: string[] = ['ford', 'toyota', 'Tesla'];
const dates = [new Date(),new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['Model S']
];

// Helps with inference when extracting values!
const carT = carMakers[0]; // We can now infer the carT var is a string!
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map' -> We know that 'car' will be a string!
carMakers.map((car: string): string => {
    return car;
})

// Flexible types
const importantDates: (string | Date)[] = [];