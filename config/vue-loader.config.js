// Make sure all css will be autoprefixed when processing.
module.exports = {
    postcss: [
        require('autoprefixer')({
            browsers: ['last 3 versions']
        })
    ]
}
