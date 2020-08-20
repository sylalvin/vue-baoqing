// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import Global from '@/config/global_variable.js'
import { getTodayDate, checkNull } from './unit.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import animate from 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.GLOBAL = Global
Vue.prototype.$getTodayDate = getTodayDate
Vue.prototype.$checkNull = checkNull
Vue.use(VueResource)
Vue.use(animate)
Vue.use(ElementUI)

/* eslint-disable no-new */
router.beforeEach((to, from ,next) => {
  if(to.meta) {
    if(to.meta.title) {
      document.title = to.meta.title
    } else {
      document.title = to.meta
    }
  }
  next()
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
