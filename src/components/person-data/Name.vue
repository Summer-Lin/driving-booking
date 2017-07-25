<style lang="less" scoped="">
    .name{

    }
</style>
<template>
    <div class="name">
        <header-top>
            <span slot="header-title">姓名</span>
            <span slot="save-data" @click="saveData">保存</span>
        </header-top>

        <common-backround>
            <i slot="icon-left" class="iconfont">&#xe603;</i>
            <input slot="text" type="text" v-model="name">
            <i slot="icon-right" class="iconfont" @click="clearMsg">&#xe606;</i>
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
                name:""
            }
        },
        methods:{
//            X图标 清除内容
            clearMsg(){
                this.name = "";
            },
//            保存数据
            saveData(){
//                保存姓名，触发mutations
                this.$store.commit('changeName',this.name)
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
//            这样做，v-model才不会直接更改store.state里面的值，我们要通过mutations或Actions来更改
            this.name = this.personData.name
        }
    }
</script>