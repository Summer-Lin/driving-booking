<style lang="less" scoped>
    header {
        height: 50px;
        /*font-size: 16px;*/
        background: #4183FF;
        width:100%;
        margin:0 auto;
        position: relative;
        >a{
            display: block;
            width: 50px;
            height: 50px;
            position: absolute;
            padding:10px 0 0 10px;
            >.demoSpan1 {
                height: 30px;
                display: block;
                position: relative;
                overflow: hidden;
                width: 16px;
                &:before{
                    content: '';
                    height: 20px;
                    width: 20px;
                    display: block;
                    border: 3px solid #fff;
                    border-right-width: 0;
                    border-bottom-width: 0;
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    position: absolute;
                    top: 7px;
                    left: 7px;
                }
            }
        }
        >span{
            &:nth-child(2){
                display: block;
                /*width: 100%;*/
                margin:0 50px;
                height:50px;
                text-align: center;
                line-height:50px;
                color:#fff;
            }
            &:nth-child(3){
                position: absolute;
                right:20px;
                top:15px;
                font-size: 14px;
                color: #FFFFFF;
            }
        }


    }
</style>
<template>
    <header>
        <!--考试预约-->
        <slot name="exambooking"></slot>
        <!--训练预约-->
        <slot name="trainbooking"></slot>
        <!--我的预约-->
        <slot name="my-booking"></slot>
        <!--我的待办-->
        <slot name="my-agenda"></slot>
        <!--共同有的箭头，就写出来-->
        <router-link :to="{name:'app'}">
            <span class="demoSpan1"></span>
        </router-link>
        <!--*******************************************-->
        <!--中间标题-->
        <slot name="header-title"></slot>
        <!--保存-->
        <slot name="save-data"></slot>




    </header>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            goback(){
                this.$router.go(-1)
            }
        }
    }
</script>