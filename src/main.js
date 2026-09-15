import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setLocale, useI18n } from './i18n.js'

const { locale } = useI18n()
setLocale(locale.value)

createApp(App).mount('#app')
