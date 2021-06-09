const webpackOptions = {
    publicPath: '/',
    lintOnSave: true,
    configureWebpack: {
        devtool: 'eval'
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "~@/scss/variables.scss";
                `,
            }
        }
    }
}
module.exports = webpackOptions;