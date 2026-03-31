<template>
	<view class="container">
		<!-- 顶部 Tab 标签 -->
		<view class="header-tab">
			<view class="tab-item" :class="{ active: currentTab === 0 }" @click="switchTab(0)">
				待开始
			</view>
			<view class="tab-item" :class="{ active: currentTab === 1 }" @click="switchTab(1)">
				进行中
			</view>
			<view class="tab-item" :class="{ active: currentTab === 2}" @click="switchTab(2)">
				已完成
			</view>
		</view>

		<!-- 中间内容区域：Swiper -->
		<swiper class="swiper-container" :current="currentTab" @change="onSwiperChange" :duration="300">
			<!-- Tab 0: 任务详情 -->
			<swiper-item class="swiper-item">
				<scroll-view scroll-y="true" style="height: calc(100vh - 40px); padding: 10px;min-height: calc(100vh - 40px);"  @scrolltolower="onScrollToLower0"
					:refresher-enabled="true" :refresher-triggered="refresherTriggered0" 
					@refresherrefresh="onRefresherRefresh0">
					<div class="task-item" v-for="(task,index) in taskList0" @click="clickTaskItem(task)">
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
					<view v-if="taskList0==null || taskList0== '' || taskList0.length == 0"
						style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
						<image src="/static/nodata.png" mode="aspectFit" style="width: 150px; height: 150px;">
						</image>
						<view style="font-size: 16px;color: #808080">-暂无数据-</view>
					</view>
					<view v-else><uni-load-more :status="xlstatus0" /></view>
				</scroll-view>
			</swiper-item>

			<swiper-item class="swiper-item">
				<scroll-view scroll-y="true" style="height: calc(100vh - 40px); padding: 10px;min-height: calc(100vh - 40px);"  @scrolltolower="onScrollToLower1"
					:refresher-enabled="true" :refresher-triggered="refresherTriggered1"
					@refresherrefresh="onRefresherRefresh1">
					<div class="task-item" v-for="(task,index) in taskList1" @click="clickTaskItem(task)">
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
						<div v-if="task.status=='NORMAL'" class="task-status status-wait">待开始</div>
						<div v-if="task.status=='START'" class="task-status status-active">生产中</div>
						<div v-if="task.status=='PAUSE'" class="task-status status-pending">暂停</div>
						<div v-if="task.status=='FINISHED'" class="task-status status-completed">完成</div>
					</div>
					<view v-if="taskList1==null || taskList1== '' || taskList1.length == 0"
						style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
						<image src="/static/nodata.png" mode="aspectFit" style="width: 150px; height: 150px;">
						</image>
						<view style="font-size: 16px;color: #808080">-暂无数据-</view>
					</view>
					<view v-else><uni-load-more :status="xlstatus1" /></view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y="true" style="height: calc(100vh - 40px); padding: 10px;min-height: calc(100vh - 40px);"  @scrolltolower="onScrollToLower2"
					:refresher-enabled="true" :refresher-triggered="refresherTriggered2"
					@refresherrefresh="onRefresherRefresh2">
					<div class="task-item" v-for="(task,index) in taskList2" @click="clickTaskItem(task)">
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
						<div v-if="task.status=='NORMAL'" class="task-status status-wait">待开始</div>
						<div v-if="task.status=='START'" class="task-status status-active">生产中</div>
						<div v-if="task.status=='PAUSE'" class="task-status status-pending">暂停</div>
						<div v-if="task.status=='FINISHED'" class="task-status status-completed">完成</div>
					</div>
					<view v-if="taskList2==null || taskList2== '' || taskList2.length == 0"
						style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
						<image src="/static/nodata.png" mode="aspectFit" style="width: 150px; height: 150px;">
						</image>
						<view style="font-size: 16px;color: #808080">-暂无数据-</view>
					</view>
					<view v-else><uni-load-more :status="xlstatus2" /></view>

				</scroll-view>
			</swiper-item>
		</swiper>


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
		myDoingTaskList,
		waitList,
		doneList
	} from '@/api/home/task.js'

	// 是否可以加载更多
	const xlstatus0 = ref('more');
	const xlstatus1 = ref('more');
	const xlstatus2 = ref('more');
	// 生产任务列表
	const taskList0 = ref([])
	const taskList1 = ref([])
	const taskList2 = ref([])
	// 全部任务数量
	const totalTaskCount0 = ref(0)
	const totalTaskCount1 = ref(0)
	const totalTaskCount2 = ref(0)
	const queryParams0 = ref({
		pageSize: 10,
		pageNum: 1
	})
	const queryParams1 = ref({
		pageSize: 10,
		pageNum: 1
	})
	const queryParams2 = ref({
		pageSize: 10,
		pageNum: 1
	})
	const currentTab = ref(0);

	// 记录每个 Tab 是否已初始化
	const hasLoaded0 = ref(false);
	const hasLoaded1 = ref(false);
	const hasLoaded2 = ref(false);

	const refresherTriggered0 = ref(false);
	const refresherTriggered1 = ref(false);
	const refresherTriggered2 = ref(false);

	onLoad((options) => {

	})


	onReady(() => {

	})
	onShow(() => {
		reloadMyTask();
	})



	// 切换 Tab（点击）
	const switchTab = (index) => {
		currentTab.value = index;
		if (
			(index === 0 && !hasLoaded0.value) ||
			(index === 1 && !hasLoaded1.value) ||
			(index === 2 && !hasLoaded2.value)
		) {
			reloadMyTask();
			if (index === 0) hasLoaded0.value = true;
			if (index === 1) hasLoaded1.value = true;
			if (index === 2) hasLoaded2.value = true;
		}
	};

	// 滑动 Swiper 时同步 Tab
	const onSwiperChange = (e) => {
		currentTab.value = e.detail.current;
		if (
			(e.detail.current === 0 && !hasLoaded0.value) ||
			(e.detail.current === 1 && !hasLoaded1.value) ||
			(e.detail.current === 2 && !hasLoaded2.value)
		) {
			reloadMyTask();
			if (e.detail.current === 0) hasLoaded0.value = true;
			if (e.detail.current === 1) hasLoaded1.value = true;
			if (e.detail.current === 2) hasLoaded2.value = true;
		}
	};

	const clickTaskItem = (task) => {
		uni.navigateTo({
			url: '/pages/task/taskdetails/taskdetails?taskId=' + task.taskId,
		});
	}

	const reloadMyTask = () => {

		if (currentTab.value == 0) {
			taskList0.value = [];
			queryParams0.value = {
				pageSize: 10,
				pageNum: 1
			}
		} else if (currentTab.value == 1) {
			taskList1.value = [];
			queryParams1.value = {
				pageSize: 10,
				pageNum: 1
			}
		} else {
			taskList2.value = [];
			queryParams2.value = {
				pageSize: 10,
				pageNum: 1
			}
		}
		loadMyTask();
	}
	const loadMyTask = () => {
		uni.showLoading({
			title: '加载中..',
			mask: true,
		})
		if (currentTab.value == 0) {
			waitList(queryParams0.value).then(res => {
				// console.log(res)
				totalTaskCount0.value = res.total;
				taskList0.value.push(...res.rows)
				if (res.total == undefined) {
					// 标记加载数据完成
					xlstatus0.value = 'more';
				} else if (res.total <= taskList0.value.length) {
					// 标记加载数据完成
					xlstatus0.value = 'noMore';
				} else {
					// 标记还有剩余数据
					xlstatus0.value = 'more';
				}
				uni.hideLoading();
			})
		} else if (currentTab.value == 1) {
			myDoingTaskList(queryParams1.value).then(res => {
				// console.log(res)
				totalTaskCount1.value = res.total;
				taskList1.value.push(...res.rows)
				if (res.total == undefined) {
					// 标记加载数据完成
					xlstatus1.value = 'more';
				} else if (res.total <= taskList1.value.length) {
					// 标记加载数据完成
					xlstatus1.value = 'noMore';
				} else {
					// 标记还有剩余数据
					xlstatus1.value = 'more';
				}
				uni.hideLoading();
			})
		} else {
			doneList(queryParams2.value).then(res => {
				// console.log(res)
				totalTaskCount2.value = res.total;
				taskList2.value.push(...res.rows)
				if (res.total == undefined) {
					// 标记加载数据完成
					xlstatus2.value = 'more';
				} else if (res.total <= taskList2.value.length) {
					// 标记加载数据完成
					xlstatus2.value = 'noMore';
				} else {
					// 标记还有剩余数据
					xlstatus2.value = 'more';
				}
				uni.hideLoading();
			})
		}

	}
	const onScrollToLower0 = () => {
		console.log('load more0')
		loadMore();
	};
	const onScrollToLower1 = () => {
		console.log('load more1')
		loadMore();
	};
	const onScrollToLower2 = () => {
		console.log('load more2')
		loadMore();
	};
	const loadMore = () => {
		if (currentTab.value === 0) {
			if (xlstatus0.value !== 'more') return;
			xlstatus0.value = 'loading';
			queryParams0.value.pageNum++;
		} else if (currentTab.value === 1) {
			if (xlstatus1.value !== 'more') return;
			xlstatus1.value = 'loading';
			queryParams1.value.pageNum++;
		} else {
			if (xlstatus2.value !== 'more') return;
			xlstatus2.value = 'loading';
			queryParams2.value.pageNum++;
		}

		// 延迟加载，避免重复触发
		setTimeout(loadMyTask, 100);
	};

	// /** 生命周期函数--下拉刷新 */
	// onPullDownRefresh(() => {
	// 	console.log('dsds')
	// 	reloadMyTask();
	// 	setTimeout(function() {
	// 		uni.stopPullDownRefresh();
	// 	}, 1000)
	// })
	const onRefresherRefresh0 = () => {
		console.log('refresh0')
		refresherTriggered0.value = true;
		reloadMyTask();
		// 模拟加载完成
		setTimeout(() => {
			refresherTriggered0.value = false;
		}, 1000);
	}
	const onRefresherRefresh1 = () => {
		console.log('refresh1')
		refresherTriggered1.value = true;
		reloadMyTask();
		// 模拟加载完成
		setTimeout(() => {
			refresherTriggered1.value = false;
		}, 1000);
	}
	const onRefresherRefresh2 = () => {
		console.log('refresh2')
		refresherTriggered2.value = true;
		reloadMyTask();
		// 模拟加载完成
		setTimeout(() => {
			refresherTriggered2.value = false;
		}, 1000);
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background-color: #f8f8f8;
		overflow: hidden;
		/* 关键：防止页面本身滚动 */
		position: relative;
	}

	// 顶部 Tab
	.header-tab {
		display: flex;
		background-color: #ffffff;
		border-bottom: 1px solid #e5e5e5;
		z-index: 99;
	}

	.tab-item {
		flex: 1;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		color: #333;
		background-color: #fff;
		position: relative;
	}

	.tab-item.active {
		color: #3498db;
		font-weight: 500;
	}

	.tab-item.active::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 30px;
		height: 3px;
		background-color: #3498db;
		border-radius: 1.5px;
	}

	// Swiper 区域（填充中间）
	.swiper-container {
		flex: 1;
		/* 减去顶部Tab + 底部按钮 */
		background-color: transparent;
		display: flex;
		height: calc(100vh - 40px);
	}

	.swiper-item {
		display: flex;
		flex-direction: column;
		height: 100%;
		/* 关键：让 swiper-item 占满高度 */
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
		margin-bottom: 10px;
	}

	.task-item:hover {
		transform: translateY(-3px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	}

	.task-info {
		flex: 1;
	}

	.task-name {
		font-weight: 600;
		margin-bottom: 8px;
		font-size: 16px;
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

	.card {
		background: white;
		border-radius: 16px;
		padding: 10px;
		margin-bottom: 15px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		transition: all 0.3s ease;
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

	.scroll-content {
		flex: 1;
		height: calc(100vh - 40px);
		/* 关键：scroll-view 必须有高度 */
		overflow-y: auto;
		/* 可选：增强兼容性 */
		padding: 10px;
		background-color: transparent;
	}
</style>