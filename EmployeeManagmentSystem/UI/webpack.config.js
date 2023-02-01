const filepath = require('path');
module.exports = {
    mode: 'development',
    entry: {
        app: './src/App.jsx'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            name: 'vendors',
            chunks: 'all',
        },
    },
    output: {
        filename: 'main.bundle.js',
        path: filepath.resolve(__dirname, 'public'),
        publicPath: '/'
    }
};