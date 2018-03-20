describe('ajax', () => {
  beforeEach(() => jasmine.Ajax.install());
  afterEach(() => jasmine.Ajax.uninstall());

  fit('should work', done => {
    jasmine.getFixtures().set('<div id="id"></div>');
    $.ajax('/api/name', {
      method: 'GET',
      success: res => {
        $('#id').text(res);
        expect($('#id')).toHaveText('Günther');
        done();
      },
    });

    const httpResponse = {
      status: 200,
      contentType: 'text/plain',
      responseText: 'Günther',
    };

    const req = jasmine.Ajax.requests.mostRecent();
    req.respondWith(httpResponse);
  });
});
