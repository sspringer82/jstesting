# Installation

```
npm init
npm install -D karma
npm install -D karma-jasmine karma-chrome-launcher jasmine-core
```

# Ausführung

Server starten: karma start

Test ausführen: karma run

# schönere Ausgabe

`npm install -D karma-mocha-reporter`

in der karma.conf.js unter reporters: den Wert ['mocha'] eintragen.
