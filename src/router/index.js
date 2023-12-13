import Vue from "vue";
import VueRouter from "vue-router";
// 注册两个全局组件router-link router-view
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
})

export default router;