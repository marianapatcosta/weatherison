import { Component, Vue, Watch } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";
import Modal from "@/components/modal/Modal.vue";
import WeatherCard from "@/components/weather-card/WeatherCard.vue";
import WeatherCardPlaceholder from "@/components/weather-card-placeholder/WeatherCardPlaceholder.vue";
import WeatherResponse from "@/models/weather-response";
import WeatherInfo from "@/models/weather-info";
import WeatherService from "@/services/weather-service";
import { ApiInfo } from "@/types/api-info.interface";
import { GeolocationParams } from "@/types/geolocation-params.interface";
import EventBus from "../../EventBus";
import { WeatherForecastTime } from "@/types/weather-forecast-time.enum";
import { LocaleMessage } from "vue-i18n";
import { location, date } from "@/utils/filters";

@Component({
  components: {
    Button,
    Modal,
    WeatherCard,
    WeatherCardPlaceholder
  },
  filters: {
    location,
    date
  }
})
export default class WeatherCompare extends Vue {
  private $http: any;
  private errorMessage: string | LocaleMessage = "";
  private geolocationParams: GeolocationParams = {};
  private isLoading = false;
  private weatherResponses: WeatherResponse[] = [];
  private weatherService: WeatherService = new WeatherService();
  private selectedTime = WeatherForecastTime.CURRENT;
  private selectedWeatherApis: ApiInfo[] = [];
  private selectedLocation = "";
  private lang = this.$t("preferences.english");
  private activeButton = 0;
  private isFahrenheit = false;
  private showDetails = false;
  private showNoData = false;
  private weatherDetailsData: WeatherInfo[] = [];
  private apiForDetails = "";

  get weatherInfoForSelectedTime(): Array<
    | {
        weatherInfo: WeatherInfo;
        apiName: string;
      }
    | undefined
  > {
    const weatherInfo = this.weatherResponses.map(
      (response: WeatherResponse) => {
        return {
          weatherInfo: response
            ? response.getWeatherForecastTime(this.selectedTime)
            : undefined,
          apiName: response.getApiName()
        };
      }
    );
    return weatherInfo;
  }

  private handleCardClick(index: number) {
    this.showDetails = true;
    const times = Object.values(WeatherForecastTime);
    times.shift();
    this.weatherDetailsData = times.map((time) =>
      this.weatherResponses[index].getWeatherForecastTime(time)
    );
    this.apiForDetails = this.weatherResponses[index].getApiName();
  }

  private handleBackClick() {
    this.showDetails = false;
    this.weatherDetailsData = [];
    this.apiForDetails = "";
  }

  @Watch("geolocationParams")
  private onGeolocationParamsChange() {
    if (this.selectedWeatherApis.length > 0) {
      this.showDetails = false;
      this.fetchWeatherForecast();
    }
  }

  @Watch("selectedWeatherApis")
  private onSelectedWeatherApisChange() {
    if (
      (this.geolocationParams.latitude && this.geolocationParams.longitude) ||
      this.geolocationParams.location
    ) {
      this.showDetails = false;
      this.fetchWeatherForecast();
    }
  }

  @Watch("lang")
  private onLanguageChange() {
    this.fetchWeatherForecast();
  }

  private created() {
    this.defineInitialGeolocationParams();
    this.addEventListeners();
  }

  private addEventListeners(): void {
    EventBus.$on("selected-apis", (selectedApis: ApiInfo[]) => {
      this.selectedWeatherApis = selectedApis;
    });

    EventBus.$on("geolocation", (geolocationParams: GeolocationParams) => {
      this.geolocationParams = geolocationParams;
    });

    EventBus.$on("language", (lang: string) => {
      this.lang = lang;
    });

    EventBus.$on(
      "degrees",
      (isFahrenheit: boolean) => (this.isFahrenheit = isFahrenheit)
    );
  }

  private removeEventListeners(): void {
    EventBus.$off("geolocation");
    EventBus.$off("language");
    EventBus.$off("degrees");
  }

  private beforeDestroy() {
    this.removeEventListeners();
  }

  private onSelectTime(index: number) {
    this.selectedTime = Object.values(WeatherForecastTime)[index];
  }

  private defineInitialGeolocationParams() {
    if (!navigator.geolocation) {
      return (this.errorMessage = this.$t("weatherCompare.geolocationError"));
    }
    navigator.geolocation.getCurrentPosition((position: any) => {
      this.geolocationParams = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    });
  }

  private closeModal(): void {
    this.errorMessage = "";
  }

  private async fetchWeatherForecast(): Promise<void> {
    this.isLoading = true;
    this.showNoData = false;
    try {
      const responses = await Promise.allSettled(
        this.selectedWeatherApis.map(async (api) => {
          const response = await this.weatherService.getWeatherForecast(
            this.$http,
            {
              ...this.geolocationParams,
              apiName: api.name,
              lang: this.lang
            }
          );
          if (response.data.error) {
            const error = new Error(response.data.error);
            error.name = "";
            throw error;
          }
          return new WeatherResponse(
            response.data.forecast,
            response.data.location
          );
        })
      );
      this.weatherResponses = responses
        .map((response: any) => response.value)
        .filter((response: any) => response);
      // gets the first defined response, to avoid promises that were rejected
      this.selectedLocation =
        this.weatherResponses?.find((response) => response)?.getLocation() || "";
      this.getRejectedApis(responses);
    } catch (error) {
      this.errorMessage = error;
      this.showNoData = true;
    } finally {
      this.isLoading = false;
    }
  }

  private getRejectedApis(responses: any) {
    const rejectedApisIndexes = responses
      .map((response: any, index: number) =>
        response.status !== "fulfilled" ? index : undefined
      )
      .filter((index: number) => index !== undefined);
    if (rejectedApisIndexes.length) {
      const rejectedApis = this.selectedWeatherApis
        .filter((api, index) =>
          rejectedApisIndexes.join(", ").includes("" + index)
        )
        .map((api) => api.name)
        .join(", ");
      const error = new Error(
        this.$t("weatherCompare.weatherError", {
          apis: rejectedApis
        }).toString()
      );
      error.name = "";
      throw error;
    }
  }
}
