import './assets/global.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import i18n from './i18n.js';

import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import router from './routes/index.js';
import Panel from "primevue/panel";
import Card from "primevue/card";

import 'primeicons/primeicons.css'
import Avatar from "primevue/avatar";

import 'primeflex/primeflex.css'
import Chart from "primevue/chart";

const app = createApp(App);

app.use(router);
app.use(i18n);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false
        }
    },

});

app.component('pv-input-text', InputText);
app.component('pv-float-label', FloatLabel);
app.component('pv-password', Password);
app.component('pv-button', Button);
app.component('pv-checkbox', Checkbox);
app.component('pv-avatar', Avatar)
app.component('pv-card', Card);
app.component('pv-chart', Chart)

app.mount('#app')