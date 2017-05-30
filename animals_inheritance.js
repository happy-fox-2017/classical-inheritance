"use strict";

class Animals {
	constructor(is_mammals,num_legs=2,is_warm_blooded,sound) {
		this.is_mammals = is_mammals;
		this.num_legs = num_legs;
		this.is_warm_blooded = is_warm_blooded;
		this.sound = sound;
	}
}

	class Frog extends Animals {
		constructor (is_mammals,num_legs,is_warm_blooded,sound,jump_ability) {
			super (is_mammals,num_legs,is_warm_blooded,sound);
			this.jump_ability = jump_ability;
			this.superb = new Superpower();
		}
	}

	class Bat extends Animals {
		constructor (is_mammals,num_legs,is_warm_blooded,sound,fly_ability) {
			super (is_mammals,num_legs,is_warm_blooded,sound);
			this.fly_ability = fly_ability;
			this.superb = new Superpower();
		}
	}

	class Chicken extends Animals {
		constructor (is_mammals,num_legs,is_warm_blooded,sound,running) {
			super (is_mammals,num_legs,is_warm_blooded,sound);
			this.running = running;
			this.superb = new Superpower();
		}
	}

	class Fox extends Animals {
		constructor (is_mammals,num_legs,is_warm_blooded,sound,hunting) {
			super (is_mammals,num_legs,is_warm_blooded,sound);
			this.hunting = hunting;
			this.superb = new Superpower();
		}
	}

	class Chimpanzee extends Animals {
		constructor (is_mammals,num_legs,is_warm_blooded,sound,thinking) {
			super (is_mammals,num_legs,is_warm_blooded,sound);
			this.thinking = thinking;
			this.superb = new Superpower();
		}
	}

class Superpower {
	constructor () {}
		use_laser_vision () {
			return `have upgrade its eyes and have super power vision`;
		}
		be_invisible (x) {
			return `got ${x} item and make its body invisible`;
		}
}


let binatang = new Animals();
let kodok = new Frog (false,4, false,'krook','yes I can jump');
let lowo = new Bat (false,2, false, 'bipbip', true);
let simpanse = new Chimpanzee (true,2, true, "wakwak");
let rubah = new Fox(true, 4, true, "wooff");
let ayam = new Chicken (true);


console.log(kodok.is_mammals);
console.log(kodok.num_legs);
console.log(kodok.jump_ability);
console.log(ayam.is_mammals);
console.log(ayam.num_legs);
console.log(`Chimpanzee have ${simpanse.num_legs} legs.`);

console.log(simpanse.superb.use_laser_vision());
console.log(kodok.superb.be_invisible('WHITE HEART'));
 	