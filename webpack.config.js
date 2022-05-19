const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    
    /* entry:[ './js/prueba.js', './js/script.js'], */
    entry:{
        js: [ './js/prueba.js', './js/script.js'],
        ts: ['./ts/prueba_ts.js', './ts/script_ts.js']

    },
    output: {
        /* filename: 'index.js', */
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    module:{
        rules:[
            //Test archivos js con babel
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
                
            },
            //Test archivos html con html-loader y HTMLWebpackPlugin
            {
               test: /\.html$/i,
               use:[
                   { loader: 'html-loader',
                     options: {
                         minimize: true
                     }
                    }
                ]
            },
            //Test Archivos css con css-loader y MiniCssExtractPlugin
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            /* {
                test: /\.(jpe?g|png|svg|webp)$/i,
                use: ['file-loader?name=[name].[ext]']
            }, */
            {
                test: /logo\.svg$/i,
                use: ['file-loader?name=[name].[ext]']
            }

        ]
    },

    
    plugins:[
        //Html
        new HtmlWebpackPlugin({
            template:'./index.html',
            title:'App Weather with Webpack',
            filename: './index.html',
            //Agregar chunks y hash para más de un punto de entrada
            chunks:'js',
            hash:true
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            title:'App Weather with Webpack',
            filename: './index_ts.html',
            //Agregar chunks y hash para más de un punto de entrada
            chunks:'ts',
            hash:true
        }),
        new MiniCssExtractPlugin()
    ]
    

}