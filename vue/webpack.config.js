const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/example.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        },
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: __dirname + '/build/',
        port: 9002
    }
}
