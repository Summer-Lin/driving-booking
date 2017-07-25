<style lang="less" scoped>
    .selfmodal{
        position: fixed;
        width: 100%;
        height:92%;
        z-index: 100;
        top:50px;
        >.mask{
            width: 100%;
            height:100%;
            background-color: rgba(0,0,0,.4);
        }
        >.modal{
            width: 315px;
            height: 304px;
            background-color: #fff;
            position: absolute;
            top:43%;
            left:50%;
            transform: translate(-50%,-50%);
            border-radius: 5px;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
            >h2 {
                height:52px;
                font-size: 16px;
                color: #333333;
                text-align: center;
                line-height:52px;
            }
            >ul{
                height:170px;
                overflow: auto;
                >li{
                    height: 50px;
                    border-top:1px solid #E1E1E1;
                    &.active{
                        background-color: #c0c0c0;
                    }
                    &.offState {
                        background-color: #f2f2f2;
                    }

                    >.circle{
                        display: block;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        float: left;
                        border:4px solid #E1E1E1;
                        margin:17px 0 0 12px;
                    }
                    >.circleblue{
                        border:4px solid #4e73ff;
                    }
                    >p{
                        padding-left: 45px;
                        line-height: 50px;
                    }
                }
            }
            >.button {
                margin-top:40px;
                text-align: right;
                >a{
                    font-size:16px;
                    color:#4183FF;
                    margin-right:20px;
                    &:nth-child(1){

                    }
                }

            }
        }

    }
</style>
<template>
    <div class="selfmodal">
        <!--遮罩层，灰色-->
        <div class="mask"></div>
        <div class="modal">
            <h2>{{title}}</h2>
            <ul>
                <!--item.disabled为true，则不可选择-->
                <li  v-if="item.disabled"   v-for="(item, index) in items" :class="{offState:true}">
                    <i class="circle" :class="{circleblue:selectItem == index}"></i>
                    <p>{{item.item}}</p>
                </li>

                <li  v-else   @click="choose(index)" :class="{active:selectItem == index}">
                    <i class="circle" :class="{circleblue:selectItem == index}"></i>
                    <p>{{item.item}}</p>
                </li>

            </ul>
            <div class="button">
                <a href="#" @click.prevent="close">取消</a>
                <a href="#"  @click.prevent="ensure">确定</a>
            </div>
        </div>

    </div>

</template>
<script>
    export default {
        data(){
            return {
                index:-1,
                selectItem:null,
                scrollTop: 0
            }
        },
        props:[
            'title','items'
        ],
        methods:{
            close(){
                this.$emit("CloseModal","none");
//                document.getElementsByTagName('ul')[0].scrollTop = 0;
//                document.getElementsByTagName('ul')[2].scrollTop = 0;
            },
            ensure(){
                this.$emit("EnsureModal","none",this.index);
//                document.getElementsByTagName('ul')[0].scrollTop = 0;
//                document.getElementsByTagName('ul')[2].scrollTop = 0;
            },
            choose(index){
                this.selectItem = this.index = index;
            }
        },
       created(){

       },
       mounted(){

       }







//        props: {
//            title: {
//                type: String,
//                default: ''
//            },
//            items: {
//                type: String,
//                default: ''
//            }
//        },
//        限制传入类型
//        model: {
//            prop: 'checked',
//            event: 'change'
//        },

    }
</script>
