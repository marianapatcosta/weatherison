import Vue from "vue";
import EventBus from "@/EventBus";

export default Vue.extend({
  data() {
    return {
      isDarkMode: false
    };
  },
  created() {
    EventBus.$on(
      "dark-mode",
      (isDarkMode: boolean) => (this.isDarkMode = isDarkMode)
    );
  }
  /*   beforeDestroy(){
    EventBus.$off("dark-mode");
  } */
});
