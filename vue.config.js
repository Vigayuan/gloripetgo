/*
 * @Description: 
 * @Author: Viga
 * @Date: 2025-09-17 13:57:30
 * @LastEditTime: 2025-09-17 14:23:42
 */
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
        // 设置 htmlWebpackPlugin 的标题
        config.plugin('html').tap(args => {
            args[0].title = 'Gloripetgo' // 替换为您想要的标题
            return args
        })
    }
})
