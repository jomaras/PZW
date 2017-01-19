const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'vendor': './src/ts/vendor.ts',
        'app': './src/ts/main.ts',
    },
    output:{
        path: "./bin/js",
        filename: "[name].js"
    },
    devtool:'source-map',
    module: {
        loaders: [ 
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    resolve:{
        extensions:["", ".js", ".ts", ".tsx"],
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: "./../../index.html"
        })
    ]
};