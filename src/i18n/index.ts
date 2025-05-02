import br from '@locales/br'
import us from '@locales/us'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    br: { translation: br },
    us: { translation: us },
  },
  lng: 'us',
  fallbackLng: 'us',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
