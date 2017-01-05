const vueServerRenderer = require('vue-server-renderer').createBundleRenderer

// https://github.com/vuejs/vue/blob/next/packages/vue-server-renderer/README.md#why-use-bundlerenderer

module.exports = bundle => {
    return vueServerRenderer(bundle, {
        // cache: require('lru-cache')({
        //     max: 1000,
        //     maxAge: 1000 * 60 * 15
        // })
    })
}
