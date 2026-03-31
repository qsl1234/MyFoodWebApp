<template>
	<view class="container">
		<view v-if="recordList != null && recordList != undefined && recordList.length>0"
			class="task-item" v-for="(line,index) in recordList" :key="index">
			<view class="task-info" >
				<view class="custom-list-item">
					<view class="left-content">批次</view>
					<view class="name">{{line.specification||''}}</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">本次投料</view>
					<view class="name">{{line.currentAmount || 0.00}}Kg</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">投料时间</view>
					<view class="name">{{line.createTime||''}}</view>
				</view>
				
			</view>
		</view>
		<view v-else
			style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
			<image src="/static/nodata.png" mode="aspectFit" style="width: 150px; height: 150px;"></image>
			<view style="font-size: 16px;color: #808080">-暂无数据-</view>
		</view>
		<ScalePicker ref="scalePicker"></ScalePicker>
	</view>
</template>

<script setup >
	import {
		ref,
		getCurrentInstance
	} from 'vue';
	import {
		onLoad,
		onShow,
		onReady,
	} from '@dcloudio/uni-app'

	import {
		getBatchCodeList,
	} from '@/api/home/task.js'

	const taskLineId = ref(null)
	onLoad((options) => {
		taskLineId.value  = options.taskLineId;
	})
	const recordList = ref([])

	onReady(() => {

	})
	onShow(() => {
		loadMyTask();
	})



	
	const loadMyTask = () => {
		uni.showLoading({
			title: '加载中..',
			mask: true,
		})
		getBatchCodeList(taskLineId.value).then(res => {
			// console.log(res)
			recordList.value = res.data;
			uni.hideLoading();
		}).catch((e)=>{
			uni.hideLoading();
			uni.showToast({
				title:e,
				icon:'none'
			});
		})

	}
	
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		height: 100vh;
		/* 占满视口高度 */
		overflow: scroll;
		/* 关键：防止页面本身出现滚动条 */
		padding-top: 10px;
	}
	
	
	
	.item {
		padding: 15px;
		border-bottom: 1px solid #ddd;
	}
	
	.task-item {
		background: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: all 0.3s ease;
		border-left: 4px solid #3498db;
		border-radius: 16px;
		margin-left: 15px;
		margin-right: 15px;
		padding-left: 10px;
		padding-right: 10px;
		margin-bottom: 10px;
		margin-top: 5px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}
	
	.task-info {
		flex: 1;
	}
	
	.task-name {
		font-weight: 400;
		margin-bottom: 8px;
		font-size: 15px;
		line-height: 20px;
		display: flex;
		align-items: center;
	}
	
	.task-badge {
		background: rgba(52, 152, 219, 0.15);
		color: #3498db;
		font-size: 12px;
		padding: 3px 10px;
		border-radius: 20px;
		margin-left: 10px;
		font-weight: 600;
	}
	
	.task-details {
		display: flex;
		flex-wrap: wrap;
		gap: 11px;
		font-size: 12px;
		color: #7f8c8d;
	}
	
	.task-detail {
		display: flex;
		align-items: center;
	}
	
	.task-detail i {
		margin-right: 6px;
		opacity: 0.7;
	}
	
	.task-status {
		padding: 6px 16px;
		border-radius: 20px;
		font-size: 13px;
		font-weight: 600;
	}
	
	.status-active {
		background: rgba(52, 152, 219, 0.15);
		color: #3498db;
	}
	
	.status-completed {
		background: rgba(46, 204, 113, 0.15);
		color: #2ecc71;
	}
	
	.status-wait {
		background: rgba(0, 85, 255, 0.15);
		color: #0055ff;
	}
	
	.status-pending {
		background: rgba(243, 156, 18, 0.15);
		color: #f39c12;
	}
	.card {
		background: white;
		border-radius: 16px;
		padding: 10px;
		margin-bottom: 15px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		transition: all 0.3s ease;
	}
	
	.custom-list-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* 核心布局：让左右内容分开 */
		align-items: center;
		min-height: 40px;
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