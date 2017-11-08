<template>
	<div :class="{header:true} ">
	<section id='app'>
	<div class="header-left"><img :src="seller.avatar
" alt="" /></div>
	<div class="header-center">
		<h2><span></span>{{seller.name}}</h2>
		<p>{{seller.description}}/{{seller.deliveryTime}}分钟到达</p>
		<p><i></i>{{seller.supports[0].description}}</p>
	</div>
	<div class="header-right" @click="changeTag"><span>{{seller.supports.length}}个   ></span></div>
</section>
<!--公告信息-->
	<div class="info" @click="open_info=true"><span></span><p>{{seller.bulletin}}</p><i @click="changeTag">></i></div>
		<div class="bgc"><img :src="seller.avatar" alt="" /></div>
	<div class="bgc2"></div>
	<!--全屏公告信息-->
	<transition name='bounce'>
	<bounce v-show="tag"></bounce>
	</transition>

		
	</div>

</template>

<script>
import {mapState,mapMutations} from 'vuex';
import "../../assets/css/reset.css";
import bounce from "../bounce/bounce"
export default {
  name: 'app',
data:function(){
	return{
		seller:this.$store.state.data.seller,
		open_info:false
	}
},mounted(){
	console.info(this.seller);
},
  computed:{
  	...mapState(['data','tag'])
  },
  methods:{
  	...mapMutations(['changeTag'])
  },
  components:{
  	bounce
  }
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    /*@keyframes bounce-in{
        0%{transform: scale(0);}
        50%{transform: scale(1.5);}
        100%{transform: scale(1);}
    }
    @keyframes bounce-out{
        0%{transform: scale(1);}
        50%{transform: scale(1.5);}
        100%{transform: scale(0);}
    }
    .bounce-enter-active {animation: bounce-in .4s;}
    .bounce-leave-active{animation: bounce-out .4s;}*/
    
    @keyframes bounce-in{
    	0%{transform:scale(0);}
    	50%{transform:scale(1.5);}
    	100%{transform:scale(1);}
    }
    
    @keyframes bounce-out{
    	0%{transform:scale(1);}
    	50%{transform:scale(1.5);}
    	100%{transform:scale(0);}
    	
    }
    
    .bounce-enter-active{animation:bounce-in .4s;}
    .bounce-leave-active{animation:bounce-out .4s;}

.header{
	/*height: 140px;*/
		position: relative;
	#app {

	padding:24px 10px 18px 24px;
	display: flex;
	color:#fff;
	.header-left{
		img{
			vertical-align: bottom;
			width: 64px;
		}
	}
	.header-center{
		flex: 1;
		display: flex;
		margin-left: 5px;
		flex-direction: column;
		justify-content:space-around;
		/*flex: 1;*/
		h2{font-size: 15px;
		font-weight: bolder;
			span{
				display: inline-block;
				width: 30px;
				height: 18px;
				background:url('../../../resource/img/brand@2x.png');
				background-size: contain;
				margin-right: 5px;
				vertical-align: bottom;
			}
		}
		p{
			font-size: 12px;
			i{
				display: inline-block;
				vertical-align: bottom;
				width: 18px;
				height: 18px;
				background: url(../../../resource/img/decrease_1@3x.png);
				background-size: contain;
				margin-right:2px;
				vertical-align: -5px;
			}
		}
	}
	.header-right{
		align-self: flex-end;
		span{
			padding:5px 7px;
			font-size: 10px;
			border-radius: 15px;
			background-color:rgba(0,0,0,.6);
		}
	}

}
	.info{
		height: 28px;
		line-height: 28px;
		display: flex;
		color:#fff;
		background-color: rgba(0,0,0,.5);
		  
		  			span{
				display: inline-block;
				position: relative;
    		top: 5px;
				margin-left: 5px;
				width: 33px;
				height: 16px;
				background:url(../../../resource/img/bulletin@3x.png) no-repeat;
				background-size:contain;
				margin-right:2px;
				vertical-align: -5px;
		
		  }
		  p{
		  	font-size: 10px;
		  white-space: nowrap;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  margin:0 8 0 0px;
		  flex: 1;
		  }
		  i{
		  	margin-right: 10px;
		  	font-weight: bolder;
		  }

	}
		.bgc,.bgc2{
		position: absolute;
		left: 0px;
		top: 0px;
		right: 0px;
		bottom: 0px;
		z-index: -3;
		background-color: rgba(7,17,27,0.5);
		img{
			width: 100%;
			height: 100%;
			filter: blur(10px);
			
			
		}
	}
	.bgc2{
		z-index: -1;
	}	
}
	
</style>
