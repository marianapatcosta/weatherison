import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() private label!: string;
  @Prop() private type!: string;
  @Prop() private disabled!: boolean;
  @Prop() private small!: boolean;
  @Prop() private active!: boolean;
  // @Prop() private styleType!: string;
  @Prop() private secondary!: boolean;
  @Prop() private icon!: string;

  private handleOnClick(): void {
    this.$emit("click");
  }
}
