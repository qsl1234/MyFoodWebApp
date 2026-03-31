<template>
	<view style="height: 40px;background-color: #fff;display: flex;width: 100%;">
		<view style="width: 100%;display: flex;flex-direction: row; justify-content: center;align-items: center;font-size: 14px;color: #1a5276;flex: 1;">
			<view v-if="wsStatus">推送:正常</view>
			<view v-else style="color:#e74c3c; display: flex; align-items: center; font-size: 14px;">
			    <text>推送:断开</text>
			    <view @click="initWebSocket" 
			          style="padding:5px 8px; border-radius: 15px; color: #fff; background-color: #1a5276; margin-left: 10px; font-size: 12px; display: flex; align-items: center;">
			        重连
			    </view>
			</view>
		</view>
		<view style="width: 100%;display: flex;justify-content: center;align-items: center;font-size: 14px;color: #1a5276;flex: 1;">
			<view v-if="dzcStatus">电子秤:正常</view>
			<view v-else style="color:#e74c3c">电子秤:断开</view>
		</view>
	</view>
	<view class="container">
		
		<view class="weighing-container">
			<div class="weighing-header">
				<div class="weighing-title">配料任务:{{taskDetails.task.taskName||''}}</div>
				<div style="height: 3px;"/>
				<div class="weighing-subtitle">
					<div style="display: flex;flex-direction: column">
						<span style="font-weight: 500;color: #1a5276;">{{taskDetails.task.reactorName||''}}</span></br><span>{{taskDetails.task.reactorCode||''}}</span>
					</div>
					
					<l-icon name="chevron-right-double" color="#7f8c8d" size="15px" />
					<div style="display: flex;flex-direction: column">
						<span style="font-weight: 500;color: #1a5276;">配方</span></br><span>{{taskDetails.task.recipeName||''}}</span>
					</div>
					<l-icon name="chevron-right-double" color="#7f8c8d" size="15px" />
					<div style="display: flex;flex-direction: column">
						<span style="font-weight: 500;color: #1a5276;">操作员</span></br><span>{{userStore.nick||''}}</span>
					</div>
				</div>
			</div>
			<div class="progress-container">
				<div class="progress-header">
					<span>当前进度</span>
					<span>步骤 {{taskDetails.index||''}}/{{taskDetails.total||''}}</span>
				</div>
				<div class="progress-bar">
					<div class="progress-fill"
						:style="{width: 100*Number(taskDetails.line.realAmount||0)/Number(taskDetails.line.waitAmount||1) + '%'}">
					</div>
				</div>
				<div class="progress-text">
					{{taskDetails.line.itemName}} ({{taskDetails.line.itemCode}}/{{optionsParam.specification}})
				</div>
			</div>
			<div class="material-card">
				<div class="material-header">
					<div class="material-name">{{taskDetails.line.itemName}}</div>
					<div class="material-code">
						<l-icon name="barcode" color="#7f8c8d" size="15px" /> {{taskDetails.line.itemCode}}
					</div>
				</div>
				<div class="material-content">
					<div class="material-item">
						<div class="material-label">目标重量</div>
						<div class="material-value target-value">{{taskDetails.line.waitAmount ||'--'}} <br/>Kg</div>
					</div>
					<div class="material-item">
						<div class="material-label">累计重量</div>
						<div class="material-value actual-value">{{(Number(taskDetails.line.realAmount||0)+(Math.abs(currentWeight)||0)).toFixed(2)||'0'}}
							<br/>Kg</div>
					</div>
					<div class="material-item">
						<div class="material-label">重量偏差</div>
						<div class="material-value deviation-value">{{deviation}}<br/>Kg</div>
					</div>
				</div>
			</div>

			<div class="weight-display">
				<div class="weight-value">{{currentWeight.toFixed(2)}}</div>
				<div class="weight-unit">公斤 (Kg)</div>
				<div v-if="isOverWeight==true" class="weight-status status-error">已超重</div>
			</div>
		</view>
		<div class="controls-grid" v-if="taskDetails.task.status!='FINISHED' && taskDetails.task.status!='END'">
			<button class="btn btn-lg btn-primary" @click="successLine(3)" >
				<l-icon name="pause-circle-stroke" color="#fff" size="15px" /> 暂停/换桶
			</button>
			<button class="btn btn-lg btn-success" @click="successLine(4)">
				<l-icon name="check-circle" color="#fff" size="15px" /> 确认加入
			</button>
			<button class="btn btn-lg btn-warning" @click="uploadError">
				<l-icon name="error-circle" color="#fff" size="15px" /> 异常上报
			</button>
		</div>
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
		onHide,
		onUnload
	} from '@dcloudio/uni-app'
	import useUserStore from '@/store/modules/user'

	const {
		proxy
	} = getCurrentInstance();

	const userStore = useUserStore();
	const currentWeight = ref(0)
	const deviation = ref(0)
	const isOverWeight = ref(false)
	const wsStatus = ref(false)
	const dzcStatus = ref(false)

	userStore.getInfo()
	import {
		lineDetails,
		lineChange,
		getScaleByCode,
	} from '@/api/home/task.js'

	const optionsParam = ref({})
	onLoad((options) => {
		optionsParam.value.taskId = options.taskId;
		optionsParam.value.taskLineId = options.taskLineId;
		optionsParam.value.taskCode = options.taskCode;
		optionsParam.value.itemCode = options.itemCode;
		optionsParam.value.scaleCode = options.scaleCode;
		optionsParam.value.specification = options.specification;
		console.log(options)

	})
	const ws = ref(null)
	const heartbeatInterval = ref(null)
	const WS_URL = ref('')
	// 初始化 WebSocket
	const initWebSocket = () => {
		// 避免重复连接
		if (ws.value) {
			return
		}
		console.log(WS_URL.value)
		ws.value = uni.connectSocket({
			url: WS_URL.value,
			method: 'GET',
			success: () => {
				console.log('建立成功SOCKET')
			},
			fail: (e) => {
				console.log(e)
				uni.showToast({
					title: '获取电子秤数据失败,请退出页面后重试',
					icon: 'none'
				})
			}
		});
		ws.value.onOpen((res) => {
			console.log('✅ WebSocket1 已连接')
			startHeartbeat()
			wsStatus.value=true;
		});
		ws.value.onMessage((event) => {
			console.log('📩 收到消息:', event.data);
			// 处理你的数据，比如更新 currentWeight
			try {
				const info = JSON.parse(event.data);
				if(info.code != 200){
					uni.showToast({
						title:info.msg,
						icon:'none',
						duration:3000,
					});
					return;
				}
				wsStatus.value=true;
				if(info.hasOwnProperty("data")){
					
					if (info.data.weight != undefined && info.data.weight != null) {
						try{
							currentWeight.value = info.data.weight;
							// 更新偏差
							const target = (Math.abs(currentWeight.value) || 0)+Number(taskDetails.value.line.realAmount || 0) - Number(taskDetails.value.line.waitAmount ||0);
							// const target = (taskDetails.value.line.waitAmount || 1) - (taskDetails.value.line.realAmount || 0);
							// deviation.value = (100-(info.data.weight / target) * 100).toFixed(2);
							deviation.value = target.toFixed(2);
							isOverWeight.value = target - Number(taskDetails.value.line.tolerance || 0) > 0 ? true:false;
						} catch(e){
							console.log(e)
						}
					}
					if (info.data.online != undefined && info.data.online != null) {
						try{
							if(info.data.online == 'online'){
								dzcStatus.value = true;
							} else {
								dzcStatus.value = false;
							}
						} catch(e){
							dzcStatus.value = false;
							console.log(e)
						}
					}
					
				}
				
			} catch (e) {
				console.warn('消息解析失败:', event.data);
			}
		});

		ws.value.onError((error) => {
			console.error('❌ WebSocket 错误:', error);
			uni.showToast({
				title: '连接电子秤失败，请检查网络或重试',
				icon: 'none'
			});
			ws.value = null; // 重置
			wsStatus.value=false;
			dzcStatus.value=false;
		});

		ws.value.onClose((res) => {
			console.log('🔌 WebSocket 已关闭:', res);
			stopHeartbeat();
			ws.value = null;
			wsStatus.value=false;
			dzcStatus.value=false;
		});
	}

	// 启动心跳
	const startHeartbeat = () => {
		stopHeartbeat() // 防止重复启动
		heartbeatInterval.value = setInterval(() => {
			if (ws.value) {
				ws.value.send({
					data: '-heartbeat-'
				})
				console.log('💓 发送心跳: -heartbeat-')
			} else {
				console.warn('WebSocket 不可用，连接可能已断开')
			}
		}, 30000) // 每 30 秒发送一次
	}

	// 停止心跳
	const stopHeartbeat = () => {
		if (heartbeatInterval.value) {
			clearInterval(heartbeatInterval.value)
			heartbeatInterval.value = null
		}
	}

	const taskDetails = ref({
		task: {},
		line: {},
		total: null,
		index: null,
		user: null,
	})
	const screeWith = ref(null)
	const globalConfig = ref(getApp().globalData.config);
	onShow(() => {
		if ((optionsParam.value.taskId == null || optionsParam.value.taskId == '' || optionsParam.value.taskId ==
				undefined) ||
			(optionsParam.value.taskLineId == null || optionsParam.value.taskLineId == '' || optionsParam.value
				.taskLineId == undefined) ||
			(optionsParam.value.taskCode == null || optionsParam.value.taskCode == '' || optionsParam.value
				.taskCode == undefined) ||
			(optionsParam.value.itemCode == null || optionsParam.value.itemCode == '' || optionsParam.value
				.itemCode == undefined) ||
			(optionsParam.value.scaleCode == null || optionsParam.value.scaleCode == '' || optionsParam.value
				.scaleCode == undefined)
		) {
			uni.showToast({
				title: '请选择任务',
				icon: 'none',
				duration: 2000,
				complete: () => {
					uni.navigateBack();
				}
			});
		}
		const systemInfo = uni.getSystemInfoSync();

		screeWith.value = systemInfo.windowWidth; // 窗口可用宽度
		loadDetails();
		getScaleInfo();
		 
	})
	const getScaleInfo = () => {
		
		getScaleByCode(optionsParam.value.scaleCode).then(res => {
			if(res.data.status=='online'){
				dzcStatus.value=true;
			} else {
				dzcStatus.value=false;
			}
		}).catch((e) => {
			dzcStatus.value=false;
		})
	}
	onUnload(() => {
		console.log('页面销毁111')
		if (heartbeatInterval.value) {
			clearInterval(heartbeatInterval.value)
			heartbeatInterval.value = null
		}
		if (ws.value) {
			ws.value.close(1000, '页面隐藏，主动关闭')
			ws.value = null
		}
	})
	onHide(() => {
		console.log('页面销毁111')
		
	})
	const loadDetails = () => {
		uni.showLoading({
			title: '正在加载...',
			mask: true
		});
		lineDetails(optionsParam.value.taskCode, optionsParam.value.taskLineId).then(res => {
			taskDetails.value = res.data;
			console.log('111');
			console.log(res);
			uni.hideLoading();
			// 更新偏差
			try{
				const target = Number(taskDetails.value.line.realAmount || 0) - Number(taskDetails.value.line.waitAmount ||0);
				deviation.value = target.toFixed(2);
				isOverWeight.value = target - Number(taskDetails.value.line.tolerance || 0) > 0 ? true:false;
			} catch (e){
				console.log(e)
			}
			
			
			WS_URL.value = globalConfig.value.wsUrl + '?scaleCode=' +
				optionsParam.value.scaleCode + '&taskCode=' + optionsParam.value.taskCode +
				'&itemCode=' + optionsParam.value.itemCode + '&recipeLineId=' + taskDetails.value.line
				.recipeLineId +
				'&userName=' + taskDetails.value.user;
			initWebSocket();
		}).catch((e) => {
			uni.hideLoading();
		});
	}
	// 异常上报
	const uploadError = () => {
		uni.navigateTo({
			url: '/pages/task/errorreport/errorreport?taskId=' + optionsParam.value.taskId + "&taskLineId=" +
				optionsParam.value.taskLineId,
		});
	}

	const successLine = (status) => {
		uni.showLoading({
			title: '正在处理...',
			mask: true,
		})
		var data = {
			taskLineId: optionsParam.value.taskLineId,
			status: status,
			scaleCode: optionsParam.value.scaleCode,
			realAmount: currentWeight.value,
			specification: optionsParam.value.specification,
		};
		lineChange(data).then(res => {
			uni.hideLoading();
			// if(status != 3){
			// 	uni.navigateBack();
			// }
			uni.navigateBack();
			
		}).catch((e) => {
			uni.hideLoading();
			uni.showToast({
				title: '处理失败:' + e,
				icon: 'none'
			});
		});
	}
