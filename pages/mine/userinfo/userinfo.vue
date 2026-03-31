<template>
	<view class="page">
		<view class="content">

			<div class="card" v-if="userInfo != null && userInfo != ''">
				<view class="custom-list-item">
					<view class="left-content">姓名</view>
					<view class="name">{{userInfo.nickName||''}}</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">账号</view>
					<view class="name">{{userInfo.userName||''}}</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">手机</view>
					<view class="name">{{userInfo.phonenumber||''}}</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">邮箱</view>
					<view class="name">{{userInfo.email||''}}</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">部门</view>
					<view class="name">{{userInfo.dept.deptName||''}}</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">性别</view>
					<view class="name" v-if="userInfo.sex == '0'">男</view>
					<view class="name" v-else-if="userInfo.sex == '1'">女</view>
					<view class="name" v-else>未知</view>
				</view>
			</div>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
	} from 'vue'
	import {
		getUserProfile
	} from '@/api/system/user.js'

	import {
		onLoad,
		onShow,
	} from '@dcloudio/uni-app'

	const userInfo = ref(null)
	onLoad(() => {

	})

	const screeWith = ref(null)

	onShow(() => {
		const systemInfo = uni.getSystemInfoSync();

		screeWith.value = systemInfo.windowWidth; // 窗口可用宽度

		uni.showLoading({
			title: '加载中...',
			mask: true,
		});
		getUserProfile().then(res => {
			uni.hideLoading();
			userInfo.value = res.data;
		});
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



	/* 卡片样式 */
	.card {
		background: white;
		border-radius: 16px;
		padding: 10px;
		margin-bottom: 15px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		transition: all 0.3s ease;
	}

	.card:hover {
		box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
		transform: translateY(-3px);
	}

	.custom-list-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* 核心布局：让左右内容分开 */
		align-items: center;
		height: 100rpx;
		border-bottom: 1px solid #eee;
		padding: 0 20rpx;
		/* 可以添加点击态效果 */
		transition: background-color 0.2s;
	}

	.custom-list-item:last-child {
		border-bottom: none;
	}

	/* 可选：点击时的背景色变化 */
	custom-list-item:active {
		background-color: #f0f0f0;
	}

	/* 去掉最后一个？注意：组件本身不知道自己是不是最后一个，这个通常在父组件的列表容器里处理 */
	/* 如果需要，父组件可以传入 isLast prop 来控制 */

	.left-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 30rpx;
		color: #707070;
	}



	.icon {
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}

	.name {
		font-size: 30rpx;
		color: #333;
	}

	.arrow {
		font-size: 36rpx;
		color: #999;
		/* margin-left: 10rpx; */
	}
</style>