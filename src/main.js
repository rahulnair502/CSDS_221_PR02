const { createApp } = require('vue');
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
import "bootstrap-datepicker"
createApp(App).use(Antd).mount("#app");
