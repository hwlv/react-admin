var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './favicon.ico'
    }),
     // 独立css文件
    new ExtractTextPlugin("css/[name].css"),
    ],
    module: {
        rules: [
            // react(jsx)语法的处理
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            // css文件的处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
              // sass文件的处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            // 图片的配置
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            // 字体图标的配置
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};

module.exports = config;