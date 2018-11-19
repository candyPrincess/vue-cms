import Vue from 'vue'
import App from './App'
import router from './router'

// 引入头部文件
import { Header } from "mint-ui"
Vue.component(Header.name, Header);

// 引入底部样式文件
import "./css/mui.min.css"
import "./fonts/mui.ttf"
// 引入底部图标样式
import "./css/icons-extra.css"
import "./fonts/mui-icons-extra.ttf"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
