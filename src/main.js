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

//格式化时间的过滤器
Vue.filter('dateFormat',function(originVal){
  const index =originVal.indexOf('T')
  const ymd = originVal.slice(0,index)
  const index1 =originVal.indexOf('Z')
  const time =originVal.slice(index+1,index1-4)
  let hour=time.slice(0,2)*1+8
  let ms=time.slice(2)
  if(hour>=24){
   hour='0'+(hour-24)+''
  }
	return `${ymd}-${hour}${ms}`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
