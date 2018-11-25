import Vue from 'vue'
import Router from 'vue-router'

//引入home组件
import homeComponent from "../pages/home/"
import memberComponent from "../pages/member/"
import shopcarComponent from "../pages/shopcar/"
import searchComponent from "../pages/search/"
import newsListComponent from "../pages/newsList/"
import newsInfoComponent from "../pages/newsInfo/"
import photosListComponent from "../pages/photosList"
import photosListInfoComponent from "../pages/photosListInfo"
import goodsListComponent from "../pages/goodsList"
import goodsInfoComponent from "../pages/goodsInfo"
import goodsDescriptionComponent from "../pages/goodsDescription"
import goodsCommentComponent from "../pages/goodsComment"



Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:homeComponent},
    {path:"/member",component:memberComponent},
    {path:"/shopcar",component:shopcarComponent},
    {path:"/search",component:searchComponent},
    {path:"/home/newsList",component:newsListComponent},
    {path:"/home/newsInfo/:id",component:newsInfoComponent},
    {path:"/home/photosList",component:photosListComponent},
    {path:"/home/photosListInfo/:id",component:photosListInfoComponent},
    {path:"/home/goodsList",component:goodsListComponent},
    {path:"/home/goodsInfo/:id",component:goodsInfoComponent},
    {path:"/home/goodsInfo/goodsDescription/:id",component:goodsDescriptionComponent},
    {path:"/home/goodsInfo/goodsComment/:id",component:goodsCommentComponent}
    
  

  

  ],
  linkActiveClass:"mui-active"
})
