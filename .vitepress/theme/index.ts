import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import MermaidBlock from "./components/MermaidBlock.vue";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("MermaidBlock", MermaidBlock);
  },
};

export default theme;
