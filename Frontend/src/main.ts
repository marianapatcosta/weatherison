import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBolt,
  faCertificate,
  faCircle,
  faSearchLocation,
  faEllipsisV,
  faStar,
  faSun,
  faWind,
  faUmbrella,
  faTimes,
  faTint,
  faCloudRain,
  faTemperatureHigh,
  faTemperatureLow,
  faThermometerHalf
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBolt,
  faCircle,
  faSearchLocation,
  faEllipsisV,
  faStar,
  faStarReg,
  faCertificate,
  faWind,
  faUmbrella,
  faTimes,
  faSun,
  faTint,
  faCloudRain,
  faTemperatureHigh,
  faTemperatureLow,
  faThermometerHalf
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import darkModeMixin from "@/mixins/dark-mode.mixin";
Vue.mixin(darkModeMixin);

/* Vue.directive("click-outside", {
  bind(el: any, binding: any, vnode: any) {
    el.handleClickOutside = (event: any) => {
      const element: HTMLElement = event.target;

      const { handler, exclude } = binding.value;

      console.log(vnode.context.$refs[exclude]);
      if (
        el &&
        !el.contains(
          element
        ) &&
        !vnode.context.$refs[exclude].contains(element)
      ) {
        event.preventDefault();
        event.stopPropagation();
        vnode.context[handler]();
      }
    };
    document.addEventListener("click", el.handleClickOutside);
  },
  unbind(el: any) {
    document.removeEventListener("click", el.handleClickOutside);
  }
}); */

Vue.config.productionTip = false;

Vue.use({
  install() {
    Vue.prototype.$http = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
});

new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount("#app");
