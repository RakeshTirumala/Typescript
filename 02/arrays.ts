const superheroes : string[] = ['Superman', 'Spiderman', 'Batman'];

const superpowers : string[] = ['flight', 'strength', 'speed'];

superpowers.push('x-ray vision');

type Superhero = {
    name: string;
    superpower: string;
};

const heroes : Superhero[] = superheroes.map((name, i) => ({
    name,
    superpower: superpowers[i]
}));

console.log(heroes);

export {};
