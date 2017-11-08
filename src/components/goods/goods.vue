<template>
	<div>
			<div id="goods">
			<div class="g_left">
				<ol class="goods_left">
					<li @click="select(index)" :class="{active:current==index}"   v-for="(category,index) in goods"><p :class="{active:current==index}" >{{category.name}}</p></li>
				</ol>
			</div> 

		<div class="g_right">
				<ul class="goods_right" id="goods_right" ref="ul">
			<li v-for="category in goods" class="category_food">
			
				<h2>{{category.name}}</h2>
				<ol>
					<li v-for="(food,index) in category.foods" @click="showinfo(food)">
						<div class="left_img"><img :src="food.icon" alt="" width="80" height="80" /></div>
						<div class="food_center">
							<h3>{{food.name}}</h3>
							<p>{{food.description}}</p>
							<p><span>月售{{food.sellCount}}份</span><i>好评率{{food.rating}}</i></p>
							<p class="price_wrapper"><i class="price">￥{{food.price}}</i> <del>{{food.oldPrice}}</del><addtocar :food="food" class="addtocar"></addtocar></p>
						</div>
						
					<div class="add"></div>

					
					
					</li>
				</ol>
			</li>
		</ul>
		</div>
		
	</div>
					<transition name="slide">
						<detail :food="thing" :tag="tag" class="detail" v-show="tag.tag==true"></detail>
					</transition>
						
					
	</div>
	
</template>

<script>
import '../../assets/js/iscroll-probe.js'
import addtocar from '../addToCar/addToCar.vue'
import detail from '../detail/detail.vue'
export default{
	name:'app',
	data:function(){
		return{
			goods:this.$store.state.data.goods,			
			current:0,			
			tag:{
				tag:false
			},
			count:'',
			offsettop:[],
			thing:""		
		}
	},
	components:{
		addtocar,
		detail
	},
	methods:{
		select(index){
			this.current=index;
			let ul=document.getElementById('goods_right');
			console.info(ul);
			let lis=ul.querySelectorAll('.category_food');
			this.listScroll.scrollToElement(lis[index]);
			
		},
		showinfo(value){
			
			this.thing=value;
			this.tag.tag=true;			
		}
	},
	updated(){
		console.info('oooooo');
	},
	mounted(){
		console.info(this.goods);
		console.info(IScroll);
		this.listScroll = new IScroll(".g_right",{probeType:2});
        this.menuScroll = new IScroll(".g_left");
        	let lis=this.$refs.ul.querySelectorAll('.category_food');
        	for(var i in lis){
        		this.offsettop.push(lis[i].offsetTop);
        	}
        	

        	console.info(this.offsettop);
        	let _this=this;
        this.listScroll.on('scroll',function(){
        	console.info(this.y);
        	for(var i in _this.offsettop){
        		if(-this.y>=_this.offsettop[i]){
        			_this.current=i;
        		}
        	}
        })
	}
}
</script>

<style lang="less" scoped>

.slide-enter-active,.slide-leave-active{
	transition:all .5s
}
.slide-enter,.slide-leave-active{
	transform: translateX(100%);
	opacity: 0;
}
.fixed{

}
 #goods{
 	overflow: hidden;
 	/*height:100%;*/
 	width: 100%;
 	position: fixed;
 	bottom:50px;
 	top:174px;
 	display: flex;
 	background-color: #f3f5f7;
 	
 	.goods_left{
 		display:flex;
 		flex-direction:column;
 		li.active{
 			background-color:#fff;
 		}
 		p{
 			
 			&.active{
 				border-bottom: 2px solid transparent;
 			}
 			/*height: 55px;*/
 			width: 60px;
 			padding:22px 0px 23px 0px; 
 			margin:0px 10px;
 			text-align:left; 
 			font-size: 14px;
 			font-weight: bolder;
 			border-bottom:2px solid #eee;
 			
 		}
 	}
 	.goods_right{
 		flex: 1;
 		li{
 			h2{
 				font-size: 16px;
 				padding:2px 0px;
 				color:rgb(147,153,159);
 				height: 25px;
 				line-height: 25px;
 				padding-left:20px;
 				border-left: 2px solid #ccc;
 			}
 			
 			ol{
 				background-color: #fff;
 				padding:18px;
 				li{
 					display: flex;
 					margin:0px 0px 10px 0px;
 					padding:5px 0px 20px 0px;
 					border-bottom: 2px solid #eee;
 					.left_img{
 						img{
 							vertical-align: bottom;
 						}
 					}
 					.food_center{
 						flex: 1;
 						margin-left: 5px;
 						display: flex;
 						flex-direction: column;
 						justify-content: space-around;
 						h3{
 							font-weight: bolder;
 							color:rgb(7,17,27);
 							font-size: 14px;
 						}
 						p{
 							color:rgb(147,153,159);
 							font-size: 10px;
 							span{
 								margin-right: 10px;
 							}
 							&.price_wrapper{
 								display: flex;
 								justify-content: space-around;
 								 .price{
 								font-weight: bolder;
 								color:#f01414;
 								font-size: 16px;
 								margin-right: 5px;
 								
 							}
 							del{
 									font-size: 16px;
 							}
 							.addtocar{
 								
 								margin-left:5px;
 							}
 							}

 						}
 					}
 				}
 			}
 		}
 	}
 }
 .active{
	
	
}
 p.active{
		
	}
</style>
