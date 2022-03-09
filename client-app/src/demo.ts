export interface duck {
    name: string,
    numLegs: number,
    makeSound: (sound: string) => void;
}

const duck1: duck = {
    name: 'huney',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}
const duck2: duck = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}
export const ducks = [duck1, duck2]