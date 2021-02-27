import Vue from "vue";
import VueRouter from "vue-router";
import WeatherCompare from "@/views/weather-compare/WeatherCompare.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "WeatherCompare",
    component: WeatherCompare,
    meta: {
      title: "WeatherCompare",
      icon: ""
    }
  },
/*   {
    path: "/details",
    name: "WeatherDetails",
    component: () => import("@/views/weather-details/WeatherDetails.vue")
  }, */
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
