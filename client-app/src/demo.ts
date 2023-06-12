//  let data:number|string = 42;
// data = '42';
// console.log(data);

export interface Duck {
    name:string,
    numLegs:number,
    makeSound:(sound:string) => void  // makeSound?:(sound:string)=>void
}
const duck1: Duck = {
    name : 'huey',
    numLegs: 4,
    makeSound : (sound:any) => console.log(sound)
}
const duck2: Duck = {
    name : 'dewye',
    numLegs: 4,
    makeSound : (sound:any) => console.log(sound)
}


//override typescript behaviour
duck1.makeSound('quack')

export const ducks = [duck1,duck2]

