"use strict"

class SuperPower {
  useLaserVision() {
    console.log('Using laser vision!...');
  }

  beInvisible() {
    console.log('Become invisible...');
  }
}

class Animal {

  constructor(isWarmBlooded, numLegs = 2) {
    this.isWarmBlooded = isWarmBlooded;
    this.numLegs = numLegs;
    this.superPower = new SuperPower();
  }

}

class Frog extends Animal {
  constructor() {
    super(false, 4);
  }
}

class Bat extends Animal {
  constructor() {
    super(true);
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super(true);
  }
}

class Fox extends Animal {
  constructor() {
    super(true, 4);
  }
}

class Chicken extends Animal {
  constructor() {
    super(true);
  }
}

// Driver Code :

const frog = new Frog();
const bat = new Bat();
const chimpanzee = new Chimpanzee();
const fox = new Fox();
const chicken = new Chicken();

const animals = [frog, bat, chimpanzee, fox, chicken];
animals.forEach((animal) => {
  console.log('-----------------------------------');
  console.log(`${animal.constructor.name} ${animal.isWarmBlooded ? 'warm blooded' : 'cold blooded'} with ${animal.numLegs} legs using : `);
  animal.superPower.useLaserVision();
  animal.superPower.beInvisible();
  console.log('-----------------------------------');
});
