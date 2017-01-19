const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        'app': './src/ts/main.ts'
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

if(process.env.PROD){
    config.externals = {
        "react": {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        "react-dom": {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        }
    };
}


module.exports = config;