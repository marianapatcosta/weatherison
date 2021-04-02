import { Component, Vue, Ref, Watch } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";
import InputField from "@/components/input-field/InputField.vue";
import Modal from "@/components/modal/Modal.vue";
import Tooltip from "@/components/tooltip/Tooltip.vue";
import UserPreferences from "@/components/user-preferences/UserPreferences.vue";
import { GeolocationParams } from "@/types/geolocation-params.interface";
import EventBus from "../../EventBus";
import { LocaleMessage } from "vue-i18n";
import ApisService from "@/services/apis-service";

@Component({
  components: {
    Button,
    InputField,
    Modal,
    Tooltip,
    UserPreferences
  }
})
export default class Header extends Vue {
  private location = "";
  private errorMessage: string | LocaleMessage = "";
  private isUserPreferencesOpened = false;
  private isMenuOpened = false;
  private lang = "en";
  private $http: any;
  private apisService: ApisService = new ApisService();
  private apis: string[] = [];
  private showTooltip: string | LocaleMessage = "";
  private isMainPage = this.$route.name === "WeatherCompare";
  @Ref("sideMenu") private readonly sideMenu!: HTMLElement;
  @Ref("hamburgerMenu") private readonly hamburgerMenu!: HTMLElement;
  @Ref("userPreferences") private readonly userPreferences!: HTMLElement;
  @Ref("kebabMenu") private readonly kebabMenu!: HTMLElement;

  @Watch("$route")
  private onRouteChange() {
    this.isMainPage = this.$route.name === "WeatherCompare";
  }

  private created() {
    this.addEventListeners();
  }

  private beforeDestroy() {
    this.removeEventListeners();
  }

  private mounted() {
    this.fetchApis();
  }

  private async fetchApis(): Promise<void> {
    try {
      const response: any = await this.apisService.getApis(this.$http);
      this.apis = response.data;
    } catch (error) {
      this.errorMessage = error;
    }
  }

  private handleClickOutsideHamburgerMenu(event: any) {
    const element: HTMLElement = event.target;
    if (
      this.sideMenu &&
      !this.sideMenu.contains(element) &&
      !this.hamburgerMenu.contains(element)
    ) {
      return (this.isMenuOpened = false);
    }
  }

  private handleClickOutsideUserPreferences(event: any) {
    const element: HTMLElement = event.target;
    if (
      this.userPreferences &&
      !this.userPreferences.contains(element) &&
      !this.kebabMenu.contains(element)
    ) {
      return (this.isUserPreferencesOpened = false);
    }
  }

  private addEventListeners(): void {
    EventBus.$on("language", (lang: string) => {
      this.lang = lang;
    });
    document.addEventListener("click", this.handleClickOutsideHamburgerMenu);
    document.addEventListener("click", this.handleClickOutsideUserPreferences);
  }

  private removeEventListeners(): void {
    EventBus.$off("language");
    document.removeEventListener("click", this.handleClickOutsideHamburgerMenu);
    document.removeEventListener(
      "click",
      this.handleClickOutsideUserPreferences
    );
  }

  private closeModal(): void {
    this.errorMessage = "";
  }

  private clearLocation(): void {
    this.location = "";
  }

  private defineCurrentPosition() {
    if (!navigator.geolocation) {
      this.errorMessage = this.$t("header.geolocationError");
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

  private toggleIsUserPreferencesOpened(): void {
    this.isUserPreferencesOpened = !this.isUserPreferencesOpened;
  }

  private toggleIsMenuOpened(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
