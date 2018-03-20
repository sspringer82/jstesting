describe('Calc', () => {
  it('should add 1 and 1 and return 2', () => {
    const calc = new Calc(); // arrange

    const result = calc.add(1, 1); // act

    expect(result).toBe(2); // assert
  });
  it('should add 2 and 2 and return 4', () => {
    const calc = new Calc(); // arrange

    const result = calc.add(2, 2); // act

    expect(result).toBe(4); // assert
  });
});
