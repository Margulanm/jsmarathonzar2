function greet(){
    return 'Hi my name is '+this.name;
}

const person={
    name:"Pikachu",
    greet:greet,
};

const enemy={
    name:"charmander",
    greet:greet,
};

console.log(person.greet());
console.log(enemy.greet.call(person));