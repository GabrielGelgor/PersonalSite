const drink = {
    colour: 'brown',
    carbonated: true,
    sugar: 40
};

// By adding this annotation, we set a specific order requirement 
// for the types! This creates a tuple.
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Creating a tupple data structure!
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// These can be good when working with database rows.