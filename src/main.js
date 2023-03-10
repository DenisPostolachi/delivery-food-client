import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/css/normalize.css";
import "@/css/style.css";
import "@/css/responsive.css";

createApp(App).use(store).use(router).mount("#app");
