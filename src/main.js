// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import { getTodayDate, checkNull, checkLogin, bindMobile, Global, Address, MemberLevel } from './unit.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import animate from 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/common.css'

Vue.config.productionTip = false
Vue.prototype.$MEMBER = MemberLevel
Vue.prototype.$ADDRESS = Address
Vue.prototype.$GLOBAL = Global
Vue.prototype.$getTodayDate = getTodayDate
Vue.prototype.$checkNull = checkNull
Vue.prototype.$checkLogin = checkLogin
Vue.prototype.$bindMobile = bindMobile
Vue.use(VueResource)
Vue.use(animate)
Vue.use(ElementUI)

/* eslint-disable no-new */
router.beforeEach((to, from ,next) => {
  let hasLogin = checkLogin()
  if(to.path.indexOf("/mycenter") != -1) {
    if (!hasLogin) {
      ElementUI.Message({
        message: "您还未登录，请先登录！",
        type: "warning"
      })
      return
    } else {
        let hasBind = bindMobile()
        if(!hasBind) {
          router.push({
            path: '/bind'
          })
          // ElementUI.MessageBox.prompt('请绑定手机号', '温馨提示', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   inputPattern: /^1[34578]\d{9}$/,
          //   inputErrorMessage: '手机号码格式不正确'
          // }).then(({ value }) => {
          //     console.log(value) // 绑定成功，跳转至个人中心
          //     Vue.http.post('https://shop.h2h777.cn/index.php?s=/api/user/reg',{
          //       mobile: value,
          //       weixin_openid: JSON.parse(localStorage.getItem("userInfo")).weixin_openid
          //     }).then(
          //         function(res) {
          //             if(res.body.code == 0) {
          //                 localStorage.setItem("userInfo", JSON.stringify(res.body.data))
          //                 router.push({
          //                   path: '/mycenter',
          //                 })
          //             } else {
          //                 ElementUI.Message({
          //                     message: res.body.msg,
          //                     type: "warning"
          //                 })
          //                 return
          //             }
          //         },
          //         function(error) {
          //             console.log(JSON.stringify(error))
          //             ElementUI.Message({
          //                 message: JSON.stringify(error),
          //                 type: "warning"
          //             })
          //             return
          //         }
          //     )
          // }).catch(() => {
          //     ElementUI.Message({
          //         type: 'info',
          //         message: '取消绑定'
          //     })
          //     return
          // })
          return
        }
    }
  }
  if((to.path.indexOf("/login") != -1) || (to.path.indexOf("/register") != -1)) {
    if (hasLogin) {
        let bindres = bindMobile()
        if(!bindres) {
          router.push({
            path: '/bind'
          })
          // ElementUI.MessageBox.prompt('请绑定手机号', '温馨提示', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   inputPattern: /^1[34578]\d{9}$/,
          //   inputErrorMessage: '手机号码格式不正确'
          // }).then(({ value }) => {
          //     console.log(value) // 绑定成功，跳转至个人中心
          //     router.push({
          //         path: '/mycenter',
          //     })
          // }).catch(() => {
          //     ElementUI.Message({
          //         type: 'info',
          //         message: '取消绑定'
          //     })
          //     return
          // })
        } else {
          ElementUI.Message({
            message: "您已登录，请勿重复登录！",
            type: "warning"
          })
          return
        }
    } 
  }
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
