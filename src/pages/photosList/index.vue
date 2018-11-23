<template>
    <div class="photosListContainer">
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a v-for="item in photosCategory" :key="item.id" @click="getPhotosList(item.id)" class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
						{{ item.title }}
					</a>
				</div>
			</div>
		</div>

		<!-- 图片列表 -->
		<ul class="photosList">
			<router-link tag="li" v-for="item in cateList" :key="item.id" :to="'/home/photosListInfo/'+item.id">
				<img  v-lazy="item.img_url" alt="">
				<div class="info">
					<h1 class="infotitle">{{item.title}}</h1>
					<div class="infozhaiyao">{{item.zhaiyao}}</div>
				</div>
			</router-link>
		</ul>

    </div>
</template>

<script>
import mui from "../../js/mui.min.js";

export default {
  data() {
    return {
	  photosCategory: [],
	//   后台获取图片
	  cateList: []
    };
  },
  created() {
	this.getPhotosCategory(), 
	this.getPhotosList(0) 
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    //获取图片导航分类信息
    getPhotosCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        // console.log(result.body.message)
        if (result.body.status === 0) {
          // 将全部的id和标题添加进去
          result.body.message.unshift({
            title: "全部",
            id: "0"
          });
          this.photosCategory = result.body.message;
        }
      });
    },
    //获取图片列表
    getPhotosList(cateId) {
      this.$http.get("api/getimages/" + cateId).then(result => {
        // console.log(result.body.message)
        if (result.body.status === 0) {
          this.cateList = result.body.message;
        }
      });
    }
    
  }
};
</script>

<style lang="less">
.photosListContainer {
  .photosList {
    list-style: none;
    padding: 0 10px;
    margin: 0;
    overflow: hidden;
    li {
      position: relative;
	  height: 355px;
	  margin-bottom:10px;
	  text-align: center;
      img {
        width: 100%;
        height: 355px;
		background-color: #ccc;
	  }
	  img[lazy=loading] {
		width: 100%;
		height: 300px;
		margin: auto;
		background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542968856321&di=ea6759253aace666d252d53349d7dbc3&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0195f55972f18ca8012193a342310a.gif");
		background-size:cover;
		}
      .info {
        overflow: hidden;
        position: absolute;
        height: 84px;
        bottom: 0px;
        font-size: 14px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.4);
        .infotitle {
          font-size: 14px;
        }
      }
    }
  }
}
</style>

