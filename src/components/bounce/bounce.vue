<template>
	<div class='show_info filter'>
	  <h2>{{data.seller.name}}</h2>
		<ul class="star">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<h3><span>优惠信息</span></h3>
		<ol>
			<li v-for="item in data.seller.supports">
				<span></span><p>{{item.description}}</p>
			</li>
		</ol>
		<h3><span>商家公告</span></h3>
		<p class="info">{{data.seller.bulletin}}</p>
		<div class="close"><i @click="changeTag" class="iconfont icon-cha"></i></div>
		
	</div>
</template>

<script>
import {mapState,mapMutations}from 'vuex';
import '../../assets/css/font.css';
export default{
	name:'bounce',
	computed:{
		...mapState(['data','tag'])
	},
	methods:{
		...mapMutations(['changeTag'])
	},
	mounted(){
		console.info(this.data);
		
	}

}
</script>

<style lang="less" scoped>
.filter{
	filter: blur(0px);
}
	.show_info{
		padding:0px 20px 0px 20px;
		color:#d3d5d3;
	position:fixed;
	top: 0px;
	right: 0px;
	left: 0px;
	bottom: 0px;
	z-index: 1000;
	background-color: rgba(0,0,0,.9);
	h2,h3{
		color:#fff;
		height:30px;
		line-height: 30px;
		text-align: center;
		font-size: 20px;
		font-weight: bolder;
		margin-top:60px;

	}
	.star{
		display: flex;
		justify-content: center;

		background-size: contain;
		li{
			width: 20px;
			height: 20px;
			margin:15px;
			background: url(../../../resource/img/star24_on@2x.png) no-repeat;
		}
	}
	h3{
		margin: 8px 0px 16px 0px;
		font-size: 16px;
		line-height: 20px;
		height: 20px;
		height: 20px;
		border-bottom: 2px solid #7f7f7f;
		span{
			padding:0px 30px;
			position: relative;
			top:10px;
			background-color:#191919;
		}
		
	}
	ol{	
		li{
			display: flex;
				margin:0px 0px 10px 0px;
			
			span{
				width: 20px;
				height: 20px;
				display: inline-block;
				background: url(../../../resource/img/discount_3@2x.png) no-repeat;
				background-size: contain;
				margin-right: 5px;
				position: relative;
				top:-2px;
			}
			p{

				font-size: 14px;
			}
		}

	}
	p.info{
		line-height: 25px;
		font-size: 14px;
		text-indent: 2em;
	}
	.close{
		text-align: center;
		margin-top: 20px;
		i{
		width: 30px;
		height: 30px;
	}
	}
	

}
</style>
