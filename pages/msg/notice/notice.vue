<template>
	<view class="page">
		<view class="content">
			<view class="card">
				<mp-html style="flex: 1;" :content="msgContent"></mp-html>
				<view class="bottom-menu">
					<l-icon name="time" size="13px" color="#707070"></l-icon>
					<view>{{noticeInfo.createTime||''}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		getNoticeInfo
	} from '@/api/home/msg.js'
	import {
		ref,
		getCurrentInstance
	} from 'vue';
	import {
		onLoad,
		onShow,
	} from '@dcloudio/uni-app'

	onLoad((options) => {
		if (options.noticeId) {
			noticeId.value = options.noticeId
		}
	})

	const noticeId = ref(null)
	const noticeInfo = ref({})
	const screeWith = ref(null)
	const msgContent = ref(null)
	onShow(() => {
		const systemInfo = uni.getSystemInfoSync();

		screeWith.value = systemInfo.windowWidth; // 窗口可用宽度
		if (noticeId.value == null || noticeId.value == '' || noticeId.value == undefined) {
			uni.showToast({
				icon: 'none',
				title: '获取内容失败，内容不存在',
				duration: 3000,
				complete: function() {
					uni.navigateBack();
				}
			})
		} else {
			uni.showLoading({
				title: '加载中...',
				mask: true,
			});
			getNoticeInfo(noticeId.value).then(res => {
				noticeInfo.value = res.data;
				msgContent.value = res.data.noticeContent;
				uni.setNavigationBarTitle({
					title: res.data.noticeTitle
				});
				uni.hideLoading();
			}).catch((e) => {
				uni.hideLoading();
			})
		}
	})
</script>

<style lang="scss" scoped>
	.page {
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		height: 100vh;
		/* 占满视口高度 */
		overflow: hidden;

	}

	/* 主内容区 */
	.content {
		padding: 10px;

		/* 填满剩余空间 */
		background-color: #ffffff;
		/* scroll-view 在 uni-app 中需要设置 height: 100% 才能生效 */
		height: 100vh;
		transform: translateZ(0);
	}

	/* 卡片样式 */
	.card {
		background: white;
		border-radius: 16px;
		padding: 10px;
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-bottom: 15px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		transition: all 0.3s ease;
		min-height: 100px;
	}

	.bottom-menu {
		font-size: 14px;
		color: #707070;
		display: flex;
	}
</style>