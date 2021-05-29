export const location = (local: string, lang: string) => {
  if (!local) {
    return;
  }
  let locationArray: string[] = local.split(",");
  locationArray = locationArray.slice(
    locationArray.length - 3 >= 0 ? locationArray.length - 3 : 0,
    locationArray.length
  );
  const wordsToDelete =
    lang === "en"
      ? ["Region", "District", "Municipality"]
      : ["Região de", "Distrito de", "Município"];
  const itemToKeep = lang === "en" ? 0 : 1;
  wordsToDelete.forEach((word: string) => {
    locationArray.forEach((item: string, index: number) => {
      locationArray[index] = item.includes(word)
        ? item.split(word)[itemToKeep].trim()
        : item.trim();
    });
  });

  if (locationArray[0].includes(locationArray[1])) {
    locationArray.splice(0, 1);
  }
  return locationArray.join(", ");
};

export const temperatureUnits = (
  temperature: number,
  isFahrenheit: boolean
) => {
  if (isFahrenheit) {
    temperature = Math.round((temperature * 1.8 + 32) * 10) / 10;
    return `${temperature} °F`;
  }
  return `${Math.round(temperature * 10) / 10} °C`;
};

export const windUnits = (windSpeed: any) => {
  if (windSpeed === undefined) {
    return "-";
  }
  return typeof windSpeed === "number"
    ? `${Math.round(windSpeed * 10) / 10} m/s`
    : `${windSpeed} m/s`;
};

export const relativeUnits = (value: any) => {
  if (value === undefined) {
    return "-";
  }
  return typeof value === "number"
    ? `${Math.round(value * 10) / 10} %`
    : /^[a-zA-Z]+$/.test(value)
    ? value
    : `${value} %`;
};

export const moonPhase = (phase: string) => {
  if (phase === undefined) {
    return "-";
  }
  const upperCaseMatch =  phase?.match(/[A-Z][a-z]+/g);
  if (upperCaseMatch && upperCaseMatch?.length >= 2) {
    return upperCaseMatch.join(" ").toLowerCase();
  }
  return phase.toLowerCase().replace(/[-_.]/g, " ");
};

export const uvValue = (value: any) => {
  return value === undefined ? "-" : `${Math.round(value * 100) / 100}`;
};

export const date = (time: number, lang: string) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const l = lang === "en" ? "en-En" : "pt-PT";
  return new Date(time).toLocaleDateString(l, options);
};
