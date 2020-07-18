const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.bundle.js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin(
            {
                template: './src/index.html',
                filename: 'index.html'
            }
        )
    ],
}