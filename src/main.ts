import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

axios.defaults.baseURL = 'http://backend.test:8080/api';
axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');

createApp(App).use(store, axios).use(router).mount('#app')
