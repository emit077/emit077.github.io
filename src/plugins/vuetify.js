/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    variations: {
      colors: ["primary", "secondary", "color-1", "color-2", "color-3"],
      lighten: 10,
      darken: 5,
    },
    themes: {
      light: {
        colors: {
          background: "#EAEDFF",
          surface: "#F5F5F5",
          primary: "#2A3E72",
          secondary: "#0DCCC2",
          heading: "#2A3E72",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      dark: {
        colors: {
          background: "#000109",
          surface: "#000109",
          primary: "#EAEDFF",
          secondary: "#03DAC6",
          heading: "#042070",
          error: "#B00020",
          info: "#00fffa",
          success: "#4CAF50",
          warning: "#FB8C00",
          "color-1": "#3CC47C", //green
          "color-2": "#44C0EF", //blue
          "color-3": "#7F56D9", //purple
        },
      },
    },
  },
});
