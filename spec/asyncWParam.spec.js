describe('Async function', function () {
  describe('with fake timers', function () {
    beforeEach(() => jasmine.clock().install());
    afterEach(() => jasmine.clock().uninstall());

    it('should call a callback after 400ms with "Guten Tach"', function () {
      const inputValue = 'Guten Tach'; 
      const timeoutValue = 400; 
      
      const callback = (value) => {
        expect(value).toEqual(inputValue);
      }
      async(callback, inputValue, timeoutValue);
      jasmine.clock().tick(400);
    })

    it('should call a callback using spies', function () {
      const callback = jasmine.createSpy('My fancy callback');

      async(callback, 'foo', 400);
      jasmine.clock().tick(401);

      expect(callback).toHaveBeenCalled();
    });
  
    it('should call another callback using spies', function () {
      const inputValue = 'foo';
      const callback = jasmine.createSpy('blubber');
  
      async(callback, inputValue, 400);
      jasmine.clock().tick(400);

      expect(callback).toHaveBeenCalledWith(inputValue);
    });
  })

  xdescribe('without fake timers', function () {
    it('should call a callback after 400ms with "Guten Tach"', function (done) {
      const inputValue = 'Guten Tach'; 
      const timeoutValue = 400; 
      
      const callback = (value) => {
        expect(value).toEqual(inputValue);
        done();
      }
      
      async(callback, inputValue, timeoutValue);
    })
  
  
    it('should call a callback using spies', function (done) {
      const callback = jasmine.createSpy('My fancy callback');
      async(callback, 'foo', 400);
      setTimeout(() => {
        expect(callback).toHaveBeenCalled();
        done();
      }, 401);
    });
  
    it('should call another callback using spies', function (done) {
      const inputValue = 'foo';
      const callback = jasmine.createSpy('blubber');
  
      callback.and.callFake(function (v) {
        expect(v).toEqual(inputValue);
        expect(callback).toHaveBeenCalledWith(inputValue);
        done();
      });
      
      async(callback, inputValue, 400);
    });
  })
  
})