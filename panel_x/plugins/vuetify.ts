import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      primary: '#CBAA5C',
      'primary-darken-1': '#3700B3',
      secondary: '#083759',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    }
  }


  const vuetify = createVuetify({
    components,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
