const path = require('path');
const webpack = require('webpack');

//const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const CleanCSSPlugin    = require("less-plugin-clean-css");
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');



module.exports = function(env, args){

    const IS_PRODUCTION = (env==="prod");

    

    var config = {

        entry: {
            app : './src/main.js',

            vue : [
                'vue',
                'vuex',
                'vue-router',
                'vue-resource',
            ]

//            vendors : [
//                'jquery',
//                'lodash/core'
//            ]
        },

        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: 'dist/',
            filename: 'js/[name].js',
            chunkFilename: 'js/[name].js',
            jsonpFunction : "_mjp_"
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                    // The order of this array matters
                    names: ["vendors", "vue" ],
                    minChunks: 2
            })
        ],


        module: {
            rules: [

                // VUE
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                        }
                        // other vue-loader options go here
                    }
                },


                
                // FileLoader for Fonts
                {
                    test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                    loader: 'file-loader'
                }

            ]
        },

        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                "~" : path.resolve(__dirname, 'src/'),
                "@" : path.resolve(__dirname, 'src/'),
                "package": path.resolve(__dirname, 'src/packages/'),
                "packages": path.resolve(__dirname, 'src/packages/')
            }
      },


        devServer: {
            historyApiFallback: true,
            noInfo: true,
            overlay: {
                warnings: true,
                errors: true
            }

        },


        performance: {
            hints: false
        },


        devtool: '#eval-source-map'
    }


    if(IS_PRODUCTION){

        config.devtool = '#source-map';

        config.plugins = (config.plugins || []).concat([

            new UglifyJSPlugin({
                    uglifyOptions: {
                	sourceMap: false,
                	compress: {
                	    drop_console: true,
                	    warnings: false,
                	    drop_debugger: true
                	}
                    }
            })

//          Not working correctly with ES2015
//            new webpack.optimize.UglifyJsPlugin({
//                sourceMap: false,
//                compress: {
//                    drop_console: true,
//                    warnings: false,
//                    drop_debugger: true
//                }
//            }),


//            new webpack.LoaderOptionsPlugin({
//                minimize: true
//            })
        ]);
    };


    return config;
}