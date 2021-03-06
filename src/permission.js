import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
Vue.use(Vuex);

import { menusToRoutes, resetTokenAndClearUser } from "./utils";
import { LoadingBar } from "iview";

import modules from "./store/main.js";
const store = new Vuex.Store({
  modules: modules
});

Vue.prototype.$store = store;

// 是否有菜单数据
let hasMenus = false;
router.beforeEach(async (to, from, next) => {
  LoadingBar.start();
  if (localStorage.getItem("token")) {
    console.log(111, to.path);
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      if (hasMenus) {
        next();
      } else {
        try {
          // 这里可以用 await 配合请求后台数据来生成路由
          // const data = await axios.get('xxx')
          // const routes = menusToRoutes(data)

          const routes = menusToRoutes(store.state.index.menuItems);
          console.log("routes", routes);
          //   // 动态添加路由
          router.addRoutes(routes);
          hasMenus = true;
          next({ path: to.path || "/" });
        } catch (error) {
          console.error(error);
          resetTokenAndClearUser();
          next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    hasMenus = false;
    if (to.path === "/login") {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});

router.afterEach(() => {
  LoadingBar.finish();
});

export { store, router };
