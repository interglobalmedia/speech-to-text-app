const webpack = require('webpack');
const merge = require('webpack-merge');

const ManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => {
    return merge([
        {
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            test: / [\\/]node_modules[\\/]/,
                            name: 'vendors',
                            chunks: 'all'
                        },
                        styles: {
                            name: 'main',
                            test: /\.css$/,
                            chunks: 'all',
                            enforce: true
                        }
                    },
                },
                runtimeChunk: 'single',
                minimizer: [
                    new UglifyJSPlugin(),
                    new OptimizeCssAssetsPlugin()
                ],
            },
            plugins: [
                new ManifestPlugin({
                    fileName: ('asset-manifest.json')
                }),
                new webpack.HashedModuleIdsPlugin(),
                new Visualizer({ filename: './statistics.html'})
            ]
        }
    ])
}

module.exports = env => {
    return merge(baseConfig(env), prodConfiguration(env));
}