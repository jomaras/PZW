const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app: ["./src/ts/main"]
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
    new HtmlWebpackPlugin({
        hash: true,
        template: "./src/index.html",
        filename: "./../../index.html"
    })
  ]
};