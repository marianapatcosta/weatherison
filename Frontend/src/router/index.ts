import Vue from "vue";
import VueRouter from "vue-router";
import WeatherCompare from "../views/weather-compare/WeatherCompare.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "WeatherCompare",
    component: WeatherCompare,
    meta: {
      title: "Weatherison",
      icon: "/lock.png"
    }
  },
  /*  {
    path: "/today",
    name: "WeatherCompare",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about"  "../views/weather-compare/WeatherCompare.vue"
      )
  }, */
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
