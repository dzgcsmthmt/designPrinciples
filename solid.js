// Single Responsibility Principle
class Animal {
    constructor(name){ }
    getAnimalName() { }
    saveAnimal(a) { }
}


class Animal {
    constructor(name){ }
    getAnimalName() { }
}
class AnimalDB {
    getAnimal(a) { }
    saveAnimal(a) { }
}

//Open-Closed Principle

// Liskov Substitution Principle
// 凡是调用父类的地方都能用子类透明的替换

// Interface Segregation Principle
// fly run 

// Dependency Inversion Principle
//面向接口编程