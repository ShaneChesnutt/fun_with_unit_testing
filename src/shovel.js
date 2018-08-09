module.exports = class Shovel {
  constructor() {
    this.thrustDamage = 10;
    this.slashDamage = 10;
  }

  thrustAttack() {
    return this.thrustDamage;
  }

  slashAttack() {
    return this.slashDamage;
  }
}
