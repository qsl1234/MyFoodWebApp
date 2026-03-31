<template>
	<view class="page">
		<view class="content" style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
			<image src="/static/logo.png" style="width: 100px;height: 100px;"></image>
			<div style="height: 20px;" />
			<view style="color: #3498db;font-size:20px;font-weight: 700;">智能投料</view>
			<div style="height: 15px;" />
			<view style="color: #707090;font-size:15px;">版本:V{{appVersion}}</view>
			<div style="height: 40px;" />
			<button v-if="showCheckVersion==true"
				style="height: 40px;background: #3498db;color: #ffffff;font-size: 16px;"
				@click="getAppLastVersion">检查更新</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
	} from 'vue'
	import {
		getAppVersion
	} from '@/api/system/config'
	import {
		onLoad,
		onShow,
	} from '@dcloudio/uni-app'
	const appName = ref('')
	const screeWith = ref(null)
	const appVersion = ref('1.0.0')
	const showCheckVersion = ref(false)
	onLoad(() => {})

	const getAppLastVersion = () => {
		let os = '';
		let plt = uni.getSystemInfoSync().platform;
		if (plt == 'ios') {
			os = '2';
		} else if (plt == 'android') {
			os = '1';
		} else if (plt == 'harmonyos') {
			os = '4';
		} else {
			return;
		}
		uni.showLoading({
			title: '加载中...',
			mask: true,
		})
		getAppVersion(os, appVersion.value).then(res => {
			uni.hideLoading()
			if (res.code == 200) {
				console.log(res)
				if (res.data.update == true) {
					uni.showModal({
						title: '发现新版本',
						content: res.data.info,
						showCancel: res.data.force == false,
						success: function(res1) {
							if (res1.confirm) {
								plus.runtime.openWeb(res.data.url);
							} else if (res1.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					uni.hideLoading()
					uni.showToast({
						title: '已是最新版本',
						icon: 'none'
					})
				}
			} else {
				uni.hideLoading()
				uni.showToast({
					title: '获取版本失败：' + res.msg,
					icon: 'none'
				})
			}
		}).catch((res) => {
			console.log(res)
			uni.hideLoading()
			uni.showToast({
				title: res,
				icon: 'none'
			})
		})

	}

	onShow(() => {
		const systemInfo = uni.getSystemInfoSync();
		// #ifdef MP-WEIXIN
		const accountInfo = wx.getAccountInfoSync();
		appVersion.value = accountInfo.miniProgram.version;
		// #endif
		// #ifdef APP || APP-HARMONY || APP-VUE || APP-NVUE || APP-PLUS ||UNI-APP-X
		console.log(systemInfo)
		appVersion.value = systemInfo.appVersion;
		showCheckVersion.value = true;
		// #endif
		screeWith.value = systemInfo.windowWidth; // 窗口可用宽度
		console.log(appVersion.value)
	})
</script>

<style lang="scss" scoped>
	.page {
		margin: 0 auto;
		min-height: 100vh;
		background: white;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
		position: relative;
	}

	/* 主内容区 */
	.content {
		padding: 10px;
	}
</style>