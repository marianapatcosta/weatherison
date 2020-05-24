import { Component, Vue, Watch } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";
import LoaderSpinner from "@/components/loader-spinner/LoaderSpinner.vue";
import Modal from "@/components/modal/Modal.vue";
import WeatherCardList from "@/components/weather-card-list/WeatherCardList.vue";
import WeatherResponse from "@/models/weather-response";
import WeatherInfo from "@/models/weather-info";
import WeatherService from "@/services/weather-service";
import { ApiInfo } from "@/types/api-info.interface";
import { GeolocationParams } from "@/types/geolocation-params.interface";
import EventBus from "../../EventBus";
import { WeatherForecastTime } from "@/types/weather-forecast-time.enum";

@Component({
  components: {
    Button,
    LoaderSpinner,
    Modal,
    WeatherCardList
  }
})
export default class WeatherCompare extends Vue {
  private $http: any;
  private errorMessage = "";
  private geolocationParams: GeolocationParams = {};
  private isLoading = false;
  private weatherResponses: WeatherResponse[] = [];
  private weatherService: WeatherService = new WeatherService();
  private selectedTime = WeatherForecastTime.CURRENT;
  private selectedWeatherApis: ApiInfo[] = [];
  private lang = "en";
  private activeButton = 0;

  get weatherInfoForSelectedTime(): Array<
    { weatherInfo: WeatherInfo; apiName: string } | undefined
  > {
    const weatherInfo = this.weatherResponses.map(
      (response: WeatherResponse) => {
        return {
          weatherInfo: response.getWeatherForecastTime(this.selectedTime),
          apiName: response.getApiName()
        };
      }
    );
    return weatherInfo;
  }

  @Watch("geolocationParams")
  private onGeolocationParamsChange() {
    if (this.selectedWeatherApis.length > 0) {
      this.fetchWeatherForecast();
    }
  }

  @Watch("selectedWeatherApis")
  private onSelectedWeatherApisChange() {
    if (
      (this.geolocationParams.latitude && this.geolocationParams.longitude) ||
      this.geolocationParams.location
    ) {
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
  }

  private removeEventListeners(): void {
    EventBus.$off("geolocation");
    EventBus.$off("language");
  }

  private beforeDestroy() {
    this.removeEventListeners();
  }
  private onSelectTime(time: any) {
    this.selectedTime = time;
    EventBus.$emit("select-time", time);
  }

  private defineInitialGeolocationParams() {
    if (!navigator.geolocation) {
      return alert("Geolocation is not supported by your browser!");
    }
    navigator.geolocation.getCurrentPosition((position: any) => {
      this.geolocationParams = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    });
  }

  private closeModal(error: string): void {
    this.errorMessage = error;
  }

  private async fetchWeatherForecast(): Promise<void> {
    this.isLoading = true;
    try {
      const responses: WeatherResponse[] = [];
      for (const api of this.selectedWeatherApis) {
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

        responses.push(
          new WeatherResponse(response.data.forecast, response.data.location)
        );
      }
      this.weatherResponses = responses;
      EventBus.$emit(
        "selected-location",
        this.weatherResponses[0].getLocation()
      );
      localStorage.setItem("forecast", JSON.stringify(this.weatherResponses));
    } catch (error) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
    }
  }
}
