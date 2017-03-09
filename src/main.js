//==========vendors===========
import 'babel-polyfill'
import Vue from 'vue';

import axios from 'axios';
import Utility from './utility'

if(Utility.isDev()) {
    axios.defaults.baseURL = '';
    axios.defaults.headers.common['Authorization'] = 'Basic '+ btoa(process.env.HTTP_U + ":" + process.env.HTTP_P);
} else {
    axios.defaults.baseURL = Utility.getBaseUrl();
}

//==========Plugins==========
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })

import "font-awesome-webpack";

//////============CSS============
import 'bootstrap/dist/css/bootstrap.css';
//import 'selectivity/styles/selectivity-jquery.css';
//import 'acu-frontend-utility/css/inspinia/style.css';
import 'element-ui/lib/theme-default/index.css';

import './styles/vendor/animate.css'

import './styles/global.scss'

//==============JS============
import 'metismenu/dist/metisMenu.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

//============Components============
import VueApp from 'components/VueApp';

//========Resources config=========


//===============Vue============
import router from './router'
import store from './store'


//=============Vue init=========
new Vue({
    router,
    store,
    components:{
        VueApp
    },
    template: `
    <div id="app">
        <VueApp></VueApp>
    </div>
  `
}).$mount('#app')
