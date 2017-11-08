<template>
	<div class='addtoCar'>
		<transition name="roll">
			<div v-show="food.count>0" class="sub" @click.stop="sub">
				<i class="iconfont icon-jian"></i>
			</div>
		</transition>

		<transition name="fade"><div class="count" v-show="food.count>0"><i>{{food.count}}</i></div></transition>
		<div @click.stop="add" class="add">
			<i class="iconfont icon-jia"></i>
		</div>		
	</div>
</template>

<script>
import {mapState,mapMutations}from 'vuex';
import '../../assets/css/font.css';
export default{
props:['food'],
data:function(){
	return{
		tag:false,
		is_true:false,
		obj:"",
		count:0,
		totalPrice:0,
		totalCount:0
	}
},
methods:{
	...mapMutations(['addToCar','isHave','subToCar']),
	add(){	
		this.food.count++;
		this.count=this.food.count;
		this.isHave(this.food);
		this.addToCar({
			food:this.food,
			count:this.food.count
		});
	},
	sub(){
		
					this.food.count--;
					
					
					this.count=this.food.count;
					this.isHave(this.food);
			this.subToCar({
			food:this.food,
			count:this.food.count
		});
		console.info(this.$store.state.car);
	}
},
	mounted(){
						if(	!this.food.count){
					this.$set(this.food,'count',0);
				}
	}

}
</script>

<style lang="less" scoped>
.roll-enter,.roll-leave-active{
	opacity: 0;
	transform:translateX(50px) rotate(720deg) ;
}
.roll-enter-active,.roll-leave-active{
	transition: all .5s;
}

.fade-enter,.fade-leave-active{
	opacity: 0;
}
.fade-enter-active,.fade-leave-active{
	transition: all .5s;
}

.addtoCar{
	width: 70px;
	height: 20px;
	position: relative;
	.sub,.add,.count{
		position: absolute;
		right: 0px;
		width: 20px;
		height: 20px;
		border-radius: 10px;
		text-align: center;
		line-height: 20px;
		border-radius: 10px;
		color:#00a1db;
		/*font-weight: bolder;*/
		i{
			font-size:24px;
		}
		&.sub{
			margin-top: -2px;
			left:0px;
		}
		&.count{
			right: 24px;
			i{
				font-size: 16px;
				color:#7F7F7F;
			}
			
		}
	}
}
  
</style>
