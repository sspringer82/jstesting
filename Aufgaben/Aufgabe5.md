# Aufgabe 5 - Spies & Zeitmanipulation

## 1. notify
Schreibe eine Funktion `notify()`, die einen String als Parameter erhält und gibt den String mitsamt der aktuellen Zeit über `window.alert` wieder aus.

### API
`notify('Wir testen spies')` => `window.alert('[Mon Mar 20 2017 11:42:37 GMT+0100 (CET)] Wir testen spies')`

## 2. notify mit Abhängigkeiten
Schreibe eine Funktion `notifyWithDependency`, die die `window` Dependency explizit übergeben bekommt
(Tipp: `jasmine.createSpyObj`). 