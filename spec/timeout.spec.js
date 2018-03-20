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
    it('should mock the time', () => {
      var baseTime = new Date(1970, 0, 1);
      jasmine.clock().mockDate(baseTime);
      const value = 'Wed, 31 Dec 1969 23:00:00 GMT';
      expect(new Date().toUTCString()).toBe(value);
    });
  });
});
