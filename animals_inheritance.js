"use strict"

class Animal{
  constructor(name, num_legs, is_warm_blooded){
    this.name = name;
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
  }
  
  tampil(){
    console.log(this.name);
    console.log(this.num_legs);
    console.log(this.is_warm_blooded);
  }
}

class Frog extends Animal {
  constructor(name, num_legs, is_warm_blooded, habitat){
    super(name, num_legs, is_warm_blooded);
    this.habitat = 'Frog live in jungle';
    this.superPower = new superPower();
  }
}

class Bat extends Animal {
  constructor(name, num_legs, is_warm_blooded, have_wings) {
    super(name, num_legs, is_warm_blooded);
    this.have_wings = 'Bat have wings';
    this.superPower = new superPower();
  }
}

class Chimpanzee extends Animal {
  constructor(name, num_legs, is_warm_blooded,habitat) {
    super(name, num_legs, is_warm_blooded);
    this.habitat = 'jungle';
    this.superPower = new superPower();
  }
}

class Fox extends Animal {
  constructor(name, num_legs, is_warm_blooded,have_tail) {
    super(name, num_legs, is_warm_blooded);
    this.have_tail = have_tail;
    this.superPower = new superPower();
  }
}

class Chicken  extends Animal{
  constructor(name, num_legs, is_warm_blooded, spawn) {
    super(name, num_legs, is_warm_blooded);
    this.spawn = spawn;
    this.superPower = new superPower();
  }
}

class superPower {
  constructor() {}
  
  use_laser_Vision(){
    console.log('this is my power ========================================>>>>>>>>>>>');
  }
  
  be_invisible(){
    console.log(`you can't see me now`);
  }
}

// let frog = new Frog('kodok', 4, 'warm blood');
// console.log(frog);

// let bat = new Bat('kalong',2, 'warm blood');
// console.log(bat);

let fox = new Fox('kyubi',4,'warm blood','have 9 tail');
console.log(fox);
fox.superPower.use_laser_Vision();
fox.superPower.be_invisible();


