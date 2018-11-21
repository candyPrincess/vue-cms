<template>
    <div class="commentContainer">
        <h3 class="commentTitle">发表评论</h3>
        <hr>
        <textarea placeholder="请吐槽,但是不可以超过120个字" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <ul v-for="(item,i) in commentList" :key="item.add_time" class="commentContent">
            <li class="firstp">第{{i+1}}楼 用户:{{item.user_name}}  发表时间:{{item.add_time | dataFormat("YYYY-MM-DD HH:mm:ss")}}</li>
            <li class="secondp">{{item.content}}</li>
        </ul>
        <mt-button type="danger" plain size="large">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
    props:["id"],
    data(){
        return {
            pageIndex:1, //假设当前第一页
            commentList:[]
        }
    },
    created(){
        this.getComment()
    },
    methods: {
        getComment(){
           
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result => {
                console.log(result.body.message)               
                //  console.log(this.id)
                if(result.body.status === 0){
                     this.commentList = result.body.message
                }else {
                    Toast("获取评论信息失败")
                }
              
            })
        }
    }

}
</script>

<style lang="less">
.commentContainer {
    padding:0 5px;
    .commentTitle {
        font-size:20px
    }
    textarea {
        font-size:14px;
    }
    .commentContent {
        list-style: none;
        padding:0;
        margin: 0;
        .firstp {
            height:30px;
            line-height:30px;
            color:#000;
            font-size:10px;
            background-color: #e7e5e5;
        }
        .secondp {
            height:35px;
            line-height:35px;
            font-size:14px;
            text-indent:2em;
        }
    }
}
</style>
