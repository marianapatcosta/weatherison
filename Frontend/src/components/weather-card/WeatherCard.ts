import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import WeatherInfo from "@/models/weather-info";
import EventBus from "@/EventBus";

@Component({
  filters: {
    temperatureUnits(temperature: number, isFahrenheit: boolean) {
      if (isFahrenheit) {
        temperature = Math.round((temperature * 1.8 + 32) * 10) / 10;
        return `${temperature} °F`;
      }
      return `${Math.round(temperature * 10) / 10} °C`;
    },
    windUnits(windSpeed: any) {
      if (windSpeed === undefined) {
        return "-";
      }
      return typeof windSpeed === "number"
        ? `${Math.round(windSpeed * 10) / 10} m/s`
        : `${windSpeed} m/s`;
    },

    relativeUnits(value: any) {
      if (value === undefined) {
        return "-";
      }
      return typeof value === "number"
        ? `${Math.round(value * 10) / 10} %`
        : `${value} %`;
    }
  }
})
export default class WeatherCard extends Vue {
  @Prop() private weatherInfo!: WeatherInfo;
  @Prop() private apiName!: string;
  @Prop() private isFahrenheit!: boolean;
  private selectedTime = "current";

  private description(description: string): string {
    description = description.toLowerCase();
    return description.charAt(0).toUpperCase() + description.slice(1) || "";
  }

  private created() {
    EventBus.$on("select-time", (time: string) => {
      this.selectedTime = time;
    });
  }

  private attributeIcon(apiName: string, icon: string): string {
    switch (apiName) {
      case "accuweather":
        return require(`../../assets/weather-icons/${apiName}/${icon}.png` ||
          "");
      case "clima-cell":
        return require(`../../assets/weather-icons/${apiName}/${icon}.svg`);
      case "dark-sky":
        return require(`../../assets/weather-icons/${apiName}/${icon}.svg`);
      case "ipma":
        return "-";
      case "open-weather":
        return `http://openweathermap.org/img/wn/${icon}.png`;
      case "weather-bit":
        return require(`../../assets/weather-icons/${apiName}/${icon}.png`);
      default:
        return "-";
    }
  }

  private moonLunationFractionToMoonPhase(
    fraction: number,
    lang: string
  ): string {
    const cases = {
      0: lang === "pt" ? "Lua nova" : "New moon",
      // fraction >= 0.05 && fraction < 0.25: lang === "pt" ? "Lua crescente côncava" : "Waxing crescent",
      0.25: lang === "pt" ? "Lua quarto crescente" : "First quarter moon",
      //fraction >= 0.26 && fraction < 0.50: lang === "pt" ? "Lua crescente gibosa" : "Waxing gibbous",
      0.5: lang === "pt" ? "Lua cheia" : "Full Moon",
      //fraction >= 0.56 && fraction < 0.75: lang === "pt" ? "Lua minguante gibosa : "Waning gibbous",
      0.75: lang === "pt" ? "Lua quarto minguante" : "Last quarter moon"
      //fraction >= 0.76 && fraction < 1: lang === "pt" ? "Lua minguante côncava" : "Waning crescent",
    };

    return cases[fraction] || "-";
  }

  private removeEventListeners(): void {
    EventBus.$off("select-time");
  }

  private beforeDestroy() {
    this.removeEventListeners();
  }
}
