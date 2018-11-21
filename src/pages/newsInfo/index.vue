<template>
    <div class="newsInfoContainer">
        <h3 class="newsInfoTitle">{{newsInfo.title}}</h3>
        <p class="newsInfoTime">
            <span>发表时间: {{newsInfo.add_time | dataFormat("YYYY-MM-DD HH:mm:ss")}}</span>
            <span class="newsInfoClick">点击{{newsInfo.click}}次</span>
        </p>
        <hr>
        <div class="content">
            <p v-html="newsInfo.content"></p>      
        </div>            
        <comment :id="id"></comment>
    </div>
</template>

<script>
import { Toast} from "mint-ui"
import comment from "../../components/comment/"
export default {
    data(){
        return {
            id:this.$route.params.id,
            newsInfo: {}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo(){
            this.$http.get("api/getnew/"+this.id).then(result => {
                if(result.body.status === 0) {
                    this.newsInfo = result.body.message[0]
                    // console.log(this.newsInfo.id)
                }else {
                    Toast("获取新闻信息失败,请重试")
                }
                
            })
        }
    },
    components: {
        comment
    }
}
</script>

<style lang="less">
.newsInfoContainer {
    .newsInfoTitle {
        font-size:16px;
        color:red;
        text-align: center;
        height:30px;
        line-height:30px;
    }
    >p {
        padding:0 5px;
        color:#26a2ff;
        .newsInfoClick {
            float:right
        }
    }
    .content {
        font-size:14px;
        img {
            width: 100%;
        }
    }
}
</style>


