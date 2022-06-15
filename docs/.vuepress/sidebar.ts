import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/sumario",
  "/",
/*  {
    icon: "creative",
    text: "Guide",
    prefix: "/guide/",
    link: "/guide/",
    children: "structure",
  },*/
  {
    text: "Aulas",
    icon: "note",
    prefix: "/aulas/",
    children: [
      "",
      {
        text: "Articles 1-4",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        children: ["article1", "article4"],
      },
      {
        text: "Articles 5-12",
        icon: "note",
        children: [
          {
            text: "Articles 5-8",
            icon: "note",
            collapsable: true,
            prefix: "article/",
            children: ["article5", "article8"],
          },
          {
            text: "Articles 9-12",
            icon: "note",
            children: ["article9", "article12", "printPage"],
          },
        ],
      },
    ],
  },
]);
