import { Component, Prop, Ref, Vue } from "vue-property-decorator";

@Component
export default class InputField extends Vue {
  @Prop() private placeholder!: string;
  @Prop() private value!: string;
  // @Model("input", { type: String }) private readonly value!: string;
  @Ref("inputLocation") private readonly inputLocation!: HTMLButtonElement;
  private inputValue = this.value;

  private handleInput(event: any) {
    this.$emit("input", event.target.value);
  }

  private handleBlur(event: any) {
    this.$emit("blur", event.target.value);
    event.target.blur();
    event.target.value = "";
    this.handleInput(event);
  }

  private handleClear(event: any) {
    this.$emit("clear", "");
    this.inputLocation.focus();
  }
}
