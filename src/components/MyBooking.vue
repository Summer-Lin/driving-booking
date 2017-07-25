<style lang="less" scoped>
    .my-booking{
        /*预约考试*/
        >.exambooking, .trainbooking {
            margin-top:20px;
            >div{

                >span{
                    float: left;
                    font-size: 16px;
                    color: #333333;
                    font-weight:600;
                    margin-left:15px;
                }
                .queue {
                    display: block;
                    float: left;
                    width: 57px;
                    height: 20px;
                    text-align: center;
                    line-height: 20px;
                    background: #4CD964;
                    border-radius: 2px;
                    font-size: 12px;
                    font-weight:100;
                    color: #FFFFFF;
                }
            }
            >ul{
                border-top:1px solid transparent;
                margin-top:10px;
                background-color: #fff;
                >li {
                    height:50px;
                    padding:15px 0px;
                    margin: 0 15px;
                    >span{
                        font-size: 16px;
                        color: #666666;
                        &:nth-child(2){
                            margin-left:20px;
                            color: #000000;
                            font-weight:500;
                        }
                    }
                    &:nth-child(2){
                        border-top:1px solid #E1E1E1;
                        border-bottom:1px solid #E1E1E1;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="my-booking">
        <header-top>
            <span slot="header-title">我的预约</span>
        </header-top>
        <div class="exambooking">
            <div class="clearfix">
                <span>考试预约</span>
                <span class="queue">排队中</span>
            </div>
            <ul>
                <li>
                    <span>考试科目</span>
                    <span>{{examSubject}}</span>
                </li>
                <li>
                    <span>考试时间</span>
                    <span>{{examTime}}</span>
                </li>
                <li>
                    <span>考试场地</span>
                    <span>{{examPlace}}</span>
                </li>
            </ul>
        </div>

        <div class="trainbooking">
            <div class="clearfix">
                <span>训练预约</span>
                <span class="queue">排队中</span>
            </div>

            <ul>
                <li>
                    <span>训练科目</span>
                    <span>{{tranSubject}}</span>
                </li>
                <li>
                    <span>训练时间</span>
                    <span>{{trainTime}}</span>
                </li>
                <li>
                    <span>训练地点</span>
                    <span>{{trainPlace}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import HeaderTop from './Header.vue'
    export default{
        data(){
            return {
                examSubject:'科目二',
                examTime:'2017年07月06日 14:01',
                examPlace:'考试场地一',

                tranSubject:'科目二',
                trainTime:'2017年07月06日 14:01',
                trainPlace:'训练场地一'
            }
        },
        components:{
            HeaderTop
        }
    }
</script>