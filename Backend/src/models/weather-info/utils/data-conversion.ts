const degreesToCompassDirection = (degrees: number): string => {
  const compassDirection: string[] = [
    "N",
    "NE",
    "E",
    "SE",
    "S",
    "SW",
    "W",
    "NW",
  ];

  const convertor: number = Math.floor(degrees / 45 + 0.5);
  return compassDirection[convertor % 8];
};

const fahrenheitToCelsiusConverter = (temperature: number): number =>
  Math.round(((temperature - 32) / 1.8) * 10) / 10;

const kilometersPerHourToMetersPerSecond = (speed: number): number =>
  Math.round(speed * 0.277777778 * 10) / 10;

const milesPerHourToMetersPerSecond = (speed: number): number =>
  Math.round(speed * 0.44704 * 10) / 10;

const moonLunationFractionToMoonPhase = (
  fraction: number,
  lang: string
): string => {
  if (fraction === 0) {
    return lang === "pt" ? "Lua nova" : "New moon";
  }
  if (fraction > 0 && fraction < 0.25) {
    return lang === "pt" ? "Lua crescente côncava" : "Waxing crescent";
  }
  if (fraction === 0.25) {
    return lang === "pt" ? "Lua quarto crescente" : "First quarter moon";
  }
  if (fraction > 0.25 && fraction < 0.5) {
    return lang === "pt" ? "Lua crescente gibosa" : "Waxing gibbous";
  }
  if (fraction === 0.5) {
    return lang === "pt" ? "Lua cheia" : "Full Moon";
  }
  if (fraction > 0.5 && fraction < 0.75) {
    return lang === "pt" ? "Lua minguante gibosa" : "Waning gibbous";
  }
  if (fraction === 0.75) {
    return lang === "pt" ? "Lua quarto minguante" : "Last quarter moon";
  }
  if (fraction > 0.75 && fraction < 1) {
    return lang === "pt" ? "Lua minguante côncava" : "Waning crescent";
  }
};

export {
  degreesToCompassDirection,
  fahrenheitToCelsiusConverter,
  kilometersPerHourToMetersPerSecond,
  milesPerHourToMetersPerSecond,
  moonLunationFractionToMoonPhase,
};
