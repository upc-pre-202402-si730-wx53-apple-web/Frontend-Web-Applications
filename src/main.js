import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import i18n from './i18n.js';
import Card from "primevue/card";

import 'primeicons/primeicons.css'
import Avatar from "primevue/avatar";
import Button from "primevue/button";

import 'primeflex/primeflex.css'
import Chart from "primevue/chart";

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

app.component('pv-avatar', Avatar)
app.component('pv-button', Button)
app.component('pv-card', Card);
app.component('pv-chart', Chart)

app.mount('#app')