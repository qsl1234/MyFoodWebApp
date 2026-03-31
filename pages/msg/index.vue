<template>
	<view class="container">
		<!-- 顶部固定，不随页面滚动 -->
		<view class="header">
			<view class="header-menu" @click="chooseMsgType">
				<view>{{msgType.title}}</view>
				<l-icon name="caret-down-small" size="15px" color="#707070"></l-icon>
			</view>
			<view class="header-menu" @click="chooseMsgReadType">
				<view>{{readType.title}}</view>
				<l-icon name="caret-down-small" size="15px" color="#707070"></l-icon>
			</view>
			<view class="header-menu" @click="chooseMsgReadAll">
				<view>全标已读</view>

				<l-icon name="task-checked-1" size="10px" color="#707070"></l-icon>
			</view>
		</view>

		<!-- 内容区域，独立滚动 -->
		<scroll-view class="content-scroll" scroll-y="true" :refresher-triggered="triggered" :refresher-enabled="true"
			@refresherrefresh="onRefresh" @scrolltolower="onScrollToLower" refresher-threshold="60"
			refresher-background="#f8f8f8">
			<div v-for="(msg,index) in msgList" @click="clickNoticeItem(msg)" >
				<div class="message-item">
					<view class="message-icon">
						<l-icon v-if="msg.msgType=='1'" name="task-time" color="#fff" size="20px"></l-icon>
						<l-icon v-else-if="msg.msgType=='2'" name="chart-ring" color="#fff" size="20px"></l-icon>
						<l-icon v-else-if="msg.msgType=='3'" name="system-messages" color="#fff" size="20px"></l-icon>
						<l-icon v-else name="chat-message" color="#fff" size="20px"></l-icon>
					</view>
					<view class="message-content">
						<view class="message-status" v-if="msg.msgType=='1'">生产任务
							<!-- <l-icon v-if="msg.readType == 0" style="margin-left: 5px;" name="circle-filled" color="#ff0000" size="5px"></l-icon> -->
						</view>
						<view class="message-status" v-else-if="msg.msgType=='2'">配料超重
							<!-- <l-icon v-if="msg.readType == 0" style="margin-left: 5px;" name="circle-filled" color="#ff0000" size="5px"></l-icon> -->
						</view>
						<view class="message-status" v-else-if="msg.msgType=='3'">消息通知
							<!-- <l-icon v-if="msg.readType == 0" style="margin-left: 5px;" name="circle-filled" color="#ff0000" size="5px"></l-icon> -->
						</view>
						<view class="message-status" v-else>其他消息
							<!-- <l-icon v-if="msg.readType == 0" style="margin-left: 5px;" name="circle-filled" color="#ff0000" size="5px"></l-icon> -->
						</view>
						<div style="height: 2px;"></div>
						<text class="message-text">{{ msg.msgContent||'' }}</text>
					</view>
					<view class="date-content">
						<text class="message-date">{{ formatTime(msg.createTime||'') }}</text>
						<l-icon v-if="msg.readType == 0" style="margin-top: 10px;" name="circle-filled" color="#ff0000" size="3px"></l-icon>
					</view>
					
				</div>
			</div>
			<view v-if="msgList==null || msgList== '' || msgList.length == 0"
				style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
				<image src="/static/nodata.png" mode="aspectFit" style="width: 150px; height: 150px;"></image>
				<view style="font-size: 16px;color: #808080">-暂无数据-</view>
			</view>
			<view v-else>
				<uni-load-more :status="xlstatus" />
			</view>
		</scroll-view>
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
	} from '@dcloudio/uni-app'
	import dayjs from 'dayjs'
	import isToday from 'dayjs/plugin/isToday' // 引入插件

	dayjs.extend(isToday)
	import {
		readAll,
		updateNotice,
		listNotice
	} from '@/api/home/msg.js'
	const triggered = ref(false); // 控制下拉刷新动画是否显示

	// 是否可以加载更多
	const xlstatus = ref('more');
	// 消息列表
	const msgList = ref([])
	// 全部任务数量
	const totalMsgCount = ref(0)
	const msgType = ref({
		title: '全部消息',
		value: null
	})
	const readType = ref({
		title: '已读/未读',
		value: null
	})
	const queryParams = ref({
		pageSize: 10,
		pageNum: 1,
		msgType: null,
		readType: null,
	})
	// 下拉刷新
	const onRefresh = () => {
		if (!triggered.value) {
			triggered.value = true;
			reloadMyMsg().finally(() => {
				triggered.value = false;
			});
		}
	};

	// 上拉加载更多
	const onScrollToLower = () => {
		console.log('12')
		if (xlstatus.value === 'noMore' || xlstatus.value === 'loading') return;
		xlstatus.value = 'loading';
		queryParams.value.pageNum++;
		loadMyMsg();
	};
	const chooseMsgType = () => {
		uni.showActionSheet({
			title: '请选择消息类型',
			itemList: ['全部消息', '生产任务', '配料超重', '消息通知'],
			success: function(e) {
				console.log(e)
				switch (e.tapIndex) {
					case 0:
						msgType.value = {
							title: '全部消息',
							value: null
						};
						queryParams.value.msgType = null;
						break;
					case 1:
						msgType.value = {
							title: '生产任务',
							value: 1
						};
						queryParams.value.msgType = 1;
						break;
					case 2:
						msgType.value = {
							title: '配料超重',
							value: 2
						};
						queryParams.value.msgType = 2;
						break;
					case 3:
						msgType.value = {
							title: '消息通知',
							value: 3
						};
						queryParams.value.msgType = 3;
						break;
				}

				reloadMyMsg();
			}
		})
	}
	const chooseMsgReadType = () => {
		uni.showActionSheet({
			title: '请选择是否已读',
			itemList: ['已读/未读', '已读', '未读'],
			success: function(e) {
				switch (e.tapIndex) {
					case 0:
						readType.value = {
							title: '已读/未读',
							value: null
						};
						queryParams.value.readType = null;
						break;
					case 1:
						readType.value = {
							title: '已读',
							value: 1
						};
						queryParams.value.readType = 1;
						break;
					case 2:
						readType.value = {
							title: '未读',
							value: 0
						};
						queryParams.value.readType = 0;
						break;
				}
				reloadMyMsg();
			}
		})
	}
	const chooseMsgReadAll = () => {
		uni.showLoading({
			title: '加载中..',
			mask: true,
		})
		readAll().then(res => {
			uni.hideLoading();
			reloadMyMsg();
		}).catch((e) => {
			uni.hideLoading();
		})
	}

	onLoad(() => {

	})

	const screeWith = ref(null)


	onShow(() => {
		const systemInfo = uni.getSystemInfoSync();

		screeWith.value = systemInfo.windowWidth; // 窗口可用宽度
		reloadMyMsg();
	})

	const clickNoticeItem = (notice) => {
		console.log(notice)
		if (notice.readType == 0) {
			// 标记已读
			let param = {
				msgId: notice.id,
				readType: 1
			};
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			updateNotice(param).then(res => {
				uni.hideLoading();
				handleNotice(notice);
			}).catch((e) => {
				uni.hideLoading();
				uni.showToast({
					title: e,
					icon: 'none',
				})
			})
		} else {
			handleNotice(notice);
		}

	}
	const formatTime = (time) => {
		if (dayjs(time).isToday()) {
			return dayjs(time).format("HH:mm")
		} else if (dayjs(time).isSame(dayjs(), 'year')) {
			return dayjs(time).format("MM月DD日")
		} else {
			return dayjs(time).format("YYYY年")
		}
	}
	const handleNotice = (msg) => {
		console.log(msg)
		if (msg.msgType == 3) {
			// 系统通知
			uni.navigateTo({
				url: '/pages/msg/notice/notice?noticeId=' + msg.fromId,
			});
			return;
		} else if (msg.msgType == 1) {
			uni.navigateTo({
				url: '/pages/task/taskdetails/taskdetails?taskId=' + msg.fromId,
			});
		} else if (msg.msgType == 2) {
			uni.navigateTo({
				url: '/pages/task/taskwarn/taskwarn?recordId=' + msg.fromId,
			});
		} else {
			uni.showToast({
				title: '暂不支持此类型',
				icon: 'none'
			})
		}
	}

	const reloadMyMsg = () => {
		msgList.value = [];
		queryParams.value.pageNum = 1;
		queryParams.value.pageSize = 10;
		return loadMyMsg(); // 返回 Promise
	}
	const loadMyMsg = () => {
		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: '加载中..',
				mask: true,
			});

			listNotice(queryParams.value)
				.then(res => {
					totalMsgCount.value = res.total;
					msgList.value.push(...res.rows);

					if (res.total == undefined) {
						xlstatus.value = 'more';
					} else if (res.total <= msgList.value.length) {
						xlstatus.value = 'noMore';
					} else {
						xlstatus.value = 'more';
					}
					uni.hideLoading();
					resolve(res);
				})
				.catch(e => {
					uni.hideLoading();
					reject(e);
				});
		});
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		height: 100vh;
		/* 占满视口高度 */
		overflow: hidden;
		/* 关键：防止页面本身出现滚动条 */
	}

	.header {
		height: 40px;
		background-color: #ffffff;
		color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-shrink: 0;
		/* 防止被压缩 */
	}

	.header-menu {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #333333;
		font-size: 14px;
	}

	.content-scroll {
		flex: 1;
		/* 填满剩余空间 */
		background-color: #ffffff;
		/* scroll-view 在 uni-app 中需要设置 height: 100% 才能生效 */
		height: calc(100vh - 40px);
		transform: translateZ(0);
	}

	.item {
		padding: 15px;
		// border-bottom: 1px solid #ddd;
	}


	.message-item {
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: 10px;
		margin-top: 10px;
	}

	.message-icon {
		width: 35px;
		height: 35px;
		margin-right: 5px;
		border-radius: 50%;
		background-color: #3498db;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		margin-right: 10px;
		font-size: 20px;
	}

	.message-content {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.date-content {
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}

	.message-status {
		font-size: 15px;
		font-weight: 550;
		color: #333;
		margin-bottom: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	.message-text {
		font-size: 13px;
		color: #707070;
		white-space: nowrap;
		/* 不换行 */
		overflow: hidden;
		/* 超出隐藏 */
		text-overflow: ellipsis;
		/* 超出显示省略号 */
		min-width: 0;
	}

	.message-date {
		font-size: 12px;
		color: #999;
		margin-left: 10px;
		flex-shrink: 0;
	}
</style>