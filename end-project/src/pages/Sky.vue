<template>
	<div class="sky">
		<calendar></calendar>
		<a href="javascript:void(0);" @click="getJson">获取json</a>
	</div>
</template>

<script>
	import calendar from "@/components/calendar"
	// import axios from "axios"
	import api from "../fetch/api"

	export default {
		components: {
			calendar
		},
		data() {
			return {

			}
		},
		methods:{
			// getJson() {
			// 	axios.post('http://localhost:3000/first',{withCredentials:true})
			// 	.then(function(response){
			// 		console.log(response);
			// 	})
			// 	.catch(function(response){
			// 		console.log(response);
			// 	})
			// },
			getJson() {
				api.getData()
					.then(res => {
						console.log(res);
					})
					.catch(error => {
						console.log(error);
					})
			}
		}
	}
</script>