module.exports = {
    devServer: {
        proxy: {
            '/proxyApi': {
                target: 'http://api.douban.com',
                changeOrigin: true,
                pathRewrite: {
                    '/proxyApi': ''
                }
            }
        }
    }
}

