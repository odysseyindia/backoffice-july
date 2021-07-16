const config = require("./src/config");

var webpackConfig = {
    entry: {main: ["./src/client/main.js"]},
    output: {
        path: config.distFolder,
        filename: "main.bundle.js",
        publicPath: "/assets/"
    },
    mode: config.isProd ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            }
        ]
    }
};

module.exports = webpackConfig;