"use strict"

class Animal {
  constructor(name, legs, blood) {
    this.name = name
    this.num_legs = legs
    this.is_warm_blooded = blood
    this.superPower = new SuperPower(name, legs)
  }
}

class Ular extends Animal {
  constructor(name, legs, blood, reproduction) {
    super(name, legs, blood)
    this.reproduction = reproduction
  }
}

class Kijang extends Animal {
  constructor(name, legs, blood, hornCount) {
    super(name, legs, blood)
    this.hornCount = hornCount
  }
}

class SuperPower {
  constructor (name, legs) {
    this.name = name
    this.legs = legs
  }
  
  deadlyTwist() {
    if (this.name == 'ular') {
      console.log(`The power of ${this.name} is a super 1000 Ton deadly twist`);
    } else {
      console.log(this.error());
    }
  }
  
  mightNeck() {
    if (this.name == 'jerapah') {
      console.log(`${this.name} has power to destroy building with his neck in one smash`);
    } else {
      console.log(this.error());
    }
  }
  
  superKick() {
    if (this.legs > 2) {
      console.log(`${this.name} Super power kick with ronaldo super power`);
    } else {
      console.log(this.error());
    }
  }
  
  error() {
    return `Sorry this is not your power`
  }
}

let ular = new Ular('ular', 0, false, 'Ovo')
let kijang = new Kijang('kijang', 4, true, 5)
ular.superPower.mightNeck()
kijang.superPower.superKick()



