describe('Timeout', () => {
  it('should change the value after 500ms', done => {
    const a = {
      value: 'Klaus',
    };
    myTimeoutFunction(a);
    setTimeout(() => {
      expect(a.value).toBe('Günther');
      done();
    }, 501);
  });

  describe('with fake timers', () => {
    beforeEach(() => {
      jasmine.clock().install();
    });
    afterEach(() => {
      jasmine.clock().uninstall();
    });
    it('should change the value using timemachines', () => {
      const a = {
        value: 'Klaus',
      };
      myTimeoutFunction(a);
      jasmine.clock().tick(500);
      expect(a.value).toBe('Günther');
    });
  });
});
