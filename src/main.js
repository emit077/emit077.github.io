import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import rules from "@/helper/rules";
import globalMixin from "@/helper/mixins/global-mixin";


// animation
import AOS from "aos";
import "aos/dist/aos.css";

loadFonts();
AOS.init();


const app = createApp(App);
app.mixin(globalMixin);
app.config.globalProperties.$rules = rules;

app.use(router);
app.use(store);
app.use(vuetify);
app.mount("#app");
