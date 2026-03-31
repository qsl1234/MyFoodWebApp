<template>
	<view class="page">
		<view class="content">
			<view class="page-header">
				<view class="page-title">
					<l-icon name="map" color="#3498db" />
					<div style="width: 15px;"></div>
					生产看板
				</view>
				<view class="page-subtitle">今日生产任务概览与数据统计</view>
			</view>
			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-icon"><l-icon name="task-checked-1" /></div>
					<div class="stat-value">{{topInfo.taskCount||0}}</div>
					<div class="stat-label">进行中任务</div>
					<div class="stat-trend trend-up" v-if="topInfo.taskChange>=0">
						<l-icon name="arrow-up" /> 相比昨日增加{{topInfo.taskChange}}个
					</div>
					<div class="stat-trend trend-down" v-else>
						<l-icon name="arrow-down" /> 相比昨日减少{{Math.abs(topInfo.taskChange)}}个
					</div>
				</div>
				<div class="stat-card">
					<div class="stat-icon"><l-icon name="check-circle" /></div>
					<div class="stat-value">{{topInfo.taskFCount||0}}</div>
					<div class="stat-label">今日完成任务</div>
					<div class="stat-trend trend-up" v-if="topInfo.taskFChange>=0">
						<l-icon name="arrow-up" /> 相比昨日增加{{topInfo.taskFChange}}个
					</div>
					<div class="stat-trend trend-down" v-else>
						<l-icon name="arrow-down" /> 相比昨日减少{{Math.abs(topInfo.taskFChange)}}个
					</div>
				</div>
				<div class="stat-card">
					<div class="stat-icon"><l-icon name="percent" /></div>
					<div class="stat-value">{{topInfo.precision||0}}%</div>
					<div class="stat-label">平均配料精度</div>
					<div class="stat-trend trend-up" v-if="topInfo.precisionChange>=0">
						<l-icon name="arrow-up" /> 提升{{topInfo.precisionChange}}%
					</div>
					<div class="stat-trend trend-down" v-else>
						<l-icon name="arrow-down" /> 下降{{Math.abs(topInfo.precisionChange)}}%
					</div>
				</div>
				<div class="stat-card">
					<div class="stat-icon"><l-icon name="time" /></div>
					<div class="stat-value">{{topInfo.reactor||0}}%</div>
					<div class="stat-label">设备使用率</div>
					<div class="stat-trend trend-up" v-if="topInfo.reactorChange>=0">
						<l-icon name="arrow-up" /> 提升{{topInfo.reactorChange}}%
					</div>
					<div class="stat-trend trend-down" v-else>
						<l-icon name="arrow-down" /> 下降{{Math.abs(topInfo.reactorChange)}}%
					</div>
				</div>
			</div>

			<div class="card">
				<div class="card-header" style="display: flex;flex-direction: row;justify-content: space-between;">
					<div class="card-title"
						style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
						<l-icon name="list" color="#3498db" size="20px" />
						<div style="width: 15px;"></div>
						最新生产任务
					</div>
					<div @click="reloadMyTask"
						style="border-radius: 15px;border: 2px solid #3498db;width: 60px;height: 28px;font-size: 13px;color: #3498db;display: flex;flex-direction: row;align-items: center;justify-content: center;">
						<l-icon name="refresh" color="#3498db" size="13px" /> 刷新
					</div>

				</div>
				<div class="task-list">
					<div class="task-item" v-for="(task,index) in taskList" @click="clickTaskItem(task)">
						<div class="task-info">
							<div class="task-name" v-if="task.attr3 != 1">
								{{task.taskCode||''}}
							</div>
							<div class="task-name" v-else style="color: #aa0000;">
								<l-icon name="circle-filled" color="#aa0000" size="10px" style="margin-right: 3px;"></l-icon>
								{{task.taskCode||''}}
							</div>
							<div class="task-details">
								<div class="task-detail">
									<l-icon name="chart-3d-filled"></l-icon> 反应釜:{{task.reactorName||''}}
								</div>
								<div class="task-detail">
									<l-icon name="saturation-filled"></l-icon> 配方:{{task.recipeName||''}}
								</div>
								<div class="task-detail">
									<l-icon name="user-1-filled"></l-icon> 负责人:{{task.teamAdmin||''}}
								</div>
								<div class="task-detail">
									<l-icon name="time-filled"></l-icon> 创建时间:{{task.createTime||''}}
								</div>
							</div>
						</div>
						<div v-if="task.status=='NORMAL'" class="task-status status-pending">待开始</div>
						<div v-if="task.status=='START'" class="task-status status-active">生产中</div>
						<div v-if="task.status=='PAUSE'" class="task-status status-pending">暂停</div>
						<div v-if="task.status=='FINISHED'" class="task-status status-completed">完成</div>
					</div>
					<view v-if="taskList==null || taskList== '' || taskList.length == 0"
						style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
						<image src="/static/nodata.png" mode="aspectFit" style="width: 150px; height: 150px;"></image>
						<view style="font-size: 16px;color: #808080">-暂无数据-</view>
					</view>
				</div>

			</div>
			<!-- <div class="card">
				<div class="card-header">
					<div class="card-title"><l-icon name="gesture-typing-filled" color="#3498db" /> 快速操作</div>
				</div>
				<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 10px;">
					<button class="btn btn-success">
						<l-icon name="qrcode" color="#ffffff" /> 任务中心
					</button>
					<button class="btn btn-primary">
						<l-icon name="logo-codesandbox" color="#ffffff" /> 消息中心
					</button>
				</div>
			</div> -->
		</view>
		<!--<uni-load-more :status="xlstatus" />-->
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
		onReachBottom,
	} from '@dcloudio/uni-app'
	import {
		getHomeTopInfo,
		inTimeList
	} from '@/api/home/task.js'

	const topInfo = ref({
		taskCount: 0,
		taskChange: 0,
		taskLineCount: 0,
		taskLineChange: 0,
		precision: 0,
		precisionChange: 0,
		reactor: 0,
		reactorChange: 0
	});
	// 是否可以加载更多
	const xlstatus = ref('more');
	// 生产任务列表
	const taskList = ref([])
	// 全部任务数量
	const totalTaskCount = ref(0)
	const queryParams = ref({
		pageSize: 10,
		pageNum: 1
	})

	onLoad(() => {
		
	})

	const screeWith = ref(null)


	onShow(() => {
		const systemInfo = uni.getSystemInfoSync();

		screeWith.value = systemInfo.windowWidth; // 窗口可用宽度
		getMyTopInfo();
		reloadMyTask();
	})

	const getMyTopInfo = () => {
		getHomeTopInfo().then(res => {
			topInfo.value = res.data
		})
	}

	const reloadMyTask = () => {
		taskList.value = [];
		loadMyTask();
	}
	const loadMyTask = () => {
		uni.showLoading({
			title: '加载中..',
			mask: true,
		})
		inTimeList(queryParams).then(res => {
			console.log(res)
			totalTaskCount.value = res.total;
			taskList.value.push(...res.rows)
			if (res.total == undefined) {
				// 标记加载数据完成
				xlstatus.value = 'more';
			} else if (res.total <= taskList.value.length) {
				// 标记加载数据完成
				xlstatus.value = 'noMore';
			} else {
				// 标记还有剩余数据
				xlstatus.value = 'more';
			}
			uni.hideLoading();
		}).catch((e)=>{
			uni.hideLoading();
			uni.showToast({
				title:e,
				icon:'none'
			})
		})
	}
	
	const clickTaskItem = (task)=>{
		uni.navigateTo({
			url:'/pages/task/taskdetails/taskdetails?taskId='+ task.taskId,
		});
	}
	/** 生命周期函数-上拉加载 */
	// onReachBottom(() => {

	// 	if (xlstatus.value == 'noMore' || xlstatus.value == 'loading') {
	// 		// 如果没有更多数据或者正在加载数据，则不需要加载更多，直接返回
	// 		return;
	// 	}
	// 	// 标记正在加载数据
	// 	xlstatus.value = 'loading';
	// 	queryParams.value.pageNum++;
	// 	getList();
	// })

	/** 生命周期函数--下拉刷新 */
	onPullDownRefresh(() => {
		getMyTopInfo();
		reloadMyTask();
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000)
	})
