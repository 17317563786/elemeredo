<template>
	<div>
			<div id="footer" @click="show">
		<div class="car_left">
			<div class="out">
				<div class="in">
					<i class="iconfont icon-gouwuche"></i>
					<transition name="roll">
							<div class="circle" v-show="mycar.totalNumber>0"><i>{{mycar.totalNumber}}</i></div>
					</transition>
				
				</div>
			</div>
			<div class="price">￥{{mycar.totalPrice}}元</div>
		</div>
		<div class="car_center">另需￥{{seller.deliveryPrice}}配送费元起送</div>
		<div class="car_right">
				<div  ref="delive" v-show="deliveryPrice>0" class="delive">还差￥{{deliveryPrice}}元起送</div>
				<div  ref="delive"  v-show="deliveryPrice<=0" class="jiesuan">结算</div>
				 
		</div>
	
	
	</div>
	<transition name="togle">
		<carList :tag="tag" v-show="tag.tag&&tag1"></carList>
	</transition>
		
	</div>

</template>

<script>
import '../../assets/css/font.css';
import {mapGetters} from 'vuex';
import carList from '../carList/carList.vue'
export default{
	name:'footer',
	data:function(){
		return{
			
		seller:this.$store.state.data.seller,
		tag:{
			tag:false
		}
	
		}
	},
	methods:{
		show(){
			if(this.mycar.totalNumber!=0){
				this.tag.tag=!this.tag.tag;
			}
		}
	},
	components:{
		carList
	},
	computed:{
		...mapGetters(['mycar']),
		deliveryPrice(){
			let price=this.seller.minPrice-this.mycar.totalPrice;
			return price;
		},
		tag1(){
			return this.mycar.totalNumber!=0
		}
	},
	updated(){
		if(this.mycar.totalNumber==0){
			this.tag.tag=false;
		}
		console.info('shulin');
		console.info(this.mycar.totalNumber);
	}
}
</script>

<style lang="less" scoped>
	.roll-enter-active,.roll-leave-active{
		transition: all .5s;
	}
	.roll-enter,.roll-leave-active{
		transform: rotate(360deg) translateX(-5px)translateY(5px);
	}
	
		.togle-enter-active,.togle-leave-active{
		transition: all .5s;
	}
	.togle-enter,.togle-leave-active{
		transform:translateY(400px) ;opacity: 0;
	}
	#footer{
		height: 50px;
		color:#fff;
		line-height: 50px;
		text-align: center;
		position: fixed;
		background: #11121e;
		bottom: 0px;
		width: 100%;
		z-index: 102;
		display: flex;
		.car_left{
			height: 100%;
			font-weight: bolder;
			background: #11121e;
			width:115px;
			padding-right:10px;
			.price{
				padding-left:45px;
				text-align: right;
			}
			.out{
				height: 48px;
				width: 48px;
				border-radius: 24px;
				background: #11121e;
				position: absolute;
				left:8px;
				top:-10px;
				.in{
					height:100%;
					width:100%;
					transform: scale(0.9);
					border-radius:24px;
					background-color:blue;
					position: absolute;
					top: 5px;
					i{
						font-size: 30px;
						color: #fff;
						line-height: 48px;
						text-align: center;
					}
					.circle{
						position: absolute;
						width: 20px;
						height: 20px;
						border-radius: 10px;
						background-color: red;
						top:0px;
						right: 0px;
						line-height: 20px;
						text-align: center;
						i{
							font-size:12px;
						line-height: 20px;
							
						}
					}
				}
			}
			
			
		}
		.car_center{
			flex: 1;
			height: 100%;
			font-size: 12px;
			background-color:#2b333b;
			text-align: center;
			padding:0px 5px;
			
			
		}
		.car_right{
			width: 100px;
			text-align: center;
			height: 100%;
			font-size: 12px;
			font-weight: bolder;
			.delive{
				width: 100%;
				height: 100%;
				background-color: #4c4c4c;
			}
			.jiesuan{
				width: 100%;
				height: 100%;
				background-color: green;
			}
		}
		
	}
</style>
