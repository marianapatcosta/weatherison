import { Component, Vue, Prop } from "vue-property-decorator";
import Tooltip from "@/components/tooltip/Tooltip.vue";
import WeatherInfo from "@/models/weather-info";
import EventBus from "@/EventBus";
import { LocaleMessage } from "vue-i18n";
import {
  temperatureUnits,
  windUnits,
  relativeUnits,
  moonPhase,
  uvValue
} from "@/utils/filters";

@Component({
  components: {
    Tooltip
  },
  filters: {
    temperatureUnits,
    windUnits,
    relativeUnits,
    moonPhase,
    uvValue
  }
})
export default class WeatherCard extends Vue {
  @Prop() private weatherInfo!: WeatherInfo;
  @Prop() private apiName!: string;
  @Prop() private isFahrenheit!: boolean;
  @Prop() private isClickable!: boolean;
  @Prop() private selectedTime!: string;
  private showTooltip: string | LocaleMessage = "";

  private description(description: string): string {
    description = description.toLowerCase();
    return description.charAt(0).toUpperCase() + description.slice(1) || "";
  }

  private attributeIcon(apiName: string, icon: string): string {
    try {
      switch (apiName) {
        case "accuweather":
          return require(`@/assets/weather-icons/${apiName}/${icon}.png`);
        case "clima-cell":
          return require(`@/assets/weather-icons/${apiName}/${icon}.svg`);
        case "dark-sky":
          return require(`@/assets/weather-icons/${apiName}/${icon}.svg`);
        case "ipma":
          return require(`@/assets/weather-icons/error.svg`);
        case "open-weather":
          return `http://openweathermap.org/img/wn/${icon}.png`;
        case "weather-bit":
          return require(`@/assets/weather-icons/${apiName}/${icon}.png`);
        default:
          return require(`@/assets/weather-icons/error.svg`);
      }
    } catch (error) {
      return require(`@/assets/weather-icons/error.svg`);
    }
  }

  private removeEventListeners(): void {
    EventBus.$off("select-time");
  }

  private beforeDestroy() {
    this.removeEventListeners();
  }

  private handleOnClick(): void {
    this.$emit("click");
  }
}
