describe('myAsyncFunction', () => {
  beforeEach(() => jasmine.clock().install());
  afterEach(() => jasmine.clock().uninstall());
  it('should test a promise', done => {
    const promise = myAsyncFunction();

    jasmine.clock().tick(1001);

    promise.then(data => {
      expect(data).toBe('Hello World');
      done();
    });
  });
});
