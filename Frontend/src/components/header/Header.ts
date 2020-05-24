import { Component, Vue, Prop } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";
import InputField from "@/components/input-field/InputField.vue";
import { GeolocationParams } from "@/types/geolocation-params.interface";
import { WeatherForecastTime } from "@/types/weather-forecast-time.enum";
import EventBus from "../../EventBus";

@Component({
  components: {
    Button,
    InputField
  },
  filters: {
    location(location: string, lang: string) {
      let locationArray: string[] = location.split(",");
      locationArray = locationArray.slice(
        locationArray.length - 3,
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
      if (locationArray[0] === locationArray[1]) {
        locationArray.splice(0, 1);
      }
      return locationArray.join(", ");
    }
  }
})
export default class Header extends Vue {
  private location = "";
  private selectedLocation = "";
  /*   private selectedTime = WeatherForecastTime.CURRENT; */
  private timesToSelect: string[] = Object.values(WeatherForecastTime);
  private isUserPreferencesVisible = false;
  private lang = "en";
  private hover = false;

  private created() {
    this.addEventListeners();
  }

  private beforeDestroy() {
    this.removeEventListeners();
  }

  private addEventListeners(): void {
    EventBus.$on(
      "selected-location",
      (selectedLocation: string) => (this.selectedLocation = selectedLocation)
    );
    EventBus.$on("language", (lang: string) => {
      this.lang = lang;
    });
  }

  private removeEventListeners(): void {
    EventBus.$off("selected-location");
    EventBus.$off("language");
  }

  private clearLocation(event: string): void {
    this.location = event;
  }

  /*   private onSelectTime(time: any) {
    this.selectedTime = time;
    EventBus.$emit("select-time", time);
  }
 */
  private defineCurrentPosition() {
    if (!navigator.geolocation) {
      return alert("Geolocation is not supported by your browser!");
    }

    navigator.geolocation.getCurrentPosition((position: any) => {
      const geolocationParams: GeolocationParams = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      EventBus.$emit("geolocation", geolocationParams);
    });
  }

  private defineLocation(event: string): void {
    const geolocationParams: GeolocationParams = {
      location: event
    };
    EventBus.$emit("geolocation", geolocationParams);
  }

  private handleUserPreferences(): void {
    this.isUserPreferencesVisible = !this.isUserPreferencesVisible;
    this.$emit("user-preferences", this.isUserPreferencesVisible);
  }

  private fetchFavouriteLocation(): void {
    return;
  }
}
