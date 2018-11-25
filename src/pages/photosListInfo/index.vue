<template>
  <div class="photosListInfoContainer">
     <h1>{{PhotoListInfo.title}}</h1>
     <p>
         <span>发表时间: {{PhotoListInfo.add_time | dataFormat()}}</span>
         <span>点击:{{PhotoListInfo.click}}次</span>
     </p>
     <hr>
     <!-- 缩略图 -->
     <div class="pic">
        <img class="preview-img" v-for="(item,index) in list" :key="index" :src="item.src" @click="$preview.open(index, list)">
     </div>
     <div class="content" v-html="PhotoListInfo.content"></div>

     <!-- 发表评论 -->
     <comment :id="id"></comment>
  </div>  
</template>

<script>

import comment from "../../components/comment/"
export default {
    data(){
        return {
            id:this.$route.params.id,
            PhotoListInfo: {},
            // 后台获取缩略图
            smallPicList:[],
            // 自定义图片
            list: [{
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542963884628&di=80982608c649f049eb73346cc18a2a1c&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F6159252dd42a283432fb413c50b5c9ea15cebfa3.jpg',
                w: 400,
                h: 400
                }, {
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542963884631&di=96bbb03a069916298448938bece2089a&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2018%2F11%2F022421241827372609.jpg',
                w: 400,
                h: 400
                },{
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542964064916&di=8248f37bf3d9664252bab85d99493c7b&imgtype=0&src=http%3A%2F%2Fcnews.chinadaily.com.cn%2Fimg%2Fattachement%2Fpng%2Fsite1%2F20180730%2F509a4c1279f91cc88f8560.png',
                w: 400,
                h: 400
                }]
        }
    },
    created(){
        this.getPhotoListInfo(),
        this.getSmallPicInfo()
    },
    methods: {
        //获取图片详细信息
        getPhotoListInfo() {
            this.$http.get("api/getimageInfo/" + this.id).then(result => {
                // console.log(result.body.message[0]);
                if (result.body.status === 0) {
                this.PhotoListInfo = result.body.message[0];
                }
            });
        },
        //获取缩略图
        getSmallPicInfo(){
            this.$http.get("api/getthumimages/"+this.id).then(result => {
                // console.log(result.body.message)
                if(result.body.status === 0){
                    this.smallPicList = result.body.message
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
.photosListInfoContainer {
    h1 {
        font-size:15px;
        line-height:20px;
        line-height:30px;
        text-align: center;
        color:#26a2ff;
    }
    p {
        display:flex;
        justify-content: space-between;
        padding:0 5px;
    }
    .content {
        font-size:14px;
        line-height:30px;
    }
    .pic {
        img {
            margin:10px;
            width:50px;
            height:50px;
        }
    }
}
</style>
