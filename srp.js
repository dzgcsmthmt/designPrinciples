// Single-responsibility principle
// A class should have only one job.

class Animal {
    constructor(string){ }
    getAnimalName() { }
    saveAnimal(Animal) { }
}

// The constructor and getAnimalName manage the Animal properties while the saveAnimal manages the Animal storage on a database.
/*
class Animal {
    constructor(string){ }
    getAnimalName() { }
}

class AnimalDB {
    getAnimal(Animal) { }
    saveAnimal(Animal) { }
}
*/


class CalorieTracker{
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount){
        this.currentCalories += calorieCount;
        if(this.currentCalories > this.maxCalories){
            this.logCalorieSurplus();
        }
    }

    logCalorieSurplus(){
        console.log('Max calorie exceeded');
    }

}