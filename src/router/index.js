import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../modules/restaurants/views/index.vue"
      ),
  },
  {
    path: "/products/:product",
    name: "products",
    component: () =>
        import(
            /* webpackChunkName: "about" */ "../modules/products/views/index.vue"
            ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
