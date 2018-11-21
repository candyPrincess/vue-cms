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


// 引入轮播图组件并注册
import { Swipe, SwipeItem, Button } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


// 发送请求获取数据vue里面用到vue-resource
//导入并注册
import vueResource from "vue-resource"
Vue.use(vueResource)
//注册跟路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/';
// 定义在全局格式化时间
import moment from "moment"
Vue.filter("dataFormat",function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(datastr).format(pattern)
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
