import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Statistics from "../views/Statistics.vue";
import Party from "../views/Party.vue";
import Flat from "../views/Flat.vue";
import Profile from "../views/Profile.vue";
import Settings from "../views/Settings.vue";
import About from "../views/About.vue";
import Impressum from "../views/Impressum.vue";
import Datasecurity from "../views/Datasecurity.vue";
import Cookies from "../views/Cookies.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
  },
  {
    path: "/party",
    name: "Party",
    component: Party,
  },
  {
    path: "/Flat",
    name: "Flat",
    component: Flat,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: Impressum,
  },
  {
    path: "/datasecurity",
    name: "Datasecurity",
    component: Datasecurity,
  },
  {
    path: "/cookies",
    name: "Cookies",
    component: Cookies,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
