describe('matcher', () => {
  it('should be the same object', () => {
    const a = { name: 'Klaus' };
    const b = a;
    const c = { name: 'Klaus' };
    expect(a).toBe(b);
    expect(a).toEqual(b);
    // expect(a).toBe(c); das knallt!
    expect(a).toEqual(c);
  });

  it('should have more matchers', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
    expect('Klaus').not.toBeUndefined();
  });

  it('should return a zufallsstring', () => {
    const bla = 'ein zufallsstring';
    expect(bla).toEqual(jasmine.any(String));
  });

  it('should be of type User', () => {
    class User {}
    const klaus = new User();

    expect(klaus).toEqual(jasmine.any(User));
  });
});
