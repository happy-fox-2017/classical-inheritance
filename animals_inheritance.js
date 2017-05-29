"use strict";
//Super Class
class SuperPower{
  constructor(){}
  superAbilityTiger(){
    console.log(`TigerCross, Ready to Fang-Claw`);
  }
  superAbilityChicken(){
    console.log(`ChickBob, Ready to spining-mole`)
  }
}

class Animal{
  constructor(name,model, num_leg){
    this._name = name;
    this._model = model;
    this._num_leg = num_leg;
  }
  get Model(){
    return this._model;
  }
  get Name(){
    return this._name;
    }
  ColorAnimal(color){
    console.log(`The Animal ${this.Model} name is -${this.Name}- and the Color is ${color}`);
  }
}
//Child Class
class Chicken extends Animal{
  constructor(name,model,num_leg,sound){
    super(name,model,num_leg);
    this.sound = sound;
    this.SuperPower =  new SuperPower();
  }
  beep_Sound(){
    console.log(`The ${this._model}, and the name is ${this._name} going to sound ${this.sound}`);
  }
  count_Leg(){
    console.log(`The ${this._model}, have leg is ${this._num_leg}`);
  }
}

//Child Class
class Harimau extends Animal{
  constructor(name,model,num_leg,sound){
    super(name,model,num_leg);
    this.sound = sound;
    this.SuperPower = new SuperPower();
  }
  count_leg(){
    this._num_leg = 4;
    console.log(`The ${this._model}, have leg is ${this._num_leg}`);
  }
  beep_Sound(){
    console.log(`The ${this._model}, and the name is ${this._name} going to sound ${this.sound}`)
  }

}

var chicken = new Chicken("ChickBob","Chicken","2","Krok krok","spining-mole");
chicken.beep_Sound();
chicken.ColorAnimal("White");
chicken.count_Leg();
chicken.SuperPower.superAbilityChicken();
console.log("\n");
var Tiger = new Harimau("TigerCross","Tiger","4","Goarrrr","Fang-Claw");
Tiger.beep_Sound();
Tiger.ColorAnimal("Black-Orange");
Tiger.count_leg();
Tiger.SuperPower.superAbilityTiger();
