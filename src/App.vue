<template>
  <div class="appContainer">
    <!-- 头部 -->
    <mt-header fixed title="vueHeader"></mt-header>


    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-qxm" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">home</span>
			</router-link>
			<router-link class="mui-tab-item-qxm" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">member</span>
			</router-link>
			<router-link class="mui-tab-item-qxm" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="badge" class="mui-badge">0</span></span>
				<span class="mui-tab-label">shopcar</span>
			</router-link>
			<router-link class="mui-tab-item-qxm" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">search</span>
			</router-link>
		</nav>


    <!-- 内容中间 -->
    <transition>
      <router-view></router-view>
    </transition>
    


  </div>
</template>

<script>

</script>

<style>
.v-enter {
  opacity:0;
  transform:translateX(100%);
}
.v-leave-to {
  opacity:0;
  transform:translateX(-100%);
  position:absolute;

}
.v-enter-active,
.v-leave-active {
  transition:all .3s ease; 
}

body {
  background-color: #fff;
}
.appContainer {
  overflow-x:hidden;
  padding-top:40px;
  padding-bottom: 50px;
}
.mui-bar-tab .mui-tab-item-qxm.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-qxm {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-qxm .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-qxm .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
