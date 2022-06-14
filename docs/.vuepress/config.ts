import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "pt-BR",
  title: "PWEB",
  description: "Material de Aula para a disciplina Programação WEB",

  base: "/leandro-pweb/",

  theme,
});
