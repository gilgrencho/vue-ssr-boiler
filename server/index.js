/*
 *  Set Vue in Server mode
 */
process.env.VUE_ENV = 'server'

/*
 *  Setup the initial app,
 *  this will be extended based on prod or dev settings
 */
const express   = require('express')
const router    = require('./router')

const app       = express()

/*
 *  Add the routing, and send the renderer
 */
app.use('/', router(app))


/*
 *  Run the app on the provided port
 */
app.listen(process.env.PORT || 3000)
