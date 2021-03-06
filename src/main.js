// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atelier-forest-dark.css'
import './assets/css/index.scss'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueHighlightJS)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
