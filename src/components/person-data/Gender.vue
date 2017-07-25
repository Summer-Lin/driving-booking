<style lang="less" scoped>
    .gender{
        >.common{
            >.choose-gender{
                display: inline-block;
                width: 60%;
                margin-left:40px;
                >div{
                    display: inline-block;
                    vertical-align: middle;
                    height: 35px;

                    >i{
                        display: block;
                        float: left;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        border:4px solid #E1E1E1;
                        margin-top:2px;
                        &.active{
                            border:4px solid #4b9cff;
                        }
                    }
                    >span{
                        float: left;
                        margin:0 20px 0 10px;

                    }
                }
                >.man{

                }
                >.woman{

                }
            }
        }
    }
</style>
<template>
    <div class="gender">
        <header-top>
            <span slot="header-title">性别</span>
            <span slot="save-data" @click="saveData">保存</span>
        </header-top>
        <common-backround>
            <i class="iconfont" slot="icon-left">&#xe602;</i>
            <div slot="gender"　class="choose-gender">
                <div class="man" @click="chooseGender(0)">
                    <i :class="{active:0 == flag}"></i>
                    <span>男性</span>
                </div>
                <div class="woman" @click="chooseGender(1)">
                    <i :class="{active:1 == flag}"></i>
                    <span>女性</span>
                </div>
            </div>

        </common-backround>

    </div>
</template>
<script>
    import HeaderTop from '../Header.vue'
    import CommonBackround from './common.vue'
    import { mapGetters } from 'vuex'
    export default {
        data(){
            return{
                flag:null
            }
        },
        methods:{
            chooseGender(index){
                this.flag = index;
                console.log(index);
            },
            saveData(){
                this.$store.commit('changeGender',this.flag)
                this.$router.push({name:'persondata'});
            }
        },
        components:{
            HeaderTop,
            CommonBackround
        },
        computed:{
            ...mapGetters([
                'personData'
            ])
        },
        created(){
            this.flag = this.personData.gender
        }
    }
</script>