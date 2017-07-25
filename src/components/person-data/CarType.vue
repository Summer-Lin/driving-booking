<style lang="less" scoped>

</style>
<template>
    <div class="car-type">
        <header-top>
            <span slot="header-title">车架类型</span>
            <span slot="save-data" @click="saveData">保存</span>
        </header-top>

        <div @click="chooseSchool">
            <common-backround >
                <i slot="icon-left" class="iconfont">&#xe604;</i>
                <input slot="text" type="text" v-model="carType" readonly>
                <i slot="icon-right" class="iconfont" >&#xe621;</i>
            </common-backround>
        </div>


        <modal-ele :items="type" :title="carTypeTitle" :style="{display:CarShow}" @CloseModal="SchoolCloseModal" @EnsureModal="SchoolEnsureModal"></modal-ele>
    </div>
</template>
<script>
    import HeaderTop from '../Header.vue'
    import CommonBackround from './common.vue'
    import Modal from '../Modal.vue';
    import { mapGetters } from 'vuex'
    export default {
        data(){
            return {
                carType:"",

                CarShow:'none',
                type:[
                    { item:"A1"},
                    { item:"A2"},
                    { item:"B1"},
                    { item:"B2"},
                    { item:"C1"},
                    { item:"C2"}
                ],
                carTypeTitle:"车架类型",
            }
        },
        methods:{
            saveData(){
                this.$store.commit('changeType',this.carType)
                this.$router.push({name:'persondata'})
            },
            chooseSchool(){
                console.log(this.CarShow)
                this.CarShow = "block";
                console.log(this.CarShow)
            },
            SchoolCloseModal(value){
                this.CarShow = value;
            },
            SchoolEnsureModal(value,index){
                this.CarShow = value;
                this.carType = this.type[index].item ;
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
            this.carType = this.personData.type
        }
    }
</script>