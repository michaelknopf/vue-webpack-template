/**
 * Created by nchen on 11/8/2016.
 */
import Vue from 'vue';
import utility from './utility';
import axios from 'axios';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: utility.isDev() ? '/' : axios.defaults.baseURL,
    routes: [
    ]
});

export default router
