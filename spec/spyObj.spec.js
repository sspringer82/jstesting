fdescribe('spyObj', () => {
  it('should fake the whole Math thing', () => {
    const MyMath = jasmine.createSpyObj('Math', ['floor', 'random']);

    const result = getRandomNumberWithDep(MyMath);

    expect(result).toBeUndefined();
  });

  it('should fake to get 5 as result', () => {
    const MyMath = jasmine.createSpyObj('Math', ['floor', 'random']);

    MyMath.floor.and.returnValue(5);

    const result = getRandomNumberWithDep(MyMath);

    expect(result).toBe(5);
  });

  it('should call Math.floor with a certain value (5)', () => {
    const MyMath = jasmine.createSpyObj('Math', ['floor', 'random']);

    MyMath.random.and.returnValue(0.51);
    MyMath.floor.and.returnValue(5);

    const result = getRandomNumberWithDep(MyMath);

    expect(result).toBe(5);
    expect(MyMath.floor).toHaveBeenCalledWith(5.1);
  });

  it('should call Math.floor with a certain value (5)', () => {
    const MyMath = jasmine.createSpyObj('Math', ['floor', 'random']);

    MyMath.random.and.returnValue(0.51);
    MyMath.floor.and.callFake(v => {
      return parseInt(v);
    });

    const result = getRandomNumberWithDep(MyMath);

    expect(result).toBe(5);
    expect(MyMath.floor).toHaveBeenCalledWith(5.1);
  });
});
