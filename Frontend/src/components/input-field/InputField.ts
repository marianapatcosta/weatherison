import { Component, Prop, Ref, Vue } from "vue-property-decorator";

@Component
export default class InputField extends Vue {
  @Prop() private placeholder!: string;
  @Prop() private value!: string;
  @Ref("inputLocation") private readonly inputLocation!: HTMLButtonElement;
  private inputValue = this.value;

  private handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.$emit("input", target.value);
  }

  private handleBlur(event: Event) {
    const target = event.target as HTMLInputElement;
    this.$emit("blur", target.value);
    target.blur();
    target.value = "";
    this.handleInput(event);
  }

  private handleClear(event: Event) {
    this.$emit("clear", "");
    this.inputLocation.focus();
  }
}
