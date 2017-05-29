"use strict"
class Animal {
  constructor(name,food) {
  this.num_legs = 2
  this.name = name
  this.food = food
  this.sup = new SuperPower(name)
  }
}

class Trex extends Animal{
  constructor(name,food) {
    super(name,food)
    this.name = name
  }
}

class Mammoth extends Animal {
  constructor(name,food) {
    super(name,food)
    this.name = name
    this.num_legs = 4
  }
}

class SuperPower {
  constructor (name) {
    this.name = name
  }

  superStr() {
    console.log(`${this.name} use her super strength`);
  }

  fly() {
    console.log(`${this.name} fly above her enemies`);
  }
}

let trex = new Trex('Trex','carnivorous')
let mammoth = new Mammoth('Mammoth','herbivorous')
// console.log(trex.num_legs);
mammoth.sup.superStr();