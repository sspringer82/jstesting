# Aufgabe 8 - Typeahead

Folgendes HTML:

```
<input type="text" id="typeahead">
<div id="typeahead-suggestions"></div>
```

Schreibe eine Klasse `Typeahead` mit der Methode `registerChange`, die auf `#typeahead` einen Listener auf `change` legt. Gibt der Benutzer etwas ein, soll der folgende (gemockte) Ajax-Call stattfinden:

```
const responseText = [
  '123',
  'abc',
  '$%&',
];
        
const httpResponse = {
  status: 200,
  responseText: JSON.stringify(responseText)
};

const request = jasmine.Ajax.requests.mostRecent();
request.respondWith(httpResponse);
```

Prüfe, dass die Elemente in `#typeahead-suggestions` als Text reingeschrieben werden.