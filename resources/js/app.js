require('./bootstrap');
import vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
window.Vue = vue;

import App from './components/App.vue'

import VueAxios from 'vue-axios';
import axios from 'axios';

import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueGoogleMaps, {
    load: {
        key: "",
        libraries:'places'
    }
});

const router = new VueRouter({
    mode: 'history',
    routes:routes  
})

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})