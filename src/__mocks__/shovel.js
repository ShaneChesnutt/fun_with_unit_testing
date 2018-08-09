const Shovel = jest.genMockFromModule('../shovel');

let thrustDamage, slashDamage;

Shovel.prototype.thrustAttack = jest.fn(() => {
  return thrustDamage;
});

Shovel.prototype.slashAttack = jest.fn(() => {
  return slashDamage;
});

Shovel.prototype.__setThrustDamage = damage => {
  thrustDamage = damage;
};

Shovel.prototype.__setSlashDamage = damage => {
  slashDamage = damage;
};

module.exports = Shovel;
