import Vue from 'vue';
import Vuex from 'vuex';
import data from '../../data.json';
Vue.use(Vuex);
console.info(data);
export default new Vuex.Store({
	state:{
		data,
		//切换头部商品详细信息的按钮开关
		tag:false,
		//购物车
		car:{
			food:[],
			totalPrice:0,
			totalNumber:0
		},
		sw:-1
	},
	mutations:{
		changeTag(state){
			state.tag=!state.tag;
		},
		addToCar(state,obj){
			if(state.sw==-1){
				if(obj.count){
					state.car.food.push(obj);
				}else{
					obj.count=1;
					state.car.food.push(obj);
					
				}
				
				state.car.totalNumber+=1;
				state.car.totalPrice+=obj.food.price;
			}else{
				if(obj.count){
									state.car.food[state.sw].count=obj.count;
				}else{
					state.car.food[state.sw].count++;
				}

				state.car.totalNumber++;
				state.car.totalPrice+=parseInt(state.car.food[state.sw].food.price);
				console.info(state.car.food);
				
			}
			
		},isHave(state,obj){
			console.info('xiao');
			console.info(obj);
			for(var i=0; i<state.car.food.length;i++){
				console.info('xiao');
					console.info(obj);
				if(state.car.food[i].food===obj){
					console.info(state.car.food[i]);
					console.info(obj);
					state.sw=i;
					return ;
				}
			}
				state.sw=-1;
		},subToCar(state,obj){
			if(obj.count){
				state.car.food[state.sw].count=obj.count;
			}else{
				state.car.food[state.sw].count--;
			}

				state.car.totalNumber--;
				state.car.totalPrice-=parseInt(state.car.food[state.sw].food.price);
				
			if(obj.count==0){
				state.car.food.splice(state.sw,1);
			}
		},
		clear(state){
			state.car.food.forEach((item)=>{
				item.count=0;
				item.food.count=0;
			});
			state.car.food=[];
			state.car.totalPrice=0,
			state.car.totalNumber=0;
		}
	},
	getters:{
		mycar(state){
			return state.car;
		}

		
	}
	
});
