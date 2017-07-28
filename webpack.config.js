const ENV = process.env.NODE_ENV;
const webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/public/js',
        publicPath: 'public/',
        filename: "app.min.js"
    },
    devtool: ENV === 'production' ? 'source-map' : 'cheap-inline-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jade$/,
                loader: 'jade',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!stylus',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader?limit=10000&mimetype=image/jpg'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.EnvironmentPlugin('NODE_ENV')
    ]
};