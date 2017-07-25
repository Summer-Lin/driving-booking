<style lang="less" scoped>
    .exam-booking{
        > .mint-header{
            height: 50px;
            font-size: 16px;
            background: #4183FF;
             .mint-header-button{
                 >a{
                     >button{
                         font-size:15px;
                     }
                     .mint-button-icon{
                         margin-top:10px !important;

                     }
                 }
            }
        }
       .picker-selected{
                font-size:14px !important;
            }
        >ul{
            margin-top: 15px;
            >li{
                input{
                    border:0;
                    font-size: 16px;
                    /*margin-left:-50px;*/
                    text-align: center;
                    width:190px;
                }
                >  a{
                    padding-left:35px;
                    background-position: inherit;
                    margin: 0 10px;
                    .icons{
                        position: absolute;
                        left:10px;
                    }
                }
            }
        }
        >span{
            display: block;
            color: #d42e0f;
            text-align: center;
            visibility:hidden;
            &.visible {
                visibility:visible;
            }
        }
        >.mint-button--normal {
            width: 315px;
            height:44px;
            display: block;
            background: #4183FF;
            border-radius: 4px;
            margin:40px auto 0;
            font-size:16px;
            color: #ececec;
            font-size:16px;
            &.buttonColor{
                background-color: #c0c0c0;
            }
        }
        >p {
            text-align: center;
            color:#333;
            margin-top:15px;
            visibility: hidden;
            &.tipsshow {
                visibility: visible;
            }
        }
    }
</style>
<template>
  <div class="exam-booking">
        <!--Header.vue，有共同的头部样式，共用-->
        <header-top>
            <!--slot分发作用，在头部中间位置显示的内容-->
            <span slot="header-title">考试预约选项</span>
        </header-top>
        <!--Modal.vue，考试科目点击弹出窗口-->
      <modal-ele :items="test" :title="title" :style="{display:isShow}" @CloseModal="closeModal" @EnsureModal="ensureModal"></modal-ele>
            <ul>
                <li @click="closeModal()">
                    <mt-cell title="考试科目" is-link >
                        <input type="text" :value="examitem">
                        <i class="iconfont icons">&#xe62e;</i>
                    </mt-cell>
                </li>
                <li @click="openPicker">
                    <mt-cell title="考试时间" is-link>
                        <input type="text" :value="examTime">
                        <i class="iconfont icons">&#xe603;</i>
                    </mt-cell>
                </li>
                <li @click="showModal()">
                    <mt-cell title="考试场次" is-link>
                        <input type="text" :value="placeExamItem">
                        <i class="iconfont icons">&#xe689;</i>
                    </mt-cell>
                </li>
            </ul>
            <span :class="{visible:visible}">{{errorMsg}}</span>
             <mt-button  :class="{buttonColor:tipsshow}" type="default" @click="saveData()">保存</mt-button>
            <p :class="{tipsshow:tipsshow}">排队结束后才可以进行新的预约</p>
      <!--Mint-UI日期插件-->
      <mt-datetime-picker
              ref="picker"
              type="datetime"
              :startDate = "startDate"
              :endDate = "endDate"
              @confirm="dateTime"  >
      </mt-datetime-picker>
      <!--Modal.vue，考试场次点击弹出窗口-->
      <modal-ele :items="place" :title="placeTitle" :style="{display:placeShow}" @CloseModal="placeCloseModal" @EnsureModal="placeEnsureModal"></modal-ele>


</div>

</template>

<script>
//    头部
    import HeaderTop from './Header.vue'
//     弹窗
    import Modal from './Modal.vue';
    import { mapGetters } from 'vuex'
    export default {
        data(){
            return {
//                科目弹窗赋值
                isShow:"none",
//                examitem:'选择科目',
                examitem:'',
                test:[
                    { item:"科目一"},
                    { item:"科目二"},
                    { item:"科目三"},
                    { item:"科目四"},
                    { item:"科目五"},
                ],
                title:"考试科目",

//                考试时间
//                examTime:'选择时间',
                examTime:'',
                startDate:new Date(),
                endDate:new Date(new Date().getTime()+604800000),

//                考试场次弹窗赋值
                placeShow:"none",
//                placeExamItem:'选择场次',
                placeExamItem:'',
                place:[
                    { item:"场地一"},
                    { item:"场地二"},
                    { item:"场地三"},
                    { item:"场地四(不可预约)",
                      disabled:true
                    },
                    { item:"场地五"},
                ],
                placeTitle:"考试场次",

//                错误信息提示显示隐藏
                visible:false,
//                错误信息提示内容
                errorMsg:'',
//                提示排队结束后才可以进行新的预约
                tipsshow:false

            }
        },
        methods:{
//            考试预约
            closeModal(value){
                // 如果预约成功，不弹窗口
                if(this.tipsshow){
                    return false;
                }
                this.isShow = value;
            },
            ensureModal(value,index){
                this.isShow = value;
                this.examitem = this.test[index].item;
            },

//            考试时间
            openPicker() {
                // 如果预约成功，不弹窗口
                if(this.tipsshow){
                    return false;
                }

                this.$refs.picker.open();
            },
            dateTime(value){

                this.examTime = new Date(value).getFullYear() + "年" + (new Date(value).getMonth()+ 1) + "月" + new Date(value).getDate() + "日" + new Date(value).getHours() + "时" + new Date(value).getMinutes() + "分"
            },
//            考试场次
            showModal(value){
                // 如果预约成功，不弹窗口
                if(this.tipsshow){
                    return false;
                }
//                先选择考试时间，才能选择考试场次
                if(this.examTime == "选择时间"){
                    this.visible = true;
                    this.errorMsg = '请选择时间';
                    return false;
                }else{
                    this.visible = false;
                    this.errorMsg = '';
                }

                this.placeShow = "block";
            },
            placeCloseModal(value){
                this.placeShow = value;
            },
            placeEnsureModal(value,index){
                this.placeShow = value;
                console.log(index)
                console.log(value)
                this.placeExamItem = this.place[index].item;
            },
//            保存按钮
            saveData(){
//                如果预约成功，就不能继续再预约
                if(this.tipsshow){
                    return false;
                }
                if(this.examitem == "选择科目"){
                    this.visible = true;
                    this.errorMsg = '请选择科目';
                    return false;
                };
                if(this.examTime == "选择时间"){
                    this.visible = true;
                    this.errorMsg = '请选择时间';
                    return false;
                };
                if(this.placeExamItem == "选择场次"){
                    this.visible = true;
                    this.errorMsg = '请选择场次';
                    return false;
                };
                //                显示排队结束后才可以进行新的预约

                this.$router.push({name:"app"});

                this.tipsshow = true
                this.$store.commit('saveExamItem',{
                    examitem:this.examitem,
                    examTime:this.examTime,
                    placeExamItem:this.placeExamItem,
                    tipsshow:this.tipsshow
                })
            }
        },
//        引入弹窗，头部
        components:{
            'modal-ele':Modal,
            HeaderTop
        },
        computed:{
            ...mapGetters([
                'examBooking'
            ])
        },
        created(){
            this.examitem = this.examBooking.examitem
            this.examTime = this.examBooking.examTime
            this.placeExamItem = this.examBooking.placeExamItem
            this.tipsshow = this.examBooking.tipsshow
        }
    }
</script>