import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Checkbox extends Vue {
  @Prop() private checked!: boolean;
  @Prop() private disabled!: boolean;
  @Prop() private label!: string;
  private showTick!: boolean;

  private handleCheck() {
    this.showTick = !this.showTick;
    this.$emit("click", this.showTick);
  }
}
