type Superhero = {
    name: string;
    superpower: string;
};

type Human = {
    name: string;
    age: number;
}

let person: Superhero | Human;
person = {
    name: 'Ironman',
    superpower: 'Fly'
};
console.log(person);
person = {
    name: 'Tony Stark',
    age: 45
};

console.log(person); 


const data : string[] | number[] = ['Ironman', 'Tony Stark', 'Thor'];
