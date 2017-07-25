<style lang="less" scoped>
    /*背景图顶部*/
    .top{
        width:100%;
        height:200px;
        >img{
            width: 100%;
            height:200px;
        }
    }
    /*预约三个选项*/
    .guide{
        width: 315px;
        height:125px;
        background: #FFFFFF;
        border: 1px solid #ECF0F6;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        border-radius: 4px;
        margin:-63px auto;
        >ul{
            height:100%;
            display: flex;
            justify-content:center;
            align-items:center;
            >li{
                /*flex-direction: row;*/
                -moz-box-flex: 1;
                width: 55px;
                height: 100%;
                flex:1;
                background-color: #fff;
                text-align: center;
                display: flex;
                justify-content:center;
                align-items:center;
                >a {
                    display: block;
                    > img {
                         width: 48px;
                         height: 48px;
                   }
                    >p {
                        margin-top:10px;
                        font-size: 16px;
                        color: #333333;
                    }
                }
            }
        }

    }
    /*三个item选项*/
    .items {
        margin-top:90px;
        >ul {
            >li{
                >a{
                    padding-left:35px;
                    background-position: inherit;
                   .icons{
                       position: absolute;
                       left:10px;
                   }
                }
            }
        }
    }

</style>
<template>
<div>
    <div class="top">
        <img src="../images/index.png" alt="">
    </div>
    <div class="guide">
        <ul>
            <li>
                <router-link :to="{ name: 'exambooking' }">
                    <img src="../images/booking-exam.png" alt="">
                    <p>考试预约选项</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'trainBooking' }">
                    <img src="../images/booking-train.png" alt="">
                    <p>训练预约选项</p>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="items">
        <ul>
            <li>
                <!--mt-cell说mint-ui组件的-->
                <!--：to 是路由绑定，跳转路由-->
                <mt-cell title="本人预约" :to="{name:'mybooking'}" is-link>
                    <!--使用的是阿里妈妈字体图标-->
                    <i class="iconfont icons">&#xe605;</i>
                </mt-cell>
            </li>
            <li>
                <mt-cell title="待办事项" is-link :to="{name:'myagenda'}">
                    <i class="iconfont icons">&#xe609;</i>
                    <mt-badge type="error">10</mt-badge>
                </mt-cell>
            </li>
            <li>
                <mt-cell title="本人资料" is-link :to="{name:'persondata'}">
                    <i class="iconfont icons">&#xe603;</i>
                </mt-cell>
            </li>
        </ul>

    </div>
</div>
</template>

<script>
export default{
  
}
</script>

