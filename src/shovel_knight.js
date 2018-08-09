const Shovel = require('./shovel');

module.exports = class ShovelKnight {
  constructor(armor = null) {
    this.name = 'Shovel Knight';
    this.strength = 5;
    this.fortitude = 5;
    this.weapon = new Shovel();
    this.armor = armor;
  }

  equipArmor(armor) {
    this.armor = armor;
  }

  unequipArmor(armor) {
    this.armor = null;
  }

  thrustAttack() {
    return this.strength + this.weapon.thrustAttack();
  }

  slashAttack() {
    return this.strength + this.weapon.slashAttack();
  }

  takeDamage(damage) {
    return damage - this._totalDefense();
  }

  _totalDefense() {
    return this.armor ? this.fortitude + this.armor.rating : this.fortitude;
  }
};
