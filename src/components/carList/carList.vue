<template>
<div class="carList">
			<div ref="show" :class="{wrapper:true}">
		<div class="banner">
		<i>购物车</i>
		<span @click="clear">清空</span>		
	</div>
	<ul class="sub-carlist">
		<li v-for="item in car.food">
			<h2>{{item.food.name}}</h2>
			<p>￥{{item.food.price}}</p>
			<div class="add">
				<add :tagshow="tag" :food="item.food"></add>
			</div>
			
		</li>
	</ul>
	</div>	
</div>

</template>

<script>
import '../../assets/css/font.css';
import {mapState,mapMutations}from 'vuex';
import add from '../addToCar/addToCar.vue';
export default{
	name:'carList',
	data:function(){
		return{
			car:this.$store.state.car
		}
	},
	components:{
		add
	},
	methods:{
		...mapMutations(['clear'])
	},
	props:['tag'],
	updated(){
		console.info('woaini');
	}
	
}
</script>

<style lang="less" scoped>
.carList{
	position:fixed ;
	right: 0px;
	left: 0px;
	top:0px;
	bottom:50px;
	z-index: 101;
	background-color: rgba(0,0,0,.5);
		.wrapper{
			position: absolute;
			bottom:0px;
			width:100%;
			overflow:scroll;
			background-color: #fff;
			height:50%;
			.banner{
				position:fixed;
				width: 100%;
				z-index: 100;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color:#f3f5f7;
	
	i{
		color:#191919;
		font-weight: bolder;
		font-size: 18px;
		margin-left: 10px;
	}
	span{
		color:#00a1db;
			font-weight: bolder;
		font-size: 18px;
		margin-right: 10px;
			
	}
	
}
	.sub-carlist{
		background-color: #fff;
		width: 100%;
		margin-top: 45px;
		height: ;
		li{
			display: flex;
			height: 48px;
			justify-content: space-around;
			border-bottom: 1px solid #eee;
			margin: 0px 5px;
			line-height: 48px;
			h2{
				margin-left: 5px;
				color:rgb(0,0,0);
				flex: 1;
				font-weight: bolder;
				text-align: left;
				font-size: 14px;
				
			}
			p{
				color:red;
				font-weight: bolder;
				width: 40px;
			}
			.add{
				padding-top: 15px;
				width: 80px;
				margin-left: 10px;
			}
		}		
	}
	}


}

</style>
