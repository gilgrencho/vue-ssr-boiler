/*
 *  The entry point for the server
 *  Will check the matching components for the current route
 *  Set the initial state
 *  Then serve the HTML for those components
 */
 import { app, router, store } from '../main.js'

export default context => {
    /*
     *  The url from the server is pushed in the router
     *  so we can check for matched components
     */
    router.push(context.url)
    const matchedComponents = router.getMatchedComponents()

    /*
     *  If nothing mathes, we return a 404
     */
    if (!matchedComponents.length) {
        return Promise.reject({ code: '404' })
    }

    /*
     *  Otherwise we return a promise in which we prefetch all data for each matched component.
     */
    return Promise.all(matchedComponents.map(component => {
        if (component.preFetch) {
            return component.preFetch(store)
        }
    })).then(() => {
        /*
         *  After all preFetch hooks are resolved, our store is now
         *  filled with the state needed to render the app.
         *  Expose the state on the render context, and let the request handler
         *  inline the state in the HTML response. This allows the client-side
         *  store to pick-up the server-side state without having to duplicate
         *  the initial data fetching on the client.
         */
        context.initialState = store.state
        return app
    })
}
