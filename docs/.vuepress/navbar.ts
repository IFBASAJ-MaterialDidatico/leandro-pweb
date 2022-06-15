import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/sumario",
  "/",
  //{ text: "Guide", icon: "creative", link: "/guide/" },
  {
    text: "Aulas",
    icon: "edit",
    prefix: "/aulas/",
    children: [
      { text: "Apresentação", icon: "edit", link: "" },
      {
        text: "Articles 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          "article1",
          "article4",
        ],
      },
      {
        text: "Articles 5-12",
        icon: "edit",
        children: [
          "article/article5",
          "article/article8",
        ],
      },
      "article9" ,
      "article12",
      "printPage",
    ],
  },

]);
