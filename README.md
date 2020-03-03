# Weather and air quality of a given geolocation

Uses the browser lat/lon to return weather and air quality in that location.

## Description

Utilises async/await and fetch API to get the lattitude and longitude to return weather and air quality from the location of your browser.
Log your current location or via your browsers tools > sensors > geolocation, and view the results on a Leafletjs map.
There's some CSS variables (not SASS) thrown in for fun too 👍.

## Getting Started

### Dependencies

- Node/npm
- You will need to get an API key from [DarkSky](https://darksky.net/dev) and replace with the placeholder in .env-SAMPLE, then rename the filetype to .env

### Executing program

- Install dependencies above
- In Terminal run

```
npm install
node index.js
```

- Open a browser and hit http://localhost:3000/

## Author

Contributors names and contact info

Adrian Rogers
[@adritek](https://twitter.com/adritek)

## Notes

Could be some kinds of React data module-- or something? Promise.all?
TODO: put up on Heroku

## Acknowledgments

Inspiration, code snippets, etc.

- [Dan Shiffman](https://www.youtube.com/user/shiffman)
- [awesome-readme](https://github.com/matiassingers/awesome-readme)
- [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
