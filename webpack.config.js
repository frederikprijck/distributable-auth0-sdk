/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const envPlugin = require('./plugins/envPlugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        sdk: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    bail: true, // exit if it fk's up
    devServer: {
        open: true,
        host: 'localhost',
        port: 9000,
        hot: true,
        watchFiles: ['src/**/*.ts'],
    },
    devtool: 'source-map',
    plugins: [envPlugin],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
                options: {
                    transpileOnly: true // enables builds to be faster
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

if (isProduction) {
    config.mode = 'production';
} else {
    config.mode = 'development';
    config.plugins.push(new ForkTsCheckerWebpackPlugin()); // performs type checks on bundle
}

module.exports = config;
