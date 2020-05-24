"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPrecipitationIntensity = (code, lang) => {
    /*  switch (code) {
      case 0:
        return lang === "pt" ? "Sem precipitação" : "No precipitation";
      case 1:
        return lang === "pt" ? "Fraca" : "Light";
      case 2:
        return lang === "pt" ? "Moderada" : "Moderate";
      case 3:
        return lang === "pt" ? "Forte" : "Heavy";
      default:
        return "-";
    } */
    const cases = {
        0: lang === "pt" ? "Sem precipitação" : "No precipitation",
        1: lang === "pt" ? "Fraca" : "Light",
        2: lang === "pt" ? "Moderada" : "Moderate",
        3: lang === "pt" ? "Forte" : "Heavy",
    };
    return cases[code] || "-";
};
exports.getPrecipitationIntensity = getPrecipitationIntensity;
const getWindSpeed = (code, lang) => {
    /*  switch (code) {
      case 1:
        return lang === "pt" ? "Fraco" : "Weak";
      case 2:
        return lang === "pt" ? "Moderado" : "Moderate";
      case 3:
        return lang === "pt" ? "Forte" : "Strong";
      case 4:
        return lang === "pt" ? "Muito forte" : "Very strong";
      default:
        return "-";
    } */
    const cases = {
        1: lang === "pt" ? "Fraco" : "Weak",
        2: lang === "pt" ? "Moderado" : "Moderate",
        3: lang === "pt" ? "Forte" : "Strong",
        4: lang === "pt" ? "Muito forte" : "Very strong",
    };
    return cases[code] || "-";
};
exports.getWindSpeed = getWindSpeed;
const getWeatherDescription = (code, lang) => {
    switch (code) {
        case 1:
            return lang === "pt" ? "Céu limpo" : "Clear sky";
        case 2:
            return lang === "pt" ? "Céu pouco nublado" : "Partly cloudy";
        case 3:
            return lang === "pt" ? "Céu parcialmente nublado" : "Sunny intervals";
        case 4:
            return lang === "pt" ? "Céu muito nublado ou encoberto" : "Cloudy";
        case 5:
            return lang === "pt"
                ? "Céu nublado por nuvens altas"
                : "Cloudy (High cloud)";
        case 6:
            return lang === "pt" ? "Aguaceiros" : "Showers";
        case 7:
            return lang === "pt" ? "Aguaceiros fracos" : "Light showers";
        case 8:
            return lang === "pt" ? "Aguaceiros fortes" : "Heavy showers";
        case 9:
            return lang === "pt" ? "Chuva" : "Rain";
        case 10:
            return lang === "pt" ? "Chuva fraca ou chuvisco" : "Light rain";
        case 11:
            return lang === "pt" ? "Chuva forte" : "Heavy rain";
        case 12:
            return lang === "pt" ? "Períodos de chuva" : "Intermittent rain";
        case 13:
            return lang === "pt"
                ? "Períodos de chuva fraca"
                : "Intermittent ligth rain";
        case 14:
            return lang === "pt"
                ? "Períodos de chuva fortes"
                : "Intermittent heavy rain";
        case 15:
            return lang === "pt" ? "Chuvisco" : "Drizzle";
        case 16:
            return lang === "pt" ? "Neblina" : "Mist";
        case 17:
            return lang === "pt" ? "Nevoeiro ou nuvens baixas" : "Fog";
        case 18:
            return lang === "pt" ? "Neve" : "Snow";
        case 19:
            return lang === "pt" ? "Trovoada" : "Thunderstorms";
        case 20:
            return lang === "pt"
                ? "Aguaceiros e trovoadao"
                : "Showers and thunderstorms";
        case 21:
            return lang === "pt" ? "Granizo" : "Hail";
        case 22:
            return lang === "pt" ? "Geada" : "Frost";
        case 23:
            return lang === "pt" ? "Chuva  e trovoada" : "Rain and thunderstorms";
        case 24:
            return lang === "pt" ? "Nebulosidade convectiva" : "Convective clouds";
        case 25:
            return lang === "pt"
                ? "Céu com períodos de muito nublado"
                : "Partly cloudy";
        case 26:
            return lang === "pt" ? "Nevoeiro" : "Fog";
        case 27:
            return lang === "pt" ? "Céu nublado" : "Cloudy";
        default:
            return "-";
    }
};
exports.getWeatherDescription = getWeatherDescription;
//# sourceMappingURL=ipma-data-mappers.js.map