describe('FizzBuzz', function() {
  let fb;
  beforeEach(function () {
    fb = new FizzBuzz();
  })

  it('should be an instance of FizzBuzz', function() {
    expect(fb).toEqual(jasmine.any(FizzBuzz));
  })

  it ('should return 1 for 1', function () {
    const result = fb.run(1);
    expect(result).toBe(1);
  })
  it('should return a number for 1', function() {
    expect(fb.run(1)).toEqual(jasmine.any(Number));
  })

  it ('should return 2 for 2', function () {
    const result = fb.run(2);
    expect(result).toBe(2);
  })
  it ('should return Fizz for 3', function () {
    const result = fb.run(3);
    expect(result).toBe('Fizz');
  })
  it('should return a string for 3', function() {
    expect(fb.run(3)).toEqual(jasmine.any(String));
  })
  it ('should return Buzz for 5', function () {
    const result = fb.run(5);
    expect(result).toBe('Buzz');
  })
  it ('should return FizzBuzz for 15', function () {
    const result = fb.run(15);
    expect(result).toBe('FizzBuzz');
  })
  it('should return FizzBuzz for -30', function () {
    const result = fb.run(-30);
    expect(result).toBe('FizzBuzz');
  })
  it('should return Buzz for -25', function () {
    const result = fb.run(-25);
    expect(result).toBe('Buzz');
  })
  it('should return -19 for -19', function () {
    const result = fb.run(-19);
    expect(result).toBe(-19);
  })
});