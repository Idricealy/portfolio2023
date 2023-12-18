import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import './assets/index.css'
import en from './locales/en.json';
import fr from './locales/fr.json';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faXmark }  from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const languages = {
    en,
    fr,
};

const app = createApp(App)

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages: languages
})

library.add(faLinkedin)
library.add(faGithub)
library.add(faBars)
library.add(faXmark)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n)
app.use(router)

app.mount('#app')
