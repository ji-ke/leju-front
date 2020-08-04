<template>
	<view class="articledetail">
		
	</view>
</template>

<script>
	import findApi from '../../../network/find/find.js'
	export default {
		data() {
			return {
				articledetail: []
			}
		},
		methods: {
			
		},
		created() {
			findApi.product()
			.then(res => {
				// console.log(res)
			})
		}
	}
</script>

<style lang="scss" scoped>
.articledetail{
	
}
</style>
