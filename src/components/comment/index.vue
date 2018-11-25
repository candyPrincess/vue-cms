<template>
    <div class="commentContainer">
        <h3 class="commentTitle">发表评论</h3>
        <hr>
        <textarea v-model="commentContent" placeholder="请吐槽,但是不可以超过120个字" maxlength="120"></textarea>
        <mt-button @click="putComment" type="primary" size="large">发表评论</mt-button>
        <ul v-for="(item,i) in commentList" :key="i" class="commentContent">
            <li class="firstp">第{{i+1}}楼 用户:{{item.user_name}}  发表时间:{{item.add_time | dataFormat("YYYY-MM-DD HH:mm:ss")}}</li>
            <li class="secondp">{{item.content=== 'undefined' ? "此人很懒,啥也没留下" : item.content}}</li>
        </ul>
        <mt-button @click="loadMore" type="danger" plain size="large">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
    props:["id"],
    data(){
        return {
            pageIndex:1, //假设当前第一页
            commentList:[],
            commentContent:""
        }
    },
    created(){
        this.getComment()
    },
    methods: {
        getComment(){          
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result => {
                // console.log(result.body.message)               
                //  console.log(this.id)
                if(result.body.status === 0){
                     this.commentList = this.commentList.concat(result.body.message)
                }else {
                    Toast("获取评论信息失败")
                }
              
            })
        },
        loadMore(){
            this.pageIndex++;
            this.getComment()
        },
        putComment(){
            if(this.commentContent.trim().length === 0){
                return Toast("评论内容不能为空")
            }
            // 将评论添加到数据库,然后重新获取评论
            this.$http.post("api/postcomment/"+this.id,{content:this.commentContent},{emulateJSON:true}).then(result => {
                // console.log(result)
                if(result.body.status === 0){
                    Toast(result.body.message)
                    //刷新页面
                    // this.pageIndex = 1;
                    // this.commentList = [];
                    // this.commentContent = "";
                    // this.getComment()

                    //拼接评论
                    var cmt = {
                        add_time: Date.now(),
                        content: this.commentContent,
                        user_name:"匿名用户"
                    }
                    this.commentList.unshift(cmt)
                    this.commentContent = ""

                }else {
                    Toast("提交评论失败")
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
