module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/einfachIOTA.de/'
        : '/',
    pwa: {
        workboxOptions: {
            skipWaiting: true
        }
    }
}