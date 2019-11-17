import { selUserList, selMenuList } from "../api";

export default {
  namespaced: true,
  state: {
    // 左侧菜单栏数据
    menuItems: [
      {
        name: "home", // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: "md-home", // icon类型
        text: "主页" // 文本内容
      },
      {
        name: "t1",
        size: 18,
        text: "用户",
        type: "ios-people",
        hidden: false // 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
      },

      {
        name: "postlist",
        size: 18,
        text: "文章",
        type: "ios-book-outline",
        hidden: false // 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
      },
      {
        text: "设置",
        size: 18,
        type: "ios-cog",
        children: [
          {
            type: "md-person",
            name: "userinfo",
            text: "基本资料"
          },
          {
            type: "md-lock",
            name: "password",
            text: "修改密码"
          }
        ]
      }
    ]
  },
  mutations: {
    setMenus(state, items) {
      state.menuItems = [...items];
    },
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },
  actions: {
    async selMenuList(context, arg) {
      const response = await selMenuList(arg);
      return response;
    },
    async selUserList(context, arg) {
      const response = await selUserList(arg);
      return response;
    }
  }
};
