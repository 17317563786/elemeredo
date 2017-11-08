<template>
	<div class="car">
		<ul>
			<li v-for="(item,index) in car">
				<h2></h2>
				<p></p>
				<span></span>
				<p></p>
			</li>
		</ul>
	</div>

</template>

<script>
import '../../assets/css/font.css';
export default{
	name:'car',
	data:function(){
		return {
			car:this.$store.state.car;
		}
	}


}
</script>

<style lang="less" scoped>

</style>