</script>

<style lang="scss" scoped>
	.controls-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
		gap: 10px;
		margin-bottom: 20px;
	}

	.btn-lg {

		font-size: 16px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* 按钮样式 */
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;

		border-radius: 10px;
		text-align: center;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		border: none;
		font-size: 15px;
		height: 45px;
		white-space: nowrap;
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

	.btn:active {
		transform: translateY(2px);
	}

	.container {
		margin: 0 auto;
		min-height: 100vh;
		background: white;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
		position: relative;
		padding: 10px;
	}

	/* 称重界面 */
	.weighing-container {
		padding: 10px;
		//height: calc(100vh - 50px);
		display: flex;
		flex-direction: column;
		//background: #f5f7fa;
	}

	.weighing-header {
		margin-bottom: 20px;
	}

	.weighing-title {
		font-size: 18px;
		font-weight: 700;
		margin-bottom: 5px;
		color: #1a5276;
	}

	.weighing-subtitle {
		color: #7f8c8d;
		font-size: 15px;
		display: flex;
		align-items: center;
	}


	.progress-container {
		background: white;
		border-radius: 15px;
		padding: 10px;
		margin-bottom: 10px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	.progress-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 15px;
		font-size: 15px;
		color: #7f8c8d;
	}

	.progress-bar {
		height: 12px;
		background: #e0e7f0;
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: 15px;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, #3498db, #2ecc71);
		border-radius: 10px;
		transition: width 0.5s ease;
		position: relative;
		overflow: hidden;
	}

	.progress-fill::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(90deg,
				transparent,
				rgba(255, 255, 255, 0.3),
				transparent);
		animation: progressShine 2s infinite;
	}

	@keyframes progressShine {
		0% {
			transform: translateX(-100%);
		}

		100% {
			transform: translateX(100%);
		}
	}

	.progress-text {
		text-align: center;
		font-weight: 600;
		font-size: 16px;
		color: #2c3e50;
	}

	.material-card {
		background: white;
		border-radius: 16px;
		padding: 10px;
		margin-bottom: 10px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	.material-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 15px;
		padding-bottom: 15px;
		border-bottom: 1px solid #eee;
	}

	.material-name {
		font-weight: 700;
		font-size: 18px;
		color: #2c3e50;
	}

	.material-code {
		color: #7f8c8d;
		font-size: 15px;
		display: flex;
		align-items: center;
	}

	.material-code i {
		margin-right: 6px;
		opacity: 0.7;
	}

	.material-content {
		display: flex;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 10px;
	}

	.material-item {
		flex: 1;
		text-align: center;
		padding: 10px;
		border-radius: 12px;
		background: #f5f7fa;
	}

	.material-label {
		font-size: 15px;
		color: #7f8c8d;
		margin-bottom: 10px;
	}

	.material-value {
		font-size: 20px;
		font-weight: 700;
		// 允许换行
		white-space: normal;     // 移除 nowrap
		word-break: break-all;   // 在任意字符间断行
		text-align: center;
		line-height: 1.2;
	}

	.target-value {
		color: #3498db;
	}

	.actual-value {
		color: #2ecc71;
	}

	.deviation-value {
		color: #f39c12;
	}

	.weight-display {
		background: white;
		border-radius: 16px;
		padding: 30px;
		margin-bottom: 20px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		text-align: center;
		position: relative;
		overflow: hidden;
		border: 2px solid #e0e7f0;
	}

	.weight-display::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #3498db, #2ecc71);
	}

	.weight-value {
		font-size: 64px;
		font-weight: 800;
		color: #2c3e50;
		margin-bottom: 5px;
		font-family: 'Arial', sans-serif;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		
		// 允许换行
		white-space: normal;     // 移除 nowrap
		word-break: break-all;   // 在任意字符间断行
		text-align: center;
		line-height: 1.2;
	}

	.weight-unit {
		font-size: 24px;
		color: #7f8c8d;
		margin-bottom: 20px;
	}

	.weight-status {
		font-size: 18px;
		font-weight: 600;
		padding: 10px 20px;
		border-radius: 30px;
		display: inline-block;
	}

	.status-good {
		background: rgba(46, 204, 113, 0.15);
		color: #2ecc71;
	}

	.status-warning {
		background: rgba(243, 156, 18, 0.15);
		color: #f39c12;
	}

	.status-error {
		background: rgba(231, 76, 60, 0.15);
		color: #e74c3c;
	}
</style>