describe('number checker', () => {
  it('should return a 1 for 1', () => {
    const result = numberChecker(1);
    expect(result).toBe(1);
  });

  it('should not throw if 2 is provided', () => {
    const callback = () => {
      numberChecker(2);
    };
    expect(callback).not.toThrow();

    const throwWrapper = numberChecker.bind(null, 2);
    expect(throwWrapper).not.toThrow();
  });

  it('should throw if "foo" is provided', () => {
    const throwWrapper = numberChecker.bind(null, 'foo');
    expect(throwWrapper).toThrow();
  });

  it('should throw an error if "foo" is provided', () => {
    const throwWrapper = numberChecker.bind(null, 'foo');
    expect(throwWrapper).toThrowError();
  });

  it('should throw an error with "not a number" if "foo" is provided', () => {
    const throwWrapper = numberChecker.bind(null, 'foo');
    expect(throwWrapper).toThrowError('Not a number');
  });
});
