<template>
    <div class="goodsListContainer">
        <div class="goodsListDetail" v-for="item in goodsList" :key="item.id" @click="RouterPush(item.id)">
            <!-- <img :src="item.img_url" alt=""> -->
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2255384485,690736213&fm=26&gp=0.jpg" alt="">
            <h1 class="goodsTitle">{{item.title}}</h1>
            <div class="goodsPriceDetail">
                <p>
                    <span class="nowPrice">${{item.sell_price}}</span>
                    <span class="oldPrice">${{item.market_price}}</span>
                </p>
                <p class="sellinghot">
                    <span>热卖中</span>
                    <span class="quantity">剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>

        <!-- 加载更多      -->
        <mt-button type="danger" size="large" plain @tap="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pageIndex:1,
            goodsList:[]
        }
    },
    created(){
        this.getGoodsList(),
        this.getMore()
    },
    methods: {
        //获取商品展示列表
        getGoodsList(){
            this.$http.get("api/getgoods?pageindex="+this.pageIndex).then(result => {
                if(result.body.status === 0){
                    this.goodsList = this.goodsList.concat(result.body.message);
                    // console.log(result.body.message)
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getGoodsList()
        },
        // 链式编程路由跳转
        RouterPush(id){
            this.$router.push({path:"/home/goodsInfo/"+id})
        }
    },
    
}
</script>

<style lang="less">
.goodsListContainer {
     display:flex;
     flex-wrap:wrap;
     padding:7px;
     justify-content: space-between;
    .goodsListDetail {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top:7px;
        width:49%;
        border:1px solid #ccc;
        img {
            width:100%;
        }
        h1 {
            font-size:14px;
        }
        .goodsPriceDetail {
            height:60px;
            background-color: #eee;
            margin:0 2px;
            padding:5px;
            .nowPrice {
                font-size:16px;
                color:red;
                margin-right:8px;
            }
            .sellinghot {
                display:flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
