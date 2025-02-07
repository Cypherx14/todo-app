const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    },
    output: {
        filename: 'main.[hash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
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
            // Usamos asset/resource para manejar imágenes como recursos estáticos
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource', // Emitir el archivo como un recurso separado
                generator: {
                    filename: 'assets/[name][ext][query]' // Mantener el nombre original
                }
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
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
            filename: '[name].[hash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [{
                from: 'src/assets/',
                to: 'assets/'
            }]
        }),
    ],
}