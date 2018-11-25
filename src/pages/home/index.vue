<template>
    <div class="homeContaier">
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in list" :key="index">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe> -->
        <swiper :list="list"></swiper>

        <!-- 引入九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
		            <img src="../../assets/menu1.png" alt="">
		            <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photosList">
		            <img src="../../assets/menu2.png" alt="">
		            <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodsList">
		            <img src="../../assets/menu3.png" alt="">
		            <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../assets/menu4.png" alt="">
		            <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../assets/menu5.png" alt="">
		            <div class="mui-media-body">视频专区</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="../../assets/menu6.png" alt="">
		            <div class="mui-media-body">联系我们</div></a>
            </li>
		</ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import swiper from "../../components/swiper/index"

export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getBannerList()
    },
    methods: {
        //获取轮播图数据
        getBannerList(){
            this.$http.get("api/getlunbo").then(result => {
                // console.log(result.body.message)
                if(result.body.status == 0) {
                    this.list = result.body.message
                }else {
                    Toast("图片加载失败")
                }
            })
        }
    },
    // 注册轮播图组件
    components: {
        swiper
    }

}
</script>

<style lang="less">
.homeContaier {
    .mint-swipe-items-wrap {
        height:200px
    }
    .mui-grid-view {
        width:100%;
        background: #fff;
        &.mui-grid-view {
            border:none
        }
        .mui-table-view-cell{
            background-color: #fff;
            border:none;
            img {
                width:60px;
                height:60px;
            }
        }
        
    }
}
</style>


