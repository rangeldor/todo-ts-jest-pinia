import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { md } from 'vuetify/iconsets/md'
import { mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'

// Misc
import { loadFonts } from './webfontloader'
loadFonts()

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
      md,
      mdiSvg
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          background: '#F7F7F7',
          primary: '#43807a',
          secondary: '#5CBBF6',
          tertiary: '#E57373',
          accent: '#005CAF'
        }
      }
    }
  }
})
