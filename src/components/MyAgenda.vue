<style lang="less" scoped>
    .my-agenda{

        >.content{
            >ul{
                margin-top: 15px;
                >li{
                    width: 355px;
                    height: 80px;
                    background-color: #fff;
                    margin:0 auto;
                    padding:10px 15px 0 10px;
                    margin-bottom:10px;
                    &:active{
                        background-color: #999999;
                    }
                    >span{
                        font-size: 14px;
                        color: #999999;
                        &:nth-child(3){
                            float: right;
                            margin-right:10px;
                        }
                    }
                    >.pointRed{
                        display: block;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background: #FF4F4F;
                        float: right;
                        margin-top:5px;
                    }

                    >p{
                        margin-top:10px;
                        font-size: 14px;
                        color: #333333;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="my-agenda">
        <header-top>
            <span slot="header-title">我的待办</span>
        </header-top>
        <div class="content">
            <ul>
                <li v-for="(item,index) in items" @click="cleanPoint(index)">
                    <span>{{item.tips}}</span>
                    <i :class="{pointRed:item.ponit}"></i>
                    <span>{{item.createTime}}</span>
                    <p>{{item.content}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import HeaderTop from './Header.vue'
    export default {
        data(){
            return{
                items:[
                    {tips:'预约训练提醒',ponit:true,content:'您预约了[2017-05-24的练车服务]，请提前到场！',createTime:1496466915000},
                    {tips:'预约考试提醒',ponit:true,content:'您已过号，请重新登记排号，谢谢配合！',createTime:1496294115000},
                    {tips:'排队提醒',ponit:true,content:'您已过号，请重新登记排号，谢谢配合！',createTime:1494393315000},
                    {tips:'紧急提醒',ponit:true,content:'您已过号，请重新登记排号，谢谢配合！',createTime:1493788515000},
                ]
            }
        },
        created(){
            this.items.forEach((item) =>{
                item.createTime =  new Date(item.createTime).getFullYear() + "-" + (new Date(item.createTime).getMonth()+ 1) + "-" + new Date(item.createTime).getDate() + " " + new Date(item.createTime).getHours() + ":" + new Date(item.createTime).getMinutes()

            })

        }
        ,
        methods:{
            changeTime(){

            },
            cleanPoint(index){
//                点击红点消失
                this.items[index].ponit = false;
            }
        },
        components:{
            HeaderTop
        }
    }
</script>