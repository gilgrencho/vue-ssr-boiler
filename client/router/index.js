import Vue      from 'vue'
import Router   from 'vue-router'
import store    from '../store'
import homePage from '../pages/home/index.vue'
import { sync } from 'vuex-router-sync'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: homePage
        }
    ]
})

sync(store, router)

export default router
