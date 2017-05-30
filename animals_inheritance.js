"use strict" //hoisting

class Animal { //class
  constructor(num_legs = 2, is_warm_blooded='dingin'){
    this.num_legs = num_legs //scope , kalau console.log(this) = {}
    this.is_warm_blooded = is_warm_blooded //variable instance
    this.superpower = new SuperPower() //akses class
  }
}

class Frog extends Animal { //class inheritance
  constructor(num_legs, is_warm_blooded){ //kalau constructor sama seperti parent ga usah
    super (num_legs, is_warm_blooded)  
  }
}

class Bat extends Animal { //class inheritance
  constructor(num_legs, is_warm_blooded){ //kalau constructor sama seperti parent ga usah
    super (num_legs, is_warm_blooded)  
  }
}

class Chimpanzee extends Animal { //class inheritance
  constructor(num_legs, is_warm_blooded){ //kalau constructor sama seperti parent ga usah
    super (num_legs, is_warm_blooded)
      
  }
}

class Fox extends Animal { //class inheritance
  constructor(num_legs, is_warm_blooded){ //kalau constructor sama seperti parent ga usah
    super (num_legs, is_warm_blooded)  
  }
}

class Chicken extends Animal { //class inheritance
  constructor(num_legs, is_warm_blooded){ //kalau constructor sama seperti parent ga usah
    super (num_legs, is_warm_blooded)  
    this.SuperPower = new SuperPower  //composition
  }
}

class SuperPower {
  // constructor() {
  //   this.powerLaser = this.use_laser_vision()
  //   this.invisible = this.be_invisible()
  // }
  
  use_laser_vision(){
    console.log('diberi sinar');
    return true
  }
  
  be_invisible(){
    console.log('menghilang');
    return true
  }
}


let kodok = new Frog (this.num_legs, 'panas') // instantiate, instance object, pendefinisian class
let kelelawar = new Bat (this.num_legs, 'panas') //instantiate
let orangUtan = new Chimpanzee (4) //instantiate
let rubah = new Fox (4, 'dingin') //instantiate
let ayamJago = new Chicken () //instantiate


console.log(rubah.superpower.use_laser_vision());
console.log(rubah.superpower.be_invisible());
console.log(`Binatang kodok berkaki ${kodok.num_legs} dan berdarah ${kodok.is_warm_blooded}`);
console.log(`Binatang kelelawar berkaki ${kelelawar.num_legs} dan berdarah ${kelelawar.is_warm_blooded}`);
console.log(`Binatang orang utan berkaki ${orangUtan.num_legs} dan berdarah ${orangUtan.is_warm_blooded}`);
console.log(`Binatang rubah berkaki ${rubah.num_legs} dan berdarah ${rubah.is_warm_blooded}`);
console.log(`Binatang ayam berkaki ${ayamJago.num_legs} dan berdarah ${ayamJago.is_warm_blooded}`);
