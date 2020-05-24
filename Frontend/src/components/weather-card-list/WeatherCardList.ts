import { Component, Vue, Prop } from "vue-property-decorator";
import WeatherCard from "@/components/weather-card/WeatherCard.vue";
import WeatherResponse from "@/models/weather-response";
import EventBus from "@/EventBus";

@Component({
  components: {
    WeatherCard
  }
})
export default class WeatherCardList extends Vue {
  @Prop() private weatherResponses!: WeatherResponse[];
  private isFahrenheit = false;

  private created(): void {
    this.addEventListeners();
  }

  private addEventListeners(): void {
    EventBus.$on("degrees", (unit: boolean) => (this.isFahrenheit = unit));
  }

  private removeEventListeners(): void {
    EventBus.$off("degrees");
    // EventBus.$off("dark-mode");
  }

  /*   private beforeDestroy() {
    this.removeEventListeners();
  } */
}
