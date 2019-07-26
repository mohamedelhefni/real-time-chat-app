import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";
import chat from "./views/chat.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/chat",
      name: "chat",
      component: chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next({ name: "login" });
        }
      }
    }
  ]
});
