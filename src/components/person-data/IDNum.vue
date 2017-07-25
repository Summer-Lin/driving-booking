<style lang="less" scoped>

</style>
<template>
    <div class="idnum">
        <header-top>
            <span slot="header-title">身份证号</span>
            <span slot="save-data" @click="saveData">保存</span>
        </header-top>
        <common-backround>
            <i slot="icon-left" class="iconfont">&#xe674;</i>
            <input slot="text" type="text" v-model="idnum">
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
                idnum:null
            }
        },
        methods:{
            saveData(){
                this.$store.commit("changeIDNum",this.idnum)
                this.$router.push({name:'persondata'});
            },
            clearMsg(){
                this.idnum = null;
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
            this.idnum = this.personData.idnum
        }
    }
</script>