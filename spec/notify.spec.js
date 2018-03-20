describe('Notify', function () {
  it('Math random should be called', () => {
    const randomSpy = spyOn(Math, 'random');
    randomSpy.and.callThrough()
    const result = Math.random();
    expect(randomSpy).toHaveBeenCalled();
    expect(randomSpy).toHaveBeenCalledTimes(1);
  });
  
  it('Math random should return 0.15, always!', () => {
    const mathRandomValue = 0.15;
    const randomSpy = spyOn(Math, 'random');
    randomSpy.and.returnValue(mathRandomValue)
    const result = Math.random();
    expect(result).toBe(mathRandomValue);
  });
  
  it('should call the window.alert method', function () {
    const value = 'Wir testen spies';
    spyOn(window, 'alert');
    notify(value);
    expect(window.alert).toHaveBeenCalled();
  });
  
  describe('notify with dependency', function () {
    it('should work with a dependency spy object', function () {
        const value = 'Wir testen spies';
        const windowSpy = jasmine.createSpyObj('window', ['alert']);

        notifyWithDependency(windowSpy, value);
        expect(windowSpy.alert).toHaveBeenCalled();
    });
  });

  describe('notify with date', function () {
    beforeEach(() => {
      jasmine.clock().install();
      const date = new Date(2017, 1, 14);
      jasmine.clock().mockDate(date);
      spyOn(window, 'alert');
    });
    
    afterEach(() => jasmine.clock().uninstall());

    it('should call the notify function on a certain date', function () {
      notify('Hello');

      expect(window.alert).toHaveBeenCalledWith('Mon, 13 Feb 2017 23:00:00 GMT Hello');
    });

    describe('other mock date', function () {
      beforeEach(() => {
        const date = new Date(2017, 1, 15);
        jasmine.clock().mockDate(date);
      });
      
      it('should call the notify function on a certain date', function () {
        notify('Hello');
  
        expect(window.alert).toHaveBeenCalledWith('Tue, 14 Feb 2017 23:00:00 GMT Hello');
      })
    }) 
  })
})