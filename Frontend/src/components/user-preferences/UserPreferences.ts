import { Component, Prop, Vue } from "vue-property-decorator";
import Checkbox from "@/components/checkbox/Checkbox.vue";
import Modal from "@/components/modal/Modal.vue";
import ToggleSwitch from "@/components/toggle-switch/ToggleSwitch.vue";
import ApisService from "@/services/apis-service";
import { ApiInfo } from "@/types/api-info.interface";
import EventBus from "@/EventBus";

@Component({
  components: {
    Checkbox,
    Modal,
    ToggleSwitch
  }
})
export default class UserPreferences extends Vue {
  @Prop() private header!: string;

  private weatherApis: ApiInfo[] = [];
  private errorMessage = "";
  // private isFahrenheit = true;
  private apisService: ApisService = new ApisService();
  private $http: any;

  get selectedWeatherApis(): ApiInfo[] {
    return this.weatherApis.filter((api: ApiInfo) => api.selected);
  }

  private mounted() {
    this.fetchApis();
  }

  private async fetchApis(): Promise<void> {
    try {
      const response: any = await this.apisService.getApis(this.$http);
      const apis: string[] = response.data;
      this.weatherApis = apis.map((api: string, index: number) => {
        return {
          name: api,
          selected: index === 1 || index === 2 || index === 4
        };
      });
      this.updateApiSelection();
    } catch (error) {
      this.errorMessage = error;
    }
  }

  private handleApiSelection(event: boolean, index: number): void {
    if (
      this.selectedWeatherApis.length === 1 &&
      this.weatherApis[index].selected
    ) {
      this.errorMessage = "At least one weather forecast should be selected!";
      return;
    }
    this.weatherApis[index].selected = event;
    this.updateApiSelection();
  }

  private updateApiSelection(): void {
    EventBus.$emit("selected-apis", this.selectedWeatherApis);
  }

  private closeModal(error: string): void {
    this.errorMessage = error;
  }

  private toggleDegrees(event: boolean) {
    EventBus.$emit("degrees", event);
  }

  private toggleLanguage(event: boolean) {
    this.$i18n.locale = event ? "pt" : "en";
    EventBus.$emit("language", this.$i18n.locale);
  }

  private toggleDarkMode(event: boolean) {
    EventBus.$emit("dark-mode", event);
  }
}
