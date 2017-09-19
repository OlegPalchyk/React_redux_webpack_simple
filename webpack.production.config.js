'use strict';

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/production/',
        publicPath: "./",
        filename: '[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
            },
            // {
            //     test: /\.less$/,
            //     loader: "style-loader!css-loader!autoprefixer-loader!less",
            //     exclude: [/node_modules/, /public/]
            // },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif&name=img/[name].[ext]"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg&name=img/[name].[ext]"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png&name=img/[name].[ext]"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml&name=img/[name].[ext]"
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?name=fonts/[name].[ext]&limit=10000',
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tmpl.html',
            inject : 'body',
            title : 'Title'

        })


    ]
};