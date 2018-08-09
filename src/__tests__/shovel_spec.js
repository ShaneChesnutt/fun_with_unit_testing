describe('shovel', () => {
  const Shovel = require('../shovel');
  let subject;

  describe('constructor', () => {
    beforeEach(() => {
      subject = new Shovel();
    });

    it('sets the thrustDamage to 10', () => {
      expect(subject.thrustDamage).toEqual(10);
    });

    it('sets the slashDamage to 10', () => {
      expect(subject.thrustDamage).toEqual(10);
    });
  });

  describe('thrustAttack', () => {
    const expected = 10;
    let actual;
    beforeEach(() => {
      subject = new Shovel();
      actual = subject.thrustAttack();
    });

    it('returns thrustDamage', () => {
      expect(actual).toEqual(expected);
    });
  });

  describe('slashAttack', () => {
    const expected = 10;
    let actual;
    beforeEach(() => {
      subject = new Shovel();
      actual = subject.slashAttack();
    });

    it('returns slashDamage', () => {
      expect(actual).toEqual(expected);
    });
  });
});

