<template>
    <div class="bannerContainer">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in list" :key="index">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {
        
        }
    },
    props: ["list"]
}
</script>

<style lang="less">
.bannerContainer {
    width: 100%;
    min-height: 290px;
}
</style>


