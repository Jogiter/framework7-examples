import { createApp } from 'vue'
import Framework7 from 'framework7/lite-bundle'
import Framework7Vue from 'framework7-vue'
import App from './App.vue'

import 'framework7/framework7-bundle.min.css'
import './css/app.css'

// Demo
/* eslint-disable */
// if (window.parent) {
//   const html = document.documentElement;
//   if (html) {
//     html.style.setProperty('--f7-safe-area-top', '44px');
//     html.style.setProperty('--f7-safe-area-bottom', '34px');
//   }
// }
/* eslint-enable */

Framework7.use(Framework7Vue);

createApp(App).mount('#app')
