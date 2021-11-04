// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI,{locale});
Vue.prototype.$axios = axios 



// router.beforeEach((to,from,next)=>{
//   if(to.path=="/"){
//     next();
//   }else if(to.path=="/hello"){
//     next();
//   }else if(to.path=="/demo1"){
//     next();
//   }else if(to.path=="/demo2"){
//     next();
//   }else{
//     next({path:"/login"});
//   }
// })




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

