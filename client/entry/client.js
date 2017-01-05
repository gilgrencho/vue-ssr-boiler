/*
 *  The entry point for the browser
 *  Will rehydrate the server's html
 */
import { app, store } from '../main.js'

/*
 *  The server will have rendered our initial state
 */
store.replaceState(window.__INITIAL_STATE__)

/*
 *  Now mount the app in the DOM
 */
app.$mount('#app')
