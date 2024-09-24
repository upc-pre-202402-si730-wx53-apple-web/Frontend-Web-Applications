import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import i18n from './i18n.js';
import Panel from "primevue/panel";
import Card from "primevue/card";

import 'primeicons/primeicons.css'


const app = createApp(App);

app.use(i18n);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

app.component('pv-card', Card);
app.component('pv-panel', Panel)

app.mount('#app')