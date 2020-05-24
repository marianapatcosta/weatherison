import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ToggleSwitch extends Vue {
  @Prop() private label!: string;
  @Prop() private leftLabel!: string;
  @Prop() private rightLabel!: string;
  @Prop() private checked!: boolean;
  @Prop() private disabled!: boolean;

  private handleToggle(event: any) {
    this.$emit("toggle", event.target.checked);
  }
}
