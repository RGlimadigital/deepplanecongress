import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/deepplane",
    name: "about",

    component: () => import("../views/DeepPlane.vue"),
  },
  {
    path: "/contato",
    name: "contato",

    component: () => import("../views/Contato.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
