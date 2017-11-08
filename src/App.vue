<template>
	<div id="main">
	<myheader></myheader>
	<ul class="nav">
		<li><router-link to="/goods">商品</router-link></li>
		<li><router-link to="/comments">评论</router-link></li>
		<li><router-link to="/shops">商家</router-link></li>
	</ul>
	<router-view class="line"></router-view>
	<myfooter></myfooter>
	</div>

</template>

<script>
import myheader from "./components/header/header.vue"
import myfooter from "./components/footer/footer.vue"

export default{
	name:'app',
	components:{
		myheader,
		myfooter
	}
}
</script>

<style lang="less" scoped>
	#main{
		.nav{
			display: flex;
			justify-content: space-around;
			background-color: #eee;
			li{
				height: 40px;
				line-height: 40px;
				a{
					text-decoration: none;
					color:rgb(77,85,93);
				}
				.router-link-exact-active{
					color:rgb(240,20,20);

				}
			}
		}
		.line{
			border-bottom: 1px solid #eee;
		}
	}
</style>
