const path = require('path')
// 自动绑定index.html跟入口js（main.js）
const htmlPlugin = require('html-webpack-plugin')


const obj = {
  // 入口函数
  entry: {
    app: './src/main.js'
  },
  // 绑定后输出的文件
  output: {
    // 输出的路径
    path: path.join(__dirname, './dist'),

    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test:/\.vue$/,
      loader:'vue-loader',
    },
    {
      test:/\.css$/,
      loader:'style-loader!css-loader'
    },
    {
      test:/\.less$/,
      loader: 'style-loader!css-loader!less-loader',
    },
    {

      test:/\.(jpg|jpeg|bmp|gif|png|ico)$/,
      loader: 'file-loader',
      query:{
        name: './img/[name].[ext]?[hash]'
      }
    },
    // {
    //   test:/\.js$/,
    //   loader:'babel-loader',
    //   query:{
    //     // babel-preset-es2015
    //     presets:['es2015']
    //   }
    // },
      {
        test:/\.(woff|ttf|woff2|svg|eot)$/,
        loader: 'file-loader',
        query:{
          name:'./fonts/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
      // 绑定index.html，将输入的bundle.js放到index.html里面
    new htmlPlugin({
      template: './src/index.html'
    })
  ]
}

module.exports = obj
