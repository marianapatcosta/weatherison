import { Component, Vue } from "vue-property-decorator";
import { LocaleMessage } from "vue-i18n";
import Header from "@/components/header/Header.vue";
import WeatherCompare from "@/views/weather-compare/WeatherCompare.vue";

@Component({
  components: {
    Header,
    WeatherCompare
  }
})
export default class App extends Vue {}
