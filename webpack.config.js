const path = require("path")
const HtmlWebpackPlugin= require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'src','index.js'),
    output:{
        path:path.resolve(__dirname,"dist"),
        filename: 'main.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src','index.html'),//本地自定义模板
            filename:'index.html'
        })
    ],
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src','txt.html'),//本地自定义模板
            filename:'txt.html'
        })
    ],
    module:{
        rules:[{
            test:/\.js$/,
            use:[{
                options:{
                    presets:['react']
                }
            },]
             },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']//程序会先加载css-loader，然后在加载style-loader文件
            }]
    }
}