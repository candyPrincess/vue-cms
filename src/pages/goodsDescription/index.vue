<template>
    <div class="goodsDescriptionContainer">
        <h1 class="goodDescTitle">{{goodsDes.title}}</h1>
        <hr>
        <div v-html="goodsDes.content" class="goodDescContent"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            goodsDes: []
        }
    },
    created(){
        this.getGoodsDesc()
    },
    methods: {
        getGoodsDesc(){
            this.$http.get("api/goods/getdesc/"+this.id).then(result => {
                // console.log(result.body.message[0])
                this.goodsDes = result.body.message[0]
            })
        }
    }
}
</script>


<style lang="less">
.goodsDescriptionContainer{
    .goodDescTitle{
        font-size:14px;
        color:blue;
        text-align: center;
        height:40px;
        line-height:40px;
    }
    .goodDescContent {
        font-size:12px;
        img {
            width: 100%;
        }
    }
}
</style>
