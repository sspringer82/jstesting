describe('returnsSomeFunction', function() {
  it('should return a function', function() {
    const fnObj = returnsSomeFunction();
    expect(fnObj).toEqual(jasmine.any(Function));
  })
})