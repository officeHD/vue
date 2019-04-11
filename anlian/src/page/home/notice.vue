<template>
	<div class="wrapper">
		<navBar :title="titleName" v-bind:MainPage="true" />
	</div>
</template>

<script>
	import navBar from "./navBar.vue";

	export default {
		// props:['methods'],
		components: {
			navBar: navBar,
		},
		data() {

			return {
			
			};
		},

		created: function() {
			util.initIconFont();
		},
		methods: {
      itemClick(url, parmars) {
        	this.jumpWithParams(url, {
				title: ""
            	});
            },
		
    },
}
</script>

<style scoped>
</style>
