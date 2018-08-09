jest.mock('../shovel');

describe('ShovelKnight', () => {
  const ShovelKnight = require('../shovel_knight'),
    Shovel = require('../shovel');

  let subject;

  describe('constructor', () => {
    describe('when armor is passed in', () => {
      const armor = 'blue armor';

      beforeEach(() => {
        subject = new ShovelKnight(armor);
      });

      it('sets name to "Shovel Knight"', () => {
        expect(subject.name).toEqual('Shovel Knight');
      });

      it('sets strength to 5', () => {
        expect(subject.strength).toEqual(5);
      });

      it('sets fortitude to 5', () => {
        expect(subject.fortitude).toEqual(5)
      });

      it('sets weapon to ', () => {
        expect(subject.weapon).toEqual(expect.any(Shovel));
      });

      it('sets armor to the armor passed', () => {
        expect(subject.armor).toEqual(armor);
      });
    });

    describe('when armor is passed in', () => {
      beforeEach(() => {
        subject = new ShovelKnight();
      });

      it('sets name to "Shovel Knight"', () => {
        expect(subject.name).toEqual('Shovel Knight');
      });

      it('sets strength to 5', () => {
        expect(subject.strength).toEqual(5);
      });

      it('sets fortitude to 5', () => {
        expect(subject.fortitude).toEqual(5)
      });

      it('sets weapon to ', () => {
        expect(subject.weapon).toEqual(expect.any(Shovel));
      });

      it('sets armor to null', () => {
        expect(subject.armor).toBeNull();
      });
    });
  });

  describe('equipArmor', () => {
    const armor = {
      rating: 10
    };

    beforeEach(() => {
      subject = new ShovelKnight();
      subject.equipArmor(armor);
    });

    it('sets armor to the passed in armor', () => {
      expect(subject.armor).toEqual(armor);
    });
  });

  describe('unequipArmor', () => {
    const armor = {
      rating: 10
    };

    beforeEach(() => {
      subject = new ShovelKnight(armor);
      subject.unequipArmor();
    });

    it('sets armor to null', () => {
      expect(subject.armor).toBeNull();
    });
  });

  describe('thrustAttack', () => {
    const thrustAttackDamage = 10,
      expected = 15;

    let actual;

    beforeEach(() => {
      Shovel.prototype.__setThrustDamage(thrustAttackDamage);
      subject = new ShovelKnight();
      actual = subject.thrustAttack();
    });

    it('returns Strength + Weapon.thrustAttack', () => {
      expect(actual).toEqual(expected);
    });
  });

  describe('slashAttack', () => {
    const slashAttackDamage = 10,
      expected = 15;

    let actual;

    beforeEach(() => {
      Shovel.prototype.__setSlashDamage(slashAttackDamage);
      subject = new ShovelKnight();
      actual = subject.slashAttack();
    });

    it('returns Strength + Weapon.slashAttack', () => {
      expect(actual).toEqual(expected);
    });
  });

  describe('takeDamage', () => {
    describe('when armor is not null', () => {
      const armor = {
          rating: 10
        },
        damage = 100,
        expected = 85;

      let actual;

      beforeEach(() => {
        subject = new ShovelKnight(armor);
        actual = subject.takeDamage(damage);
      });

      it('returns damage - ( fortitude + armor.rating )', () => {
        expect(actual).toEqual(expected);
      });
    });

    describe('when armor is null', () => {
      const damage = 100,
        expected = 95;

      let actual;

      beforeEach(() => {
        subject = new ShovelKnight();
        actual = subject.takeDamage(damage);
      });

      it('returns damage - fortitude', () => {
        expect(actual).toEqual(expected);
      });
    });
  });
});
