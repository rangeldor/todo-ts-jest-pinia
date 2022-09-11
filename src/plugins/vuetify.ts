// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles/main.css';

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify(
  {
    theme: {
      themes: {
        // dark: {
        //   colors: {
        //     background: '#292930'
        //   }
        // },
        light: {
          colors: {
            background: '#F7F7F7',
          },
        },
      },
    },
  },
);
