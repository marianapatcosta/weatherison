import { Component, Prop, Vue, Ref } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";

@Component({
  components: {
    Button
  }
})
export default class Modal extends Vue {
  @Prop() private header!: string;
  @Prop() private label!: string;
  @Prop() private message!: string;
  @Ref("button") private readonly focusedButton!: HTMLButtonElement;
  @Ref("modal") private readonly modal!: HTMLElement;

  private mounted(): void {
    document.addEventListener("click", this.handleClickOutside);
    // (this.$refs.button as any).focus();
  }

  private beforeDestroy(): void {
    document.removeEventListener("click", this.handleClickOutside);
  }

  private handleClickOutside(event: Event) {
    const target = event.target as HTMLInputElement;
    if (this.modal && !this.modal.contains(target)) {
      this.$emit("clear");
    }
  }
}
