// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import mui from './assets/mui/js/mui.js'
import './assets/mui/css/mui.css'
Vue.prototype.mui=mui

//引入axios
import axios from 'axios'
Vue.prototype.axios = axios


Vue.config.productionTip = false

require('./mock')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
