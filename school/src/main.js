import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import 'lib-flexible'


import * as filters from '@/config/filters'

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

import {
    ToastPlugin,
    LoadingPlugin,
    DatetimePlugin
} from 'vux'
import ECharts from 'vue-echarts'
Vue.use(ECharts);
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin);
Vue.use(DatetimePlugin);
Vue.use(VueRouter)
const router = new VueRouter({
    scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
        // console.log(to) // to：要进入的目标路由对象，到哪里去
        // console.log(from) // from：离开的路由对象，哪里来
        // console.log(savePosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
        if (savePosition) {
            return savePosition;
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes
})

//初始化数据
store.dispatch("initData")

new Vue({
    router,
    store,
}).$mount('#app')
