// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import {createVuetify} from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    variations: {
      colors: ["primary", "secondary"],
      lighten: 1,
      darken: 2,
    },
    themes: {
      light: {
        colors: {
          surface: "#F5F5F5",
          primary: "#2A3E72",
          secondary: "#0DCCC2",
          heading: "#2A3E72",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
          
          "fill-1": "#434656",
          "fill-2": "#434656",
          "fill-3": "#0DCCC2",
          "stroke-1": "#434656",
          "stroke-12": "#FFFFFF",
          "stroke-2": "#F85C5C",
          "stroke-3": "#F3B24A",
          "stroke-4": "#1C222B",


        },
      },
      dark: {
        colors: {
          surface: "#1C222B",
          primary: "#00fffa",
          secondary: "#03DAC6",
          heading:"#042070",
          error: "#B00020",
          info: "#00fffa",
          success: "#4CAF50",
          warning: "#FB8C00",

          "fill-1": "#FFFFFF",
          "fill-2": "#434656",
          "fill-3": "#0DCCC2",
          "stroke-1": "#FFFFFF",
          "stroke-12": "#FFFFFF",
          "stroke-2": "#F85C5C",
          "stroke-3": "#F3B24A",
          "stroke-4": "#F5F5F5",


        },
      },
    },
  },
});
