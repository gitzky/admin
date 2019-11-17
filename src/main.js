import Vue from "vue";
import App from "./App";
import iView from "iview";
import { store, router } from "./permission";

Vue.use(iView);

Vue.config.productionTip = false;

import "iview/dist/styles/iview.css";
import "@/assets/css/index.scss";
// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
