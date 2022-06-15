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
          { text: "Article 1", icon: "edit", link: "article1" },
          "article4",
        ],
      },
      {
        text: "Articles 5-12",
        icon: "edit",
        children: [
          {
            text: "Article 5",
            icon: "edit",
            link: "article/article5",
          },
          "article/article8",
        ],
      },
      { text: "Article 9", icon: "edit", link: "article9" },
      "article12",
    ],
  },

]);
