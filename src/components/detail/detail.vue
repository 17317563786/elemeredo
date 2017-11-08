<template>
	<div class="detail_wrapper">
			<div id="detail">
		<div><img :src="food.image" alt="" width="100%" height="" /></div>
		<div class="title">
			<h2>{{food.name}}</h2>
			<p class="month"><span>月售{{food.sellCount}}份</span><i>好评率{{food.rating}}</i></p>
			<p class="price"><span>￥{{food.price}}</span><del>{{food.oldPrice}}</del><strong @click="add">加入购物车</strong></p>
		</div>
		<div class="info">
			<h2>商品介绍</h2>
			<p>{{food.info}}</p>
		</div>
		<div class="say">
			<h2>商品评价</h2>
			<ul>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<p><i></i>只看内容评价</p>
			<ol class="more_people">
				<li v-for="item in food.ratings">
					<p><time>{{item.rateTime}}</time></p>
					<p>{{item.text}}</p>
					<p>{{item.username}}</p>
					<div><img :src="item.avatar" alt="" /></div>
				</li>
			</ol>
		</div>
	</div>
	<div @click="close" class="goback"><</div>
	</div>

</template>

<script>
import '../../assets/css/font.css';
import {mapState,mapMutations}from 'vuex';
export default{
	name:'',
	data:function(){
		return{
			car:this.$store.state.car
		}
	},
	props:['food','tag'],
	methods:{
		close(){
			this.tag.tag=!this.tag.tag;
		},
		...mapMutations(['addToCar','isHave']),
			add(){	
				if(	!this.food.count){
					this.$set(this.food,'count',0);
				}
		this.food.count++;
		this.isHave(this.food);
		this.addToCar({
			food:this.food,
			count:this.food.count
		});
	}
		
	}
}
</script>

<style lang="less" scoped>

.detail_wrapper{
	position:fixed;
	overflow: scroll;
	top:0px;
	bottom:50px;
	left:0px;
	right:0px;
	z-index:100;
	background-color: #CCCCCC;
	.goback{
		font-weight: bolder;
		font-size: 30px;
		color: deepskyblue;
		position: fixed;
		left:5px;
		top:5px;
	}
	#detail{
		img{
			vertical-align: bottom;
		}
		.title{
			background-color: #fff;
			padding:10px 20px;
			h2{
				font-weight: bolder;
				font-size: 16px;
				margin-top: 10px;
			}
		
		.month{
			margin-top: 10px;
			span,i{
				font-size: 14px;
				color:#7F7F7F;
				
			}
			span{
				margin-right: 20px;
			}

		}
		.price{
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			span{
				font-weight: bolder;
				color: red;
			}
			del{
				color:#191919;
			}
						strong{
				width: 100px;
				height: 30px;
				text-align: center;
				line-height: 30px;
				border-radius: 15px;
				background-color:deepskyblue;
				position: relative;
				top: -8px;
				
			}
		}
		}
		.info{
			margin-top:10px;
			padding-left: 20px;
			background-color: #FFF;
			h2{
				font-weight: bolder;
				font-size: 20px;
				margin-top: 10px;
			}
			p{
				text-indent: 2em;
				font-size: 14px;
				line-height: 20px;
				color:#292929;
				margin-top: 10px;
			}
		}
	
}
}

</style>
