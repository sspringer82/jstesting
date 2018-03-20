describe('Randomizor', () => {
  it('should call Math.random', () => {
    spyOn(Math, 'random');
    const result = getRandomNumber();
    expect(Math.random).toHaveBeenCalled();
    expect(Math.random).toHaveBeenCalledTimes(1);
  });
  it('should get a number', () => {
    spyOn(Math, 'random').and.callThrough();
    const result = getRandomNumber();
    expect(result).toEqual(jasmine.any(Number));
  });

  it('should return 5 as a random number', () => {
    spyOn(Math, 'random').and.returnValue(0.5);
    const result = getRandomNumber();
    expect(result).toBe(5);
  });

  it('should call the callback with Günther', () => {
    const cb = jasmine.createSpy('callAFunc');

    callAFunc(cb);

    expect(cb).toHaveBeenCalledWith('Hello', 'Günther');
  });
});