</script>

<style lang="scss" scoped>
	page {
		margin: 0 auto;
		min-height: 100vh;
		background: white;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
		position: relative;
	}

	/* 按钮样式 */
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 36px;
		border-radius: 10px;
		text-align: center;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		border: none;
		font-size: 15px;
		white-space: nowrap;
	}

	.btn l-icon {
		margin-right: 8px;
	}

	.btn:active {
		transform: translateY(2px);
	}

	.btn-primary {
		background: #3498db;
		color: white;
	}

	.btn-success {
		background: #2ecc71;
		color: white;
	}

	.btn-warning {
		background: #f39c12;
		color: white;
	}

	.btn-outline {
		background: transparent;
		border: 2px solid #3498db;
		color: #3498db;
	}

	.btn-sm {
		padding: 8px 16px;
		font-size: 14px;
	}


	/* 主内容区 */
	.content {
		padding: 10px;
	}

	/* 页面标题 */
	.page-header {
		margin-bottom: 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid #eaeef2;
	}

	.page-title {
		font-size: 16px;
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
		font-size: 14px;
	}

	/* 卡片样式 */
	.card {
		background: white;
		border-radius: 16px;
		padding: 10px;
		margin-bottom: 10px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		transition: all 0.3s ease;
	}

	.card:hover {
		box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
		transform: translateY(-3px);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}

	.card-title {
		font-size: 16px;
		font-weight: 600;
		color: #2c3e50;
	}

	.card-title i {
		margin-right: 10px;
		color: #3498db;
	}

	/* 统计卡片 */
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 10px;
		margin-bottom: 10px;
	}

	.stat-card {
		background: white;
		border-radius: 16px;
		padding: 15px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		position: relative;
		overflow: hidden;
	}

	.stat-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 5px;
		height: 100%;
		background: #3498db;
	}

	.stat-icon {
		position: absolute;
		top: 20px;
		right: 20px;
		font-size: 20px;
		opacity: 0.2;
		color: #3498db;
	}

	.stat-value {
		font-size: 20px;
		font-weight: 700;
		color: #3498db;
		margin: 10px 0 5px;
	}

	.stat-label {
		font-size: 14px;
		color: #7f8c8d;
	}

	.stat-trend {
		display: flex;
		align-items: center;
		margin-top: 12px;
		font-size: 12px;
		font-weight: 500;
	}

	.trend-up {
		color: #2ecc71;
	}

	.trend-down {
		color: #e74c3c;
	}

	/* 任务列表 */
	.task-list {
		display: grid;
		gap: 15px;
	}

	.task-item {
		background: white;
		border-radius: 14px;
		padding: 18px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
		border-left: 4px solid #3498db;
	}

	.task-item:hover {
		transform: translateY(-3px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	}

	.task-info {
		flex: 1;
	}

	.task-name {
		font-weight: 700;
		margin-bottom: 8px;
		font-size: 15px;
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
		gap: 15px;
		font-size: 14px;
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
		background: #e6f7ff;
		color: #1890ff;
	}
	
	.status-completed {
		background: #f6ffed;
		color: #52c41a;
	}
	
	.status-wait {
		background: #fff6e6;
		color: #ff9900;
	}
	
	.status-pending {
		background: #fff6e6;
		color: #ff9900;
	}
</style>