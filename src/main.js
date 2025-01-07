import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'flowbite';
import router from './router/index.js'; // Importation du routeur



createApp(App).use(router).mount('#app')
