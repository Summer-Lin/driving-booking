<style lang="less" scoped>
    .driving-school{

    }
</style>
<template>
    <div class="driving-school">
        <header-top>
            <span slot="header-title">驾校</span>
            <span slot="save-data" @click="saveData">保存</span>
        </header-top>
        <div @click="chooseSchool()">
            <common-backround >
                <i slot="icon-left" class="iconfont">&#xe64f;</i>
                <input slot="text" type="text" v-model="drivingSchool" readonly>
                <i slot="icon-right" class="iconfont" >&#xe621;</i>
            </common-backround>
        </div>



        <modal-ele :items="school" :title="schoolTitle" :style="{display:SchoolShow}" @CloseModal="SchoolCloseModal" @EnsureModal="SchoolEnsureModal"></modal-ele>

    </div>
</template>
<script>
    import HeaderTop from '../Header.vue'
    import CommonBackround from './common.vue'
    import Modal from '../Modal.vue';
    import { mapGetters} from 'vuex'
    export default {
        data(){
            return {
                drivingSchool:"",

                SchoolShow:'none',
                examitem:'选择科目',
                school:[
                    { item:"广东驾校"},
                    { item:"北京驾校"},
                    { item:"上海驾校"},
                    { item:"浙江驾校"},
                    { item:"甘肃驾校"},
                ],
                schoolTitle:"驾校",
            }
        },
        methods:{
            saveData(){
                this.$store.commit('changeSchool',this.drivingSchool)
                this.$router.push({name:'persondata'})
            },
            chooseSchool(){
                this.SchoolShow = "block";
            },
            SchoolCloseModal(value){
                this.SchoolShow = value;
            },
            SchoolEnsureModal(value,index){
                this.SchoolShow = value;
                this.drivingSchool = this.school[index].item ;
            }
        },
        components:{
            HeaderTop,
            CommonBackround,
            'modal-ele':Modal,
        },
        computed:{
            ...mapGetters([
                'personData'
            ])
        },
        created(){
            this.drivingSchool = this.personData.school
        }
    }
</script>