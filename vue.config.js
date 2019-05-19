module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    pwa: {
        workboxOptions: {
            skipWaiting: true
        }
    }
}