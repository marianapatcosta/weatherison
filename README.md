# weatherison

Web app developed in VueJS and NodeJS/Express to compare the weather forecast retrieved from the following weather APIs:

- accuweather
- dark sky
- clima cell
- IPMA
- open weather
- weather bit

The user can select which APIs want to consult and the default screen shows the comparative current weeather information. The comparative weather information for `today`and `tomorrow` can be accessed in this screen. By clicking on the displayed information for a specific API, another screen is rendered, showing the weather forecast information of that API for the following 5 days.

The geolocation API is used to get user's location and display the forecast for this location by default. In addition, forecast information can be obtained to any location, by typing `city` and `country` in the search field.

This app uses i18n and can be visualized either in english or in portuguese. Temperature can be observed in `celsius`or `fahrenheit` degrees.

## To run Vue frontend, in "Frontend" directory:

### Run "npm i" ou "yarn install" to install the required dependencies

### Run "npm run serve" to run de project in dev mode, on http://localhost:8080

## To run NodeJS/ExpressJS Backend, in "Backend" directory:

### Run "npm i" our"yarn install" to install the required dependencies

### Run "npm run start" to run de project in dev mode, on http://localhost:8000

### The following environnement variable must be configured:

- ACCUWEATHER_API_KEY
- DARK_SKY_API_KEY
- CLIMA_CELL_API_KEY
- GEOLOCATION_LOCATION_API_KEY
- OPEN_WEATHER_API_KEY
- WEATHER_BIT_API_KEY
- NODE_ENV
