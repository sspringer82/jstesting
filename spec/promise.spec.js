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

  it('should test a failing promise', done => {
    const promise = myAsyncFunction(true);

    jasmine.clock().tick(1001);

    promise.then(
      () => {
        done.fail('You should not be here');
      },
      err => {
        expect(err).toBe('Oh noez!');
        done();
      },
    );
  });

  it('should test a failing promise', done => {
    const promise = myAsyncFunction(true);

    jasmine.clock().tick(1001);

    promise.catch(err => {
      expect(err).toBe('Oh noez!');
      done();
    });
  });
});
