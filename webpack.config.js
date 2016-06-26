var path = require('path');
var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader?presets[]=es2015',
                include: [ path.resolve(__dirname, 'app')]
            },
            {
                test: /\.(css|less)/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.html$/,
                loaders: ['html']
            },
            {
                test: /index\.html$/,
                loaders: ['file?name=[name].[ext]', 'html-minify']
            },
            {
                test: /\.(woff2?|svg|jpe?g|png|gif|ico|ttf|eot)$/,
                loader: 'file'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js'
    },
    entry: {
        javascript: ['./app/app.js', './app/index.html'],
    },
    watch: false,
    colors: true,
    progress: true,
    plugins: []
};