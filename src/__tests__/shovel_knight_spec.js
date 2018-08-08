describe('ShovelKnight', () => {
  const ShovelKnight = require('../shovel_knight');

  let subject;

  describe('constructor', () => {
    describe('when a name is passed in', () => {
      const expectedName = 'Solaire';

      beforeEach(() => {
        subject = new ShovelKnight(expectedName);
      });

      it('sets the name property', () => {
        expect(subject.name).toEqual(expectedName);
      });
    });

    describe('when a name is not passed in', () => {
      const expectedName = 'Shovel';

      beforeEach(() => {
        subject = new ShovelKnight();
      });

      it('sets the name property to the default value', () => {
        expect(subject.name).toEqual(expectedName);
      });
    });
  });
});
