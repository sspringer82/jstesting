describe('form', () => {
  it('writes the name into a dom element', () => {
    jasmine.getFixtures().set('<input type="text" id="myinput">');

    $('#myinput').val('foo');
    expect($('#myinput')).toHaveValue('foo1');
  });
});
