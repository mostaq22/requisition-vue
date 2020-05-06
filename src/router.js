import VueRouter from "vue-router";
import Vue from "vue";
import HomePage from "./components/HomePage";

Vue.use(VueRouter);

const routes = [{ path: "/", component: HomePage, name: "homepage" }];

export const router = new VueRouter({
  mode: "history",
  routes,
});
