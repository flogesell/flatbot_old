import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

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
import Invite from "../views/Invite.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: {
        guest: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        guest: true,
      },
    },
    {
      path: "/invite/:invite_id",
      name: "Invite",
      component: Invite,
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/statistics",
      name: "Statistics",
      component: Statistics,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/party",
      name: "Party",
      component: Party,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Flat",
      name: "Flat",
      component: Flat,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
      meta: {
        requiresAuth: true,
      },
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
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }

  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
