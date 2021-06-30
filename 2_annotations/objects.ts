const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void{
        this.age = age;
    }
};

// If we want to do destructuring, we need to include the 
// expected structure of the object!
const { age }: { age: number } = profile;
const { 
    coords: { lat, lng } 
}: { coords: {lat: number, lng: number } } = profile;