describe('Form specs', () => {
  it('writes the name into the corresponding DOM element', () => {
    jasmine.getFixtures().load('form-name.spec.html');
    const name = 'Bernd das Brot';
    const form = new Form();
    
    form.registerClick();
    $('input').val(name);
    expect($('#user-name')).not.toHaveText(name);
    $('button').click();
    expect($('#user-name')).toHaveText(name);
  });
});