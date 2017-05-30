"use strict"

"use strict"

class Animal {

  constructor(numLegs = 2, isWarmBlooded) {
    this.numLegs = numLegs;
    this.isWarmBlooded = isWarmBlooded;
  }

}

class Frog extends Animal {
  constructor() {
    super(4, false);
  }
}

class Bat extends Animal {
  constructor() {
    super(2, true);
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super(2, true);
  }
}

class Fox extends Animal {
  constructor() {
    super(4, true);
  }
}

class Chicken extends Animal {
  constructor() {
    super(2, true);
  }
}
