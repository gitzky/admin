import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const commonRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue")
  },
  { path: "/", redirect: "/home" }
];

// 需要通过后台数据来生成的组件
export const asyncRoutes = {
  home: {
    path: "home",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  user: {
    path: "user",
    name: "user",
    component: () => import("../views/User.vue")
  },
  post: {
    path: "post",
    name: "post",
    component: () => import("../views/Post.vue")
  },
  password: {
    path: "password",
    name: "password",
    component: () => import("../views/Password.vue")
  },
  msg: {
    path: "msg",
    name: "msg",
    component: () => import("../views/Msg.vue")
  },
  userinfo: {
    path: "userinfo",
    name: "userinfo",
    component: () => import("../views/UserInfo.vue")
  }
};

const createRouter = () =>
  new Router({
    routes: commonRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
