<template>
	<view class="page">
		<view class="content">
			<div class="card">
				<div style="display: flex;flex-direction: row;justify-content: flex-start;align-items: center;" @click="handleClick('userinfo')">
					<image src="/static/logo.png" style="width: 100px;height: 100px"></image>
					<div style="display: flex;flex-direction: column;justify-content: center;align-items: flex-start;">
						<view v-if="userStore.nick" class="user-info">
							<view class="u_title">
								欢迎你,{{ userStore.nick }}
							</view>
						</view>
						<view v-if="userStore.name" class="user-info">
							<view class="u_subtitle">
								用户名:{{ userStore.name }}
							</view>
							<view class="u_subtitle">
								ID:{{ userStore.id }}
							</view>
						</view>
					</div>
				</div>
			</div>
			<div class="card">
				<view class="custom-list-item" @click="handleClick('userinfo')">
					<view class="left-content">
						<l-icon name="user-business-filled" size="20px" color="#3498db"></l-icon>
						<div style="width: 10px;"></div>
						<text class="name">个人信息</text>
					</view>
					<l-icon name="chevron-right" size="20px" color="#707070"></l-icon>
				</view>
				<view class="custom-list-item" @click="handleClick('pwd')">
					<view class="left-content">
						<l-icon name="user-password-filled" size="20px" color="#3498db"></l-icon>
						<div style="width: 10px;"></div>
						<text class="name">修改密码</text>
					</view>
					<l-icon name="chevron-right" size="20px" color="#707070"></l-icon>
				</view>
				<!-- <view class="custom-list-item" @click="handleClick('phone')">
					<view class="left-content">
						<l-icon name="phone-locked-filled" size="20px" color="#3498db"></l-icon>
						<div style="width: 10px;"></div>
						<text class="name">更换手机号</text>
					</view>
					<l-icon name="chevron-right" size="20px" color="#707070"></l-icon>
				</view> -->

			</div>
			<div class="card">
				<view class="custom-list-item" @click="handleClick('about')">
					<view class="left-content">
						<l-icon name="app-filled" size="20px" color="#3498db"></l-icon>
						<div style="width: 10px;"></div>
						<text class="name">关于App</text>
					</view>
					<l-icon name="chevron-right" size="20px" color="#707070"></l-icon>
				</view>
				<view class="custom-list-item" @click="handleClick('yszc')">
					<view class="left-content">
						<l-icon name="accessibility-filled" size="20px" color="#3498db"></l-icon>
						<div style="width: 10px;"></div>
						<text class="name">隐私政策</text>
					</view>
					<l-icon name="chevron-right" size="20px" color="#707070"></l-icon>
				</view>
				<view class="custom-list-item" @click="handleClick('yhxy')">
					<view class="left-content">
						<l-icon name="help-circle-filled" size="20px" color="#3498db"></l-icon>
						<div style="width: 10px;"></div>
						<text class="name">用户协议</text>
					</view>
					<l-icon name="chevron-right" size="20px" color="#707070"></l-icon>
				</view>

				<view class="custom-list-item" @click="handleClick('quit')">
					<view class="left-content">
						<l-icon name="secured-filled" size="20px" color="#3498db"></l-icon>
						<div style="width: 10px;"></div>
						<text class="name">退出登录</text>
					</view>
					<l-icon name="chevron-right" size="20px" color="#707070"></l-icon>
				</view>

			</div>
		</view>
	</view>
</template>

<script setup>
	import storage from '@/utils/storage'
	import {
		ref,
		getCurrentInstance,
	} from 'vue'
	import useUserStore from '@/store/modules/user'

	const {
		proxy
	} = getCurrentInstance();

	const userStore = useUserStore();
	import {
		onLoad,
		onShow,
	} from '@dcloudio/uni-app'
	const globalConfig = ref(getApp().globalData.config);


	onLoad(() => {})

	const screeWith = ref(null)

	const handleClick = (type) => {
		switch (type) {
			case 'userinfo':
				uni.navigateTo({
					url:'/pages/mine/userinfo/userinfo'
				});
				break;
				case 'pwd':
					uni.navigateTo({
						url:'/pages/mine/changepwd/changepwd'
					});
					break;
			case 'about':
				uni.navigateTo({
					url: '/pages/mine/about/about',
				});
				break;
			case 'yszc':
				var site = globalConfig.value.appInfo.agreements[0];
				uni.navigateTo({
					url: `/pages/common/webview/index?title=${site.title}&url=${site.url}`
				})
				break;
			case 'yhxy':
				var site = globalConfig.value.appInfo.agreements[1];
				uni.navigateTo({
					url: `/pages/common/webview/index?title=${site.title}&url=${site.url}`
				})
				break;
			case 'quit':
			uni.showModal({
				title: '退出登录',
				content: '确定要退出登录吗！',
				success: (res) => {
					if (res.confirm) {
						userStore.logOut().then(res => {
							uni.clearStorageSync()
							proxy.$tab.reLaunch('/pages/login')
						})
					}
				}
			})
		}
	}

	onShow(() => {
		const systemInfo = uni.getSystemInfoSync();

		screeWith.value = systemInfo.windowWidth; // 窗口可用宽度

	})


	userStore.getInfo()
</script>

<style lang="scss" scoped>
	.page {
		margin: 0 auto;
		min-height: 100vh;
		background: white;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
		position: relative;
	}


	.user-info {
		margin-left: 15px;

		.u_title {
			font-size: 20px;
			line-height: 30px;
			color: #3498db;
			font-weight: 800;
		}

		.u_subtitle {
			font-size: 16px;
			line-height: 22px;
			color: #2c3e50;
			font-weight: 400;
		}
	}

	/* 主内容区 */
	.content {
		padding: 10px;
	}

	/* 页面标题 */
	.page-header {
		margin-bottom: 25px;
		padding-bottom: 15px;
		border-bottom: 1px solid #eaeef2;
	}

	.page-title {
		font-size: 21px;
		font-weight: 700;
		color: #1a5276;
		display: flex;
		align-items: center;
	}

	.page-title i {
		margin-right: 12px;
		background: rgba(52, 152, 219, 0.15);
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #3498db;
	}

	.page-subtitle {
		color: #7f8c8d;
		margin-top: 8px;
		font-size: 15px;
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
	}

	.icon {
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}

	.name {
		font-size: 15px;
		color: #333;
	}

	.arrow {
		font-size: 36rpx;
		color: #999;
		/* margin-left: 10rpx; */
	}
</style>