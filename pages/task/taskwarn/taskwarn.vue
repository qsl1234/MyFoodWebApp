<template>
	<view class="page">
		<view class="card">
			<view class="custom-list-item">
				<view class="left-content">任务编码</view>
				<view class="name">{{recordInfo.taskCode||''}}</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">任务名称</view>
				<view class="name">{{recordInfo.taskName||''}}</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">配方编码</view>
				<view class="name">{{recordInfo.recipeCode||''}}</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">配方名称</view>
				<view class="name">{{recordInfo.recipeName||''}}</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">生产数量</view>
				<view class="name">{{recordInfo.recipeCount||'0'}}Kg</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">反应釜编码</view>
				<view class="name">{{recordInfo.reactorCode||''}}</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">反应釜名称</view>
				<view class="name">{{recordInfo.reactorName||''}}</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">物料编码</view>
				<view class="name">{{recordInfo.itemCode||''}}</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">物料名称</view>
				<view class="name">{{recordInfo.itemName||''}}</view>
			</view>
			<!-- <view class="custom-list-item">
				<view class="left-content">规格型号</view>
				<view class="name">{{recordInfo.specification||''}}</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">单位名称</view>
				<view class="name">{{recordInfo.unitName||''}}</view>
			</view> -->
			<view class="custom-list-item">
				<view class="left-content">容差值</view>
				<view class="name">{{recordInfo.tolerance  ||'0'}}Kg</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">提前预警量</view>
				<view class="name">{{recordInfo.warning ||'0'}}Kg</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">待生产数量</view>
				<view class="name">{{recordInfo.waitAmount ||'0'}}Kg</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">称重重量</view>
				<view class="name" style="color: red;">{{recordInfo.netAmount ||'0'}}Kg</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">操作人</view>
				<view class="name" style="color: red;">{{recordInfo.updateBy||''}}</view>
			</view>
			<view class="custom-list-item">
				<view class="left-content">操作时间</view>
				<view class="name" style="color: red;">{{recordInfo.createTime||''}}</view>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		getTaskWarnInfo
	} from '@/api/home/task.js'
	import {
		ref,
		getCurrentInstance
	} from 'vue';
	import {
		onLoad,
		onShow,
	} from '@dcloudio/uni-app'

	onLoad((options) => {
		if (options.recordId) {
			recordId.value = options.recordId
		}
	})

	const recordId = ref(null)
	const recordInfo = ref({})
	const screeWith = ref(null)
	onShow(() => {
		const systemInfo = uni.getSystemInfoSync();

		screeWith.value = systemInfo.windowWidth; // 窗口可用宽度
		if (recordId.value == null || recordId.value == '' || recordId.value == undefined) {
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
			getTaskWarnInfo(recordId.value).then(res => {
				recordInfo.value = res.data;
				uni.hideLoading();
			}).catch((e) => {
				uni.hideLoading();
			})
		}
	})
</script>

<style lang="scss" scoped>
	.page {
		min-height: 100vh;
		padding: 10px;
		background-color: #ffffff;
		/* 不要设 display: flex; */
		/* 否则子元素高度继承会出问题 */
	}

	.card {
		background: white;
		border-radius: 16px;
		padding: 10px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	.custom-list-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* 核心布局：让左右内容分开 */
		align-items: center;
		min-height: 50px;
		border-bottom: 1px solid #eee;
		padding: 0 20rpx;
		/* 可以添加点击态效果 */
		transition: background-color 0.2s;
	}
	.custom-list-item:last-child {
		border-bottom: none;
	}
	.left-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 28rpx;
		color: #707070;
	}
	.name {
		font-size: 28rpx;
		color: #333;
	}
</style>