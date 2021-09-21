import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./styles/index.css";

import VCalendar from "v-calendar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fab, fas);

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(VCalendar, {})
  .mount("#app");
