import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2";
import App from "@/App.vue";
import router from "@/router";
import "@/index.css";

const app = createApp(App);
const appStore = createPinia();

app.use(appStore);
app.use(router);
appStore.use(createPersistedStatePlugin());
app.mount("#app");
