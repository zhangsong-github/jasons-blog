import { defineUserConfig } from "vuepress";
  
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "jason's coffee time",
  description: "jason's blog",

  theme,

  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //     title: 'VuePress 主题 Hope',
  //     description: '一个开箱即用的 VuePress 主题'
  //   },
  //   '/en/': {
  //     lang: 'en-US', // 语言
  //     title: 'VuePress Theme Hope',
  //     description: 'A vuepress theme with out-of-the-box features'
  //   }
  // },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
