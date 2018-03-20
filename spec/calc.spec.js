describe('Calc', () => {
  let calc;

  beforeAll(() => {
    // don't touch
    console.log('beforeAll');
  });
  afterAll(() => {
    // don't touch
    console.log('afterAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
    calc = new Calc(); // arrange
  });

  afterEach(() => {
    console.log('afterEach');
  });

  describe('Addition', () => {
    beforeEach(() => {
      console.log('inner beforeEach');
    });

    afterEach(() => {
      console.log('inner afterEach');
    });
    it('should add 1 and 1 and return 2', () => {
      console.log('it');
      const result = calc.add(1, 1); // act

      expect(result).toBe(2); // assert
    });
    it('should add 2 and 2 and return 4', () => {
      const result = calc.add(2, 2); // act
      console.log('it');
      expect(result).toBe(4); // assert
    });
  });
  describe('Exception handling', () => {
    it('should fail', () => {
      try {
        calc.add('a', 'b');
      } catch (e) {
        expect(e.message).toBe('Not a number');
      }
    });

    it('should fail with to throw', () => {
      // to throw something
      const func = () => {
        calc.add('a', 'b');
      };
      expect(func).toThrow();

      // to throw an error
      const func2 = calc.add.bind(null, 'a', 'b');
      expect(func2).toThrowError();

      // to throw an error with message
      const func3 = calc.add.bind(null, 'a', 'b');
      expect(func3).toThrowError('Not a number');

      // to throw an error with arrow function and message
      expect(() => calc.add('a', 'b')).toThrowError('Not a number');
    });
  });
});
