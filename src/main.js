import Vue from 'vue'
// MintUI组件
import MintUI from 'mint-ui'
// MintUI 样式
import 'mint-ui/lib/style.css'
// 引入公共样式
import './css/common.css'

import store from './store/index'
// VUE入口
import App from './App.vue'
// 主页
import Home from './components/Home.vue'
// 考试预约选项
import ExamBooking from './components/ExamBooking.vue'
// 训练预约选项
import TrainBooking from './components/trainBooking.vue'
// 本人预约
import MyBooking from './components/MyBooking.vue'
// 待办事项
import MyAgenda from './components/MyAgenda.vue'
// 本人资料
import PersonData from './components/pesonalData.vue'
// 姓名修改项
import Name from './components/person-data/Name.vue'
// 性别修改项
import Gender from './components/person-data/Gender.vue'
// 身份证号修改项
import IDNum from './components/person-data/IDNum.vue'
// 驾校修改项
import DrivingSchool from './components/person-data/DrivingSchool.vue'
// 驾照类型修改项
import CarType from './components/person-data/CarType.vue'



// vue路由
import VueRouter from 'vue-router'
// VueResource，类似ajax请求，但本项目只用了一个地方
import VueResource from 'vue-resource'



Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(VueResource);



const router = new VueRouter({
    routes:[
        {name:'app',path:'/',component:Home},
        {name:'exambooking',path:'/exambooking',component:ExamBooking},
        {name:'trainBooking',path:'/trainbooking',component:TrainBooking},
        {name:'mybooking',path:'/mybooking',component:MyBooking},
        {name:'myagenda',path:'/myagenda',component:MyAgenda},
        {name:'persondata',path:'/persondata',component:PersonData},
        {name:'name',path:'/name',component:Name},
        {name:'gender',path:'/gender',component:Gender},
        {name:'idnum',path:'/idnum',component:IDNum},
        {name:'drivingschool',path:'/drivingschool',component:DrivingSchool},
        {name:'cartype',path:'/cartype',component:CarType},

    ]
});

// #app是 index.html里面的id
new Vue({
	el:'#app',
	router,
    store,
	render:h=>h(App)
})