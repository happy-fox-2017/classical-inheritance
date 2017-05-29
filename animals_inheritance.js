"use strict"
class Animal {
  constructor(num_legs = 2, is_warm_blooded = true) {
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
  }
}

class SuperPower {
  constructor() {

  }

  use_laser_vision() {
    console.log('Laser : rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
  }

  be_invisible() {
    console.log('Hilang : ggggggggggggggggggggggggggggg')
  }
}

class Frog extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.SuperPower = new SuperPower();
  }
}
class Bat extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.SuperPower = new SuperPower();
  }
}
class Chimpanzee extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.SuperPower = new SuperPower();
  }
}
class Fox extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.SuperPower = new SuperPower();
  }
}
class Chicken extends Animal {
  constructor(num_legs, is_warm_blooded = false) {
    super(num_legs, is_warm_blooded);
    this.SuperPower = new SuperPower();
  }
}

let bird = new Animal();
console.log(`Kaki burung ada : ${bird.num_legs}`);
console.log('--------------------------------')

let jago = new Chicken(this.num_legs, false);
console.log(`Kaki ayam jago ada : ${jago.num_legs}`);
console.log(`Ayam jago berdarah panas : ${jago.is_warm_blooded}`);
console.log('--------------------------------')

let bangkong = new Frog(4, false);
console.log(`Kaki bangkong ada : ${bangkong.num_legs}`);
console.log(`Bangkong berdarah panas : ${bangkong.is_warm_blooded}`)
console.log('--------------------------------')

let batman = new Bat(this.num_legs, false);
console.log(`Kaki batman ada : ${batman.num_legs}`);
console.log(`Batman berdarah panas : ${batman.is_warm_blooded}`)
batman.SuperPower.use_laser_vision()
batman.SuperPower.be_invisible();
