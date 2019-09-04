module.exports = {
    // 配置跨域代理
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:8081',    // 你自己的api接口地址
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '',  
                }
            }
        }
    }
};