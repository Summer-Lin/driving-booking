import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        // 考试预约选项
        examBooking:{
            examitem:"选择科目",
            examTime:"选择时间",
            placeExamItem:'选择场次',
            tipsshow:false
        },
        // 个人资料
        personData:{
            name:'路飞',
            gender:0,
            idnum:441010199010103214,
            school:'广东驾校',
            type:'C1',
            phone:'13417009999',
        }
    },
    getters:{
        examBooking:state => state.examBooking,
        personData:state =>state.personData,
    },
    mutations:{
        saveExamItem(state,value){
            state.examBooking.examitem = value.examitem
            state.examBooking.examTime = value.examTime
            state.examBooking.placeExamItem = value.placeExamItem
            state.examBooking.tipsshow = value.tipsshow
        },



        // 更改姓名
        changeName(state,value){
            state.personData.name = value
        },
        // 更改性别
        changeGender(state,value){
            state.personData.gender = value
        },
        // 更换身份证号
        changeIDNum(state,value){
            state.personData.idnum = value
        },
        // 更换学校
        changeSchool(state,value){
            state.personData.school = value
        },
        // 更换类型
        changeType(state,value){
            state.personData.type = value
        }
    },
    actions:{}
})

export default store