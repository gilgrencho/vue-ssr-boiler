import Vue      from 'vue'
import Router   from 'vue-router'
import homePage from '../pages/home/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: homePage
        }
    ]
})
