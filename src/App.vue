<template>
  <div class="appContainer">
    <!-- 头部 -->
    <mt-header fixed title="vueHeader"></mt-header>


    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">home</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">member</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">shopcar</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">search</span>
			</router-link>
		</nav>


    <!-- 内容中间 -->
    <router-view></router-view>


  </div>
</template>

<script>

</script>

<style>
body {
  background-color: #fff;
}
.appContainer {
  padding-top:40px;
  padding-bottom: 50px;
}
</style>
