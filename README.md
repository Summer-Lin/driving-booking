
## vue入门项目
    该项目为vue入门级项目，手工搭建webpack.config.js，适合初学者了解vue
    
## 项目动态图
    驾校考试预约项目
    考试预约 和 训练预约，功能一致，所以只编码考试预约就行
    个人资料部分也可以编码一下

![image](https://github.com/Summer-Lin/driving-booking/blob/master/images/driving-school.gif)


## 项目技术
    vue + vuex + VueResource +  VueRouter +  mock.js +  mint-ui
    
    VueRouter  //没有搭服务器数据库，也只是用mock.js搭个假数据，也只请求一个地方
    
## vue入门项目
    这个项目属于入门级项目，webpack.config.js是自己写的，没有用vue-cli
    

    步骤：
        1、先建好文件夹结构，也就是 src文件夹，App.vue，webpack.config.js,.babelrc
        2、先编码webpack.config.js  //熟悉模块直接的用法
        3、下载webpack.config.js对应的模块，或者直接复制粘贴package.json文件到你的项目，然后直接npm install也可以
        4、编码index.html
        5、编码App.vue
        6、编码Home.vue
        7、编码main.js      //基本跟着路由main.js里面的router建组件就可以了。
        


## 项目前提安装模块
首先确保安装了webpack   和  webpack-dev-server，没有的话可以全局安装一个

```
在自己电脑可以选择全局安装
npm install -g webpack                      //全局安装
npm install --save-dev webpack              //安装到你的项目目录
npm install webpack-dev-server --save-dev   //本项目安装
npm install webpack-dev-server -g           //全局安装
```


## 项目启动
```
npm install     //根据package.json下载相应的模块
webpack-dev-server --hot --open    //打开服务器;或者webpack直接打包，在dist文件夹里面


```
## 目录

- dist           // 打包后上线的文件夹，也就是在cmd里面输入 webpack
- node_modules   // npm install 下载模块的文件夹
- src            // 源码
    -  components   //组件文件夹
        - person-data   // 个人资料部分组件
            - CarType.vue
            - common.vue
            - DrivingSchool.vue
            - Gender.vue
            - IDNum.vue
            - Name.vue
        - ExamBooking.vue   // 考试预约组件
        - Header.vue        // 共同头部组件
        - Home.vue          // 首页组件
        - Modal.vue         // 弹出框组件
        - MyAgenda.vue      // 待办事项组件
        - MyBooking.vue     // 本人预约组件 
        - pesonalData.vue   // 本人资料组件
        - trainBooking.vue  // 训练预约组件
    -  css      // CSS公共样式
    -  fonts    // 字体图标
    -  images   // 图片存放位置
    -  js       // JS，在这项目没用到
    -  model    
        -  mock.js      //假数据，模拟请求数据，也只用在trainBooking.vue一个地方
    -  store
        -  index.js     VUEX存放的地方，也是数据管理集中的地方
    -  App.vue          // 入口组件
    -  index.html       
    -  main.js          //  入口js
- .babelrc              //  配置VUEX
- package.json          //  模块配置
- webpack.config.js     //  webpack配置


