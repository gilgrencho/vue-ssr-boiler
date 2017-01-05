/*
 *  The main app bootstrapper
 */
import Vue      from 'vue'
import store    from './store'
import router   from './router'
import Root     from './components/Root.vue'
// import { sync } from 'vuex-router-sync'

// sync(store, router)

const app = new Vue(Vue.util.extend({ store, router }, Root))

export { app, router, store }
