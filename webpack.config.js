const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    // attributes: false,
                    minimize: false //si cambio a true minimiza el codigo de html y quita comentarios
                }
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options : {
            //                 esModule: false
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body', // Esto mueve el script al final del body
        }),
        new MiniCssExtractPlugin({
            filename : '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [{
                from: 'src/assets', 
                to: 'assets/'
            }]
        })
    ],
}