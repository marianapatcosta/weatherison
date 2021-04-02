import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Checkbox extends Vue {
  @Prop() private checked!: boolean;
  @Prop() private disabled!: boolean;
  @Prop() private label!: string;
  @Prop() private name!: string;

  private handleCheck(event: Event) {
    const target = event.target as HTMLInputElement;
    this.$emit("change", target.checked);
  }
}
