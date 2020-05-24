import { Component, Ref, Vue, Watch } from "vue-property-decorator";
import Header from "@/components/header/Header.vue";
import UserPreferences from "@/components/user-preferences/UserPreferences.vue";
import EventBus from "./EventBus";

@Component({
  components: {
    Header,
    UserPreferences
  }
})
export default class App extends Vue {
  private isUserPreferencesVisible = false;
  private isDarkMode = false;
  @Ref("userPreferences") private readonly userPreferences!: HTMLElement;
  @Ref("header") private readonly header!: HTMLElement;

  private created() {
    this.addEventListeners();
  }

  private beforeDestroy() {
    this.removeEventListeners();
  }

  private handleClickOutside(event: any) {
    const element: HTMLElement = event.target;
    if (
      this.userPreferences &&
      !this.userPreferences.contains(element) &&
      !this.header?.$refs.kebabMenuIcon.contains(element)
    ) {
      return (this.isUserPreferencesVisible = false);
    }
  }

  private addEventListeners(): void {
    EventBus.$on(
      "dark-mode",
      (isDarkMode: boolean) => (this.isDarkMode = isDarkMode)
    );
    document.addEventListener("click", this.handleClickOutside);
  }

  private removeEventListeners(): void {
    EventBus.$off("dark-mode");
    document.removeEventListener("click", this.handleClickOutside);
  }
  private toggleUserPreferences(event: any): void {
    this.isUserPreferencesVisible = event;
  }
}
