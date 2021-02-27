import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { LocaleMessage } from "vue-i18n";
import Checkbox from "@/components/checkbox/Checkbox.vue";
import Modal from "@/components/modal/Modal.vue";
import ToggleSwitch from "@/components/toggle-switch/ToggleSwitch.vue";
import { ApiInfo } from "@/types/api-info.interface";
import EventBus from "@/EventBus";
import Apis from "@/types/apis.enum";

@Component({
  components: {
    Checkbox,
    Modal,
    ToggleSwitch
  }
})
export default class UserPreferences extends Vue {
  @Prop() private apis!: string[];
  private weatherApis: ApiInfo[] = [];
  private errorMessage: string | LocaleMessage = "";
  private isPt = false;
  private isFahrenheit = false;

  get selectedWeatherApis(): ApiInfo[] {
    return this.weatherApis.filter((api: ApiInfo) => api.selected);
  }

  private mounted() {
    this.getLocalStorageConfigs();
  }

  @Watch("apis")
  private setApis() {
    if (this.apis.length) {
      const selectedApis = localStorage.selectedApis
        ? JSON.parse(localStorage.selectedApis)
        : [Apis.CLIMA_CELL, Apis.DARK_SKY, Apis.OPEN_WEATHER];
      this.weatherApis = this.apis.map((api: string) => {
        return {
          name: api,
          selected: selectedApis.includes(api)
        };
      });
      this.updateApiSelection();
    }
  }

  private getLocalStorageConfigs() {
    if (localStorage.isFahrenheit) {
      this.toggleDegrees(JSON.parse(localStorage.isFahrenheit));
    }
    if (localStorage.isPt) {
      this.toggleLanguage(JSON.parse(localStorage.isPt));
    }
  }

  private handleApiSelection(isChecked: boolean, index: number): void {
    if (
      this.selectedWeatherApis.length === 1 &&
      this.weatherApis[index].selected
    ) {
      this.errorMessage = this.$t("preferences.apiSelectionError");
      return;
    }
    this.weatherApis[index].selected = isChecked;
    this.updateApiSelection();
  }

  private updateApiSelection(): void {
    localStorage.setItem(
      "selectedApis",
      JSON.stringify(this.selectedWeatherApis.map((api) => api.name))
    );
    EventBus.$emit("selected-apis", this.selectedWeatherApis);
  }

  private closeModal(): void {
    this.errorMessage = "";
  }

  private toggleDegrees(isFahrenheit: boolean) {
    this.isFahrenheit = isFahrenheit;
    localStorage.setItem("isFahrenheit", JSON.stringify(isFahrenheit));
    EventBus.$emit("degrees", isFahrenheit);
  }

  private toggleLanguage(isPt: boolean) {
    this.$i18n.locale = isPt ? "pt" : "en";
    this.isPt = isPt;
    localStorage.setItem("isPt", JSON.stringify(isPt));
    EventBus.$emit("language", this.$i18n.locale);
  }
}
