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
});
