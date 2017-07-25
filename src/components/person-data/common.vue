<style lang="less" scoped>
    .common{
        margin-top:15px;
        height:50px;
        background: #FFFFFF;
        padding:13px 20px 10px ;
        >input{
            width:70%;
            border-width:0px;
            padding-left: 20px;
            font-size: 16px;
            vertical-align: top;
        }
        >i{
            &:nth-child(3){
                float: right;
            }
        }
    }
</style>
<template>
    <div class="common">
        <slot name="icon-left"></slot>

        <slot name="text"></slot>
        <slot name="gender"></slot>

        <slot name="icon-right"></slot>


        <!--<i class="iconfont">&#xe603;</i>-->
        <!--<input type="text">-->
        <!--<i class="iconfont">&#xe606;</i>-->
    </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>