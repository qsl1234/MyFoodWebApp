<template>
	<view>
		<uni-popup ref="popup" background-color="#fff" type="bottom" borderRadius="15px  15px  16px  16px">
			<view class="popup-container" @click.stop>
				<!-- 弹窗头部 -->
				<view class="popup-header">
					<text class="title">选择电子秤</text>
					<text class="close" @click="close">✕</text>
				</view>

				<!-- 任务列表 -->
				<scroll-view class="list-container" scroll-y>
					<view v-for="(line,index) in taskList" :key="index" class="task-item" @click="onSelect(line)">
						<view class="custom-list-item">
							<view class="left-content">电子秤编码</view>
							<view class="name">{{line.machineryCode||''}}</view>
						</view>
						<view class="custom-list-item">
							<view class="left-content">电子秤名称</view>
							<view class="name">{{line.machineryName||''}}</view>
						</view>
						
					</view>

					<!-- 空数据提示 -->
					<view v-if="taskList.length === 0" class="empty-tip">
						暂无任务数据
					</view>
				</scroll-view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref,
		watch
	} from 'vue';
	import {
		listAllScale
	} from '@/api/home/scale.js'
	// 任务列表
	const taskList = ref([]);

	// 加载数据
	const loadTasks = () => {
		uni.showLoading({
			title: '加载中...'
		});
		listAllScale().then(res=>{
			console.log(res)
			taskList.value = res.data;
			uni.hideLoading();
		}).catch((e)=>{
			console.error('加载任务列表失败', err);
			uni.showToast({
				icon: 'none',
				title: '加载失败',
				duration:2000,
				complete: () => {
					uni.hideLoading();
				}
			});
		})
	};

	// 选择任务
	const onSelect = (line) => {
		console.log(line)
		uni.$emit('onScaleSelect', line); // 返回选中的 taskId
		close();
	};


	// 点击遮罩层关闭
	const onMaskClick = () => {
		close();
	};
	const popup = ref(null)
	const open = () => {
		loadTasks();
		popup.value.open();
	}
	const close = () => popup.value.close()
	const cancelClick = () => {

		close()
	}

	defineExpose({
		open,
		close
	})
</script>

<style lang="scss" scoped>
	.popup-container {
		background-color: #f0f0f0;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		overflow: hidden;
		max-height: 80vh;
		min-height: 200px;
		display: flex;
		flex-direction: column;
	}

	.popup-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 30rpx;
		border-bottom: 1px solid #f0f0f0;
		background-color: #f9f9f9;
	}

	.title {
		font-size: 34rpx;
		font-weight: 500;
		color: #333;
	}

	.close {
		font-size: 40rpx;
		color: #999;
		width: 60rpx;
		text-align: center;
	}

	.list-container {
		flex: 1;
		padding: 10px;
		
	}

	.task-item {
		display: flex;
		flex-direction: column;
		padding: 15px;
		margin-bottom: 8px;
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
		font-size: 15px;
		color: #333;
	}

	.custom-list-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* 核心布局：让左右内容分开 */
		align-items: center;
		min-height: 35px;
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

	.empty-tip {
		text-align: center;
		padding: 60rpx 0;
		color: #999;
		font-size: 28rpx;
	}
</style>