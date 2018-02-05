import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import route from './route';
import VueResource from 'vue-resource';


Vue.use(VueRouter);//可以把这个组件变成全局公用的组件
Vue.use(VueResource);

//1.创建实例，并且引入配置
var router=new VueRouter(route);
new Vue({
  router,//2.把router放入app实例
  el: '#app',
  render: h => h(App)
})
