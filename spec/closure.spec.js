describe('returnsSomeFunction', () => {
  it('should return a function', () => {
    const fnObj = returnsSomeFunction();
    expect(fnObj).toEqual(jasmine.any(Function));
    expect(typeof fnObj).toBe('function');
  });
});
