<template>
    <div class="newListContainer">
        <ul class="mui-table-view">
				<li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{ item.title }}</h3>
							<span class="mui-ellipsis">发表时间:{{item.add_time | dataFormat("YYYY-MM-DD HH:mm:ss")}}</span>
                            <span class="span-right">点击{{item.click}}次</span>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
import { Toast} from "mint-ui"

export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods: {
        getNewsList(){
            this.$http.get("api/getnewslist").then(result => {
                // console.log(result.body.message)
                if(result.body.status === 0){
                    this.newsList = result.body.message
                    // console.log(this.newsList)
                }else {
                    Toast("获取新闻列表失败,请重试")
                }
            })
        }
    }
}
</script>


<style lang="less">
.newListContainer {
    position: relative;;  
    padding-bottom:50px;
    left:0;
    right:0;
    .mui-table-view {
        .mui-table-view-cell {
            .mui-media-body {
                .mui-h3,h3 {
                    font-size:16px;
                }
                .mui-ellipsis,
                span{
                    font-size:12px;
                    color:#26a2ff;
                
                }
                .span-right {
                    float:right
                }
            }
        }
    }
}
</style>


