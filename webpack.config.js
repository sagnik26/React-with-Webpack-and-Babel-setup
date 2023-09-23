const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\css$/,
                use: [ 
                    "style-loader",  // 2. Injects styles into DOM
                    "css-loader"    // 1. Turns css into commonjs
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader", // 3. Injects styles into DOM
                    "css-loader",  // 2. Turns css into commonjs
                    "sass-loader" // 1. Turns sass into css
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs", ".json"],
        symlinks: false,
        cacheWithContext: false,
    }
}

