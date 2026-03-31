<template>
	<view class="container">
		<web-view :webview-styles="webviewStyles" :src="webUrl"></web-view>
	</view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance
	} from 'vue'
	import {
		onLoad,
	} from '@dcloudio/uni-app'
	const webUrl = ref('')
	const webviewStyles = ref({
		progress: {
			color: '#2ecc71'
		}
	});
	onLoad((options) => {
		if (options.url) {
			webUrl.value = options.url
		}
	})
</script>

<style lang="scss" scoped>
</style>