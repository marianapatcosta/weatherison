import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tooltip extends Vue {
  @Prop() private label!: string;
}
