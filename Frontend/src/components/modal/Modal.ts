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
  @Ref("focusedButton") private readonly focusedButton!: HTMLButtonElement;
  @Ref("modal") private readonly modal!: HTMLElement;

  private mounted(): void {
    // if created()
    /*     Vue.nextTick().then(() => { */

    /* tslint:disable-next-line */
    this.focusedButton.$refs.button.focus();
    document.addEventListener("click", this.handleClickOutside);
    /*  }); */
    // document.getElementById("focused-button").focus();
  }

  private beforeDestroy(): void {
    document.removeEventListener("click", this.handleClickOutside);
  }

  private handleClickOutside(event: any) {
    const element: HTMLElement = event.target;
    if (this.modal && !this.modal.contains(element)) {
      this.$emit("clear");
    }
  }
}
/* 
(this.$refs.myChildRef as ChildComponent).focus() */
