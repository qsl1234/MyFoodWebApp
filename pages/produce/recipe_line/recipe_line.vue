<template>
	<view class="container">
		<view v-if="lineList != null && lineList != undefined && lineList.length>0"
			class="task-item" v-for="(line,index) in lineList" :key="index">
			<view class="task-info" @click="clickSgowMenu(line)">
				<view class="custom-list-item">
					<view class="left-content">投料顺序</view>
					<view class="name">第{{index+1}}步</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">物料编码</view>
					<view class="name">{{line.itemCode||''}}</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">物料名称</view>
					<view class="name">{{line.itemName||''}}</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">规格型号</view>
					<view class="name">{{line.specification||''}}</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">待生产</view>
					<view class="name">{{line.waitAmount||''}}Kg</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">实际投料</view>
					<view class="name">{{line.realAmount||''}}Kg</view>
				</view>
				<view class="custom-list-item">
					<view class="left-content">配料状态</view>
					<view v-if="line.status=='1'" class="name">未投料</view>
					<view v-else-if="line.status=='2'" class="name" style="color: seagreen;">投料中</view>
					<view v-else-if="line.status=='3'" class="name" style="color: coral;">暂停(换桶)</view>
					<view v-else-if="line.status=='4'" class="name" style="color: green;">已完成</view>
					<view v-else-if="line.status=='5'" class="name" style="color: red;">超重</view>
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

<script setup>
	import {
		ref,
		getCurrentInstance
	} from 'vue';
	import {
		onLoad,
		onShow,
		onPullDownRefresh,
	} from '@dcloudio/uni-app'
	import {
		listAllLineForTask,
		lineChange,
	} from '@/api/home/task.js'

	const taskId = ref(null)
	const reactorCode = ref(null)
	// 消息列表
	const lineList = ref([])
	import ScalePicker from '@/components/scale_picker/scale_picker.vue'
	const scalePicker = ref(null)

	const clickSgowMenu = (line) => {
		let menus = [];
		if(line.status == '1'){
			menus = ['开始投料','中断上报'];
		} else if(line.status == '2' || line.status == '3'){
			menus = ['继续投料','中断上报','投料完成'];
		} else if(line.status == '4'){
			uni.showToast({
				title:'已完成此投料任务,如有其他未完成的投料任务,请继续投料',
				icon:'none'
			});
			return;
		} else if(line.status == '5'){
			uni.showToast({
				title:'此投料任务已超重,无法继续投料',
				icon:'none'
			});
			return;
		} else {
			return;
		}
		uni.showActionSheet({
			title: '请选操作类型',
			itemList: menus,
			success: function(e) {
				console.log(e)
				if(e.tapIndex == 0){
					startWork(line);
				} else if (e.tapIndex == 1){
					errorWork(line);
				} else if (e.tapIndex == 2){
					finishWork(line);
				}
			}
		})
	}
	// 开始投料
	const startWork = (line) => {
		uni.$off('onScaleSelect');
		scalePicker.value.open();
		
		uni.$on('onScaleSelect', (scale) => {
			console.log('1111');
			console.log(scale);
			uni.navigateTo({
				url:'/pages/produce/scan_item/scan_item?taskId='+taskId.value+"&taskLineId="
				+line.taskLineId+"&taskCode="+line.taskCode+"&itemCode="+line.itemCode+"&scaleCode="+scale.machineryCode,
			})
		})
	}
	// 异常上报
	const errorWork = (line) => {
		uni.navigateTo({
			url: '/pages/task/errorreport/errorreport?taskId=' + taskId.value + "&taskLineId=" +
				line.taskLineId,
		});
	}
	// 完成投料
	const finishWork = (line) => {
		uni.$off('onScaleSelect');
		// 先扫描电子秤编码，然后提交
		scalePicker.value.open();
		console.log('eee')
		uni.$on('onScaleSelect', (scale) => {
			console.log(scale);
			if(scale != null) {
				var data = {
					taskLineId: line.taskLineId,
					status: 4,
					scaleCode: scale.machineryCode,
					realAmount: 0,
				};
				uni.showLoading({
					title:'正在提交...',
					mask:true
				});
				lineChange(data).then(res=>{
					uni.hideLoading();
					loadTaskLine();
				})
			}
			
		})
	}
	
	onLoad((options) => {
		if (options.taskId) {
			taskId.value = options.taskId;
		}
		if (options.reactorCode) {
			reactorCode.value = options.reactorCode;
		}
	})

	const screeWith = ref(null)
	onShow(() => {
		const systemInfo = uni.getSystemInfoSync();

		screeWith.value = systemInfo.windowWidth; // 窗口可用宽度
		loadTaskLine();
	})
	const loadTaskLine = () => {
		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: '加载中..',
				mask: true,
			});

			listAllLineForTask(taskId.value)
				.then(res => {
					console.log(res)
					lineList.value=res.data;

					uni.hideLoading();
					resolve(res);
				})
				.catch(e => {
					uni.hideLoading();
					reject(e);
				});
		});
	}
	
	onPullDownRefresh(() => {
		loadTaskLine();
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000)
	})
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
		padding: 10px;
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