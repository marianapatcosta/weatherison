const ACCUWEATHER_KEY: string = process.env.ACCUWEATHER_API_KEY;
const CLIMA_CELL_KEY: string = process.env.CLIMA_CELL_API_KEY;
const DARK_SKY_KEY: string = process.env.DARK_SKY_API_KEY;
const GEOLOCATION_KEY: string = process.env.GEOLOCATION_LOCATION_API_KEY;
const OPEN_WEATHER_KEY: string = process.env.OPEN_WEATHER_API_KEY;
const WEATHER_BIT_KEY: string = process.env.WEATHER_BIT_API_KEY;

const constants: Readonly<any> = Object.freeze({
  ACCUWEATHER_LOCATION_KEY_URL: (latitude: number, longitude: number) =>
    `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search.json?q=${latitude},${longitude}&apikey=${ACCUWEATHER_KEY}`,
  API_NOT_FOUND_ERROR: "Unable to find api.",
  ACCUWEATHER_CURRENT_URL: (apiLocationKey: string, lang: string) =>
    `https://dataservice.accuweather.com/currentconditions/v1/${apiLocationKey}?apikey=${ACCUWEATHER_KEY}&language=${lang}&details=true`,
  ACCUWEATHER_DAILY_URL: (apiLocationKey: string, lang: string) =>
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${apiLocationKey}?apikey=${ACCUWEATHER_KEY}&language=${lang}&details=true`,
  ACCUWEATHER_HOURLY_URL: (apiLocationKey: string, lang: string) =>
    `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${apiLocationKey}?apikey=${ACCUWEATHER_KEY}&language=${lang}&details=true`,
  CONNECTION_ERROR: (service: string) =>
    `Unable to connect to ${service} service`,
  CLIMA_CELL_CURRENT_URL: (latitude: number, longitude: number) =>
    `https://api.climacell.co/v3/weather/realtime?lat=${latitude}&lon=${longitude}&unit_system=si&fields=precipitation,precipitation_type,temp,feels_like,wind_speed,wind_direction,humidity,moon_phase,surface_shortwave_radiation,sunrise,sunset,weather_code&apikey=${CLIMA_CELL_KEY}`,
  CLIMA_CELL_DAILY_URL: (latitude: number, longitude: number) =>
    `https://api.climacell.co/v3/weather/forecast/daily?lat=${latitude}&lon=${longitude}&unit_system=si&fields=precipitation_probability,precipitation,temp,feels_like,wind_speed,wind_direction,humidity,moon_phase,sunrise,sunset,weather_code&apikey=${CLIMA_CELL_KEY}`,
  CLIMA_CELL_HOURLY_URL: (latitude: number, longitude: number) =>
    `https://api.climacell.co/v3/weather/forecast/hourly?lat=${latitude}&lon=${longitude}&unit_system=si&fields=precipitation_probability,precipitation,temp,feels_like,wind_speed,wind_direction,humidity,moon_phase,surface_shortwave_radiation,sunrise,sunset,weather_code&apikey=${CLIMA_CELL_KEY}`,
  DARK_SKY_URL: (latitude: number, longitude: number, lang: string) =>
    `https://api.darksky.net/forecast/${DARK_SKY_KEY}/${latitude},${longitude}?lang=${lang}&units=si`,
  DEFAULT_LANGUAGE: "en",
  GENERAL_ERROR: "An unknown error occurred.",
  GEOLOCATION_URL: (geolocationParams: string, lang: string) =>
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${geolocationParams}.json?access_token=${GEOLOCATION_KEY}&autocomplete=false&language=${lang}`,
  IPMA_LOCATION_KEY_URL: "https://api.ipma.pt/open-data/distrits-islands.json",
  IPMA_URL: (apiLocationKey: string) =>
    `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${apiLocationKey}.json`,
  LOCATION_NOT_FOUND_ERROR:
    "Unable to find location. Please provide another one.",
  OPEN_WEATHER_URL: (latitude: number, longitude: number, lang: string) =>
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_KEY}&lang=${lang}&units=metric`,
  NO_LOCATION_ERROR: "Please provide a location!",
  ROUTE_NOT_FOUND_ERROR: "Could not find this route",
  WEATHER_BIT_CURRENT_URL: (
    latitude: number,
    longitude: number,
    lang: string
  ) =>
    `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${WEATHER_BIT_KEY}&lang=${lang}`,
  WEATHER_BIT_DAILY_URL: (latitude: number, longitude: number, lang: string) =>
    `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${WEATHER_BIT_KEY}&lang=${lang}`,
  WEATHER_BIT_HOURLY_URL: (latitude: number, longitude: number, lang: string) =>
    `https://api.weatherbit.io/v2.0/forecast/hourly?lat=${latitude}&lon=${longitude}&key=${WEATHER_BIT_KEY}&lang=${lang}`,
});

export default constants;
