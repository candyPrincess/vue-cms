<template>
    <div class="goodsInfoContainer">
        <!-- 小球区域,半场动画 -->
        <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter" name="test">
            <div v-show="flag" class="ball" ref="ballPosition"></div>
        </transition>
        


        <!-- 产品详情轮播图 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :list="detailList"></swiper>
				</div>
			</div>
		</div>
        <!-- 购买参数 -->
        <div class="mui-card">
			<div class="mui-card-header">商品名称</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>
                        市场价:
                        <span class="marketOldPrice">${{goodsDetail.market_price}}</span> 
                        销售价:
                        <span class="marketNowPrice">${{goodsDetail.sell_price}}</span>   
                    </p>
                    <!-- 添加数量 -->
                    <p class="detail">
                        <span class="buyQuantity">购买数量:</span>
                        <span class="quantityButton">
                            <input @click="reduceBox" class="reduceBox" type="button" value="-">
                            <input v-model="num" class="number" type="number">
                            <input @click="increaseBox" class="IncreaseBox" type="button" value="+">
                        </span>
                    </p>

                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addShopcar">加入购物车</mt-button>
				</div>
			</div>
		</div>
        <!-- 产品详情参数 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号:{{goodsDetail.goods_no}}</p>
					<p>商品情况:{{goodsDetail.stock_quantity}}</p>
					<p>上架时间:{{goodsDetail.add_time | dataFormat}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button @click="getGoodsDescription(goodsDetail.id)" type="primary" size="large" plain>图文介绍</mt-button>
            </div>
            <div class="mui-card-footer">
                <mt-button @click="getGoodsComment(goodsDetail.id)" type="danger" size="large" plain>商品评论</mt-button>
            </div>
		</div>
    </div>
</template>

<script>
import swiper from "../../components/swiper/index"

export default {
    data(){
        return {
            id:this.$route.params.id,
            detailList:[],
            // 产品参数
            goodsDetail: {},
            flag:false,
            num:1
        }
    },
    created(){
        // 获取轮播图
        this.getDetails(),
        this.getGoodsDetail()
    },
    methods: {
        getDetails(){
            this.$http.get("api/getthumimages/"+this.id).then(result => {
                // console.log(result.body.message)
                if(result.body.status === 0){
                    // 由于轮播图组件中只认识item.img,不认识item.src.
                    result.body.message.forEach(item => {
                        item.img = item.src
                    })
                    this.detailList = result.body.message
                }
            })
        },
        // 获取商品详细信息
        getGoodsDetail(){
            this.$http.get("api/goods/getinfo/"+this.id).then(result => {
                // console.log(result.body.message[0])
                if(result.body.status === 0){
                    this.goodsDetail = result.body.message[0]
                }
            })
        },
        // 图文介绍跳转编程式导航
        getGoodsDescription(id){
            this.$router.push({path:"/home/goodsInfo/goodsDescription/"+id})
        },
        //跳转到评论
        getGoodsComment(id){
            this.$router.push({path:"/home/goodsInfo/goodsComment/"+id})
        },
        //加入购物车,小球跳转
        addShopcar(){
            this.flag= !this.flag
        },
        beforeEnter(el){
            el.style.transform= "translate(0,0)"
        },
        enter(el,done){
            el.offsetWidth
            // 获取小球在页面中的位置
            const ballPosition = this.$refs.ballPosition.getBoundingClientRect()
            //获取徽标在页面中的位置
            const badgePosition = document.getElementById("badge").getBoundingClientRect()
            //小球应该移动的距离
            const xDistance = badgePosition.left - ballPosition.left
            const yDistance = badgePosition.top - ballPosition.top


            el.style.transform = `translate(${xDistance}px,${yDistance}px)`
            el.style.transition = "all .5s cubic-bezier(.11,-0.31,1,.63)"
            done()
        },
        afterEnter(el){
            this.flag = !this.flag
        },
        // 增加数据
        increaseBox(){
            this.num++
            if(this.num>=this.goodsDetail.stock_quantity){
                this.num = this.goodsDetail.stock_quantity
            }
        },
        reduceBox(){
            this.num--
            if(this.num <=1) {
                this.num = 1
            }
        }
    },
    components: {
        swiper
    }
}
</script>


<style lang="less">
.goodsInfoContainer {
    position: relative;
    .ball {
        width: 20px;
        height:20px;
        background: red;
        border-radius: 50%;
        position:absolute;
        z-index:99;
        left:140px;
        top:426px;
    }
    .marketNowPrice {
        margin-left:3px;
        margin:0 3px;
        font-size:16px;
        color:red;
    }
    .marketOldPrice {
        margin:0 3px;
        text-decoration: line-through;
       
    }
    .detail {
        overflow:hidden;
        .buyQuantity {
            float:left;
            margin-right:6px;
            margin-top:5px;
        }
        .quantityButton {
            >input {
                margin:0;
                padding:0;
                text-align: center;
                height:30px;
                float:left;
            }
            .reduceBox {
                background: #eee;
                width:40px;
            }
            .IncreaseBox {
                background: #eee;
                width:40px;
            }
            .number {
                width:34px;           
            }
        }
    }
    
}
</style>
