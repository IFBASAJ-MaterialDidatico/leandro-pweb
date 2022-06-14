import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://ifbasaj-materialdidatico.github.io/leandro-pweb/",

  author: {
    name: "Leandro Souza",
  },

  iconAssets: "iconfont",
  
  logo: "/logo.svg",

  repo: "ifbasaj-materialdidatico/leandro-pweb",

  
  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Disciplina Programação Web",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "Material de Aula para a disciplina de programação web do professor Leandro",
    intro: "/intro.html",
    medias: {
      //Baidu: "https://example.com",
      //Bitbucket: "https://example.com",
      //Dingding: "https://example.com",
      //Discord: "https://example.com",
      //Dribbble: "https://example.com",
      //Email: "https://example.com",
      //Evernote: "https://example.com",
      //Facebook: "https://example.com",
      //Flipboard: "https://example.com",
      //Gitee: "https://example.com",
      GitHub: "https://github.com/leandro-costa",
      //Gitlab: "https://example.com",
      Gmail: "mailto:leandro.costa@ifba.edu.br",
      //Instagram: "https://example.com",
      //Lines: "https://example.com",
      //Linkedin: "https://example.com",
      //Pinterest: "https://example.com",
      //Pocket: "https://example.com",
      //QQ: "https://example.com",
      //Qzone: "https://example.com",
      //Reddit: "https://example.com",
      //Rss: "https://example.com",
      //Steam: "https://example.com",
      //Twitter: "https://example.com",
      //Wechat: "https://example.com",
      //Weibo: "https://example.com",
      //Whatsapp: "https://example.com",
      //Youtube: "https://example.com",
      //Zhihu: "https://example.com",
    },
  },
  
  encrypt: {
    config: {
     // "/aulas/": ["1234"],
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
