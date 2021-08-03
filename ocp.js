// Open-Closed Principle
// Software entities(Classes, modules, functions) should be open for extension, not modification

class Animal {
    constructor(string) { }
    getAnimalName() { }
}


const animals = [
    new Animal('lion'),
    new Animal('mouse'),
    // new Animal('snake')
];

function AnimalSound(a) {
    for (let i = 0; i <= a.length; i++) {
        if (a[i].name == 'lion')
            log('roar');
        if (a[i].name == 'mouse')
            log('squeak');
        if (a[i].name == 'snake')
            log('hiss');
    }
}
AnimalSound(animals);


class Animal {
    //...
    makeSound();
}
class Lion extends Animal {
    makeSound() {
        return 'roar';
    }
}
class Squirrel extends Animal {
    makeSound() {
        return 'squeak';
    }
}
class Snake extends Animal {
    makeSound() {
        return 'hiss';
    }
}


function AnimalSound(a) {
    for(let i = 0; i <= a.length; i++) {
        log(a[i].makeSound());
    }
}
AnimalSound(animals);



class Discount {
    giveDiscount() {
        if(this.customer == 'fav') {
            return this.price * 0.2;
        }
        if(this.customer == 'vip') {
            return this.price * 0.4;
        }
    }
}

class VIPDiscount extends Discount {
    getDiscount() {
        return super.getDiscount() * 2;
    }
}

class SuperVIPDiscount extends VIPDiscount {
    getDiscount() {
        return super.getDiscount() * 2;
    }
}