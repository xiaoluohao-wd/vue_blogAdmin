import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
//导入富文本编辑器及样式
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.config.productionTip = false
//配置axios
Vue.prototype.$http=axios
axios.defaults.baseURL=`http://localhost:3000/`
//注册富文本组件
Vue.use(VueQuillEditor)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
