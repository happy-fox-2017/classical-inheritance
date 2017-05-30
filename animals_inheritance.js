"use strict"

class Animal {
  constructor(name, legs, diet, types) {
    this.name = name;
    this._legs = legs;
    this._diet = diet;
    this._types = types;
  }

  get legs() {
    return this._legs;
  }

  get diet() {
    return this._diet;
  }

  get types() {
    return this._types;
  }


  characteristics () {
    if (this.types == 'mammals') {
      return '- Covered by hair or fur \n- Warm blooded \n- Vertebratae \n- Produce Milk';
    } else if (this.types == 'reptiles') {
      return '- Covered by scales\n- Cold-blooded\n- Vertebratae\n- Most lay hard-shelled eggs n land';
    } else if (this.types == 'birds') {
      return '- Covered by feathers\n- Warm blooded\n- Vertebratae\n- Laying eggs';
    } else if (this.types == 'insects') {
      return '- Hexapod or Octapod (spiders)\n- Facet eyed\n- Small size\n- Invertebratae';
    } else if (this.types == 'fish') {
      return '- Most have gills\n- Live in waters (found in lakes, river, and oceans';
    }
  }

  conclusions() {
    console.log(`${this.name} is a ${this.legs}-legged animal. It's a ${this.diet}, a ${this.types}, and have following characteristics:\n${this.characteristics()}`);
  }

} // ----- end of animal -----


class SuperPower {
  firaga() {
    return console.log(`Attack using Firaga, a fire-based attack.`);
  }

  aero() {
    return console.log(`Attack using Aero, a wind-based attack.`);
  }

  stone() {
    return console.log(`Attack using Stone, an earth-elemental attack.`);
  }
} // ----- end of SuperPower -----


class Fox extends Animal {
  constructor(name, legs, diet, types, power) {
    super(name, legs, diet, types);
    this.power = new SuperPower()
  }
}

class Turtle extends Animal {
  constructor(name, legs, diet, types, power) {
    super(name, legs, diet, types);
    this.power = new SuperPower()
  }
}

class Butterfly extends Animal {
  constructor(name, legs, diet, types, power) {
    super(name, legs, diet, types);
    this.power = new SuperPower()
  }
}


var rubah = new Fox('Rubah', 4, 'carnivore', 'mammals');
var kura = new Turtle('Kura-kura', 4, 'herbivore', 'reptiles');
var kupu = new Butterfly('Kupu-kupu', 6, 'herbivore', 'insects');


rubah.conclusions();
kura.conclusions();
kupu.conclusions();

rubah.power.firaga();
kura.power.stone();
kupu.power.aero();
