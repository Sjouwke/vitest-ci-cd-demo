# Unit Testing Starter — Web 3

## Opzet

```bash
npm install
npm test         # tests in watch mode
npm run test:run # tests eenmalig uitvoeren
```

## Projectstructuur

```
unit-testing-starter/
├── src/
│   └── utils/
│       ├── format.js   ← samen uitgewerkt
│       ├── string.js   ← jij schrijft de tests
│       └── math.js     ← jij schrijft de tests
├── tests/
│   ├── format.test.js  ← samen uitgewerkt
│   ├── string.test.js  ← jij schrijft de tests
│   └── math.test.js    ← jij schrijft de tests
├── .github/
│   └── workflows/
│       └── test.yml    ← CI/CD pipeline
├── vite.config.js
└── package.json
```

## Opdracht

1. Installeer de dependencies en controleer of de bestaande tests slagen.
2. Schrijf de ontbrekende tests in `string.test.js` en `math.test.js`.
3. Push naar GitHub en bekijk of je pipeline groen wordt.
4. [Excelleren] Breek opzettelijk een test — wat zie je in GitHub Actions?
