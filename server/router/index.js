const fs                = require('fs')
const path              = require('path')
const serialize         = require('serialize-javascript')
const express           = require('express')
const createRenderer    = require('../utils/create-renderer')
const parseHtml         = require('../utils/parse-html')

const router            = express.Router()
const isProd            = process.env.NODE_ENV === 'production'
const resolve           = file => path.resolve(__dirname, file)

module.exports = (app) => {

    /*
     *  If we're in dev mode we need hot reloading
     *  A renderer is returned to hook on to the route.
     */
    let renderer
    let indexHTML

    if(isProd) {
        renderer    = createRenderer(fs.readFileSync(resolve('../../dist/server-bundle.js'), 'utf-8'))
        indexHTML   = parseHtml(fs.readFileSync(resolve('../../dist/index.html'), 'utf-8'))
    } else {
        require('../utils/dev-server')(app, {
            onHtmlChange: index => {
                indexHTML = parseHtml(index)
            },
            onBundleChange: bundle => {
                renderer = createRenderer(bundle)
            }
        })
    }

    /*
     *  Set the static directories
     */
    app.use('/dist', express.static(resolve('../../dist')))


    /*
     *  All requests are handled the same, the front-end will handle all routing.
     */
    router.get('*', (req, res) => {

        /*
         *  If there is no renderer, it means webpack is still working on it.
         *  In prod this will not happen because the bundle is already generated.
         */
        if(!renderer || !indexHTML) {
            return res.end('Waiting for webpack compilation... Refresh in a bit.')
        }

        /*
         *  Handle the request as it comes in.
         *  Create a stream to return the HTML
         */
        const context       = { url: req.url }
        const renderStream  = renderer.renderToStream(context)

        // Set header
        res.setHeader('Content-Type', 'text/html')

        // Start with the head
        renderStream.once('data', () => {
            res.write(indexHTML.head)
        })

        // Every time data comes in, write that chunk
        renderStream.on('data', chunk => {
            res.write(chunk)
        })

        // Handle the end of the stream
        renderStream.on('end', () => {

            // We render the initial state inside the body so the browser can load it
            if (context.initialState) {
                res.write(
                    `<script>window.__INITIAL_STATE__=${
                        serialize(context.initialState, { isJSON: true })
                    }</script>`
                )
            }

            // End the stream with the 'tail'
            res.end(indexHTML.tail)
        })

        // If errors occur, handle them
        renderStream.on('error', err => {
            if (err && err.code === '404') {
                res.status(404).end('404 | Page Not Found')
                return
            }
            // Render Error Page or Redirect
            res.status(500).end('Internal Error 500')
        })
    })

    return router
}
