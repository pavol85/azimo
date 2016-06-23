var path = require('path');
var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader?presets[]=es2015',
                include: [path.resolve(__dirname, 'app')]
            },
            {
                test: /\.css/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.html$/,
                loaders: ['file?name=[name].[ext]']
            },
            {
                test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js'
    },
    entry: {
        index: './app/index.html',
        javascript: './app/app.js'
    },
    watch: false,
    colors: true,
    progress: true,
    plugins: []
};