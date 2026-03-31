<template>
	<view class="container">
		<scroll-view scroll-y="true" class="scroll-content">
			<view class="card">
				<div class="card-header">
					<div class="card-title">生产任务详情</div>
					<div v-if="taskInfo.task.status=='NORMAL'" class="status status-pending" id="taskStatus">待开始</div>
					<div v-else-if="taskInfo.task.status=='START'" class="status status-processing" id="taskStatus">生产中
					</div>
					<div v-else-if="taskInfo.task.status=='PAUSE'" class="status status-pending" id="taskStatus">暂停
					</div>
					<div v-else-if="taskInfo.task.status=='FINISHED'" class="status status-completed" id="taskStatus">完成
					</div>
				</div>
				<div class="task-basic-info">
					<div class="info-row">
						<div class="info-label">任务编号:</div>
						<div class="info-value">{{taskInfo.task.taskCode||''}}</div>
					</div>
					<div class="info-row">
						<div class="info-label">任务名称:</div>
						<div class="info-value">{{taskInfo.task.taskName||''}}</div>
					</div>
					<div class="info-row">
						<div class="info-label">计划产量:</div>
						<div class="info-value">{{taskInfo.task.recipeCount||''}}Kg</div>
					</div>
					<div class="info-row">
						<div class="info-label">反应釜:</div>
						<div class="info-value">{{taskInfo.task.reactorName||''}}({{taskInfo.task.reactorCode||''}})
						</div>
					</div>
					<div class="info-row">
						<div class="info-label">配方名称:</div>
						<div class="info-value">{{taskInfo.task.recipeName||''}}</div>
					</div>
					<div class="info-row">
						<div class="info-label">创建时间:</div>
						<div class="info-value">{{taskInfo.task.createTime||''}}</div>
					</div>
					<div class="info-row">
						<div class="info-label">负责人:</div>
						<div class="info-value">{{taskInfo.task.teamAdmin||''}}</div>
					</div>
					<div class="info-row" v-if="taskInfo.task.attr3 == 1">
						<div class="info-label">任务提醒:</div>
						<div class="info-value" style="color: #aa0000;">
							存在超重投料</div>
					</div>
				</div>


			</view>
			<!-- 设备选择区域 -->
			<div class="selection-section" v-if="taskInfo.task.status!='FINISHED' && taskInfo.task.status!='END'">
				<!-- 反应釜选择 -->
				<div class="selection-card">
					<div class="selection-header">
						<div class="selection-title">选择反应釜</div>
						<div @click="chooseReactorType" class="status status-online">选择</div>
					</div>
					<div class="selection-list" id="reactorList">
						<div class="selection-item active" v-if="reactorCodeShow==true">
							<div class="device-info">
								<div class="info-value">{{reactorInfo.machineryName}} ({{ reactorInfo.machineryCode }})
								</div>
								<div class="device-status">
									<l-icon name="data-base" color="#00aa00" size="13px" />
									<span>容量: {{reactorInfo.volume}}L</span>
								</div>
							</div>
						</div>
						<div class="selection-item" v-else @click="chooseReactorType">
							<div class="device-info">
								<div class="info-value">请选择反应釜</div>
							</div>
						</div>
					</div>
				</div>
				<div style="height: 10px;"></div>
				<!-- 电子秤选择 -->
				<div class="selection-card">
					<div class="selection-header">
						<div class="selection-title">选择电子秤</div>
						<div @click="chooseScaleType()" class="status status-online">选择</div>
					</div>
					<div class="selection-list">
						<div class="selection-item active" v-if="scaleCodeShow==true">
							<div class="device-info">
								<div class="info-value">{{scaleInfo.machineryName}} ({{ scaleInfo.machineryCode }})
								</div>
								<div class="device-status">
									<l-icon name="time" color="#00aa00" size="13px" />
									<span>精度: ±{{scaleInfo.accuracy.toFixed(2)||''}}kg</span>
									<l-icon v-if="scaleInfo.status != 'online'" name="battery-charging" color="#aa0000"
										size="13px" style="margin-left: 10px;" />
									<span v-if="scaleInfo.status != 'online'">离线</span>
									<l-icon v-if="scaleInfo.status == 'online'" name="base-station" color="#00aa00"
										size="13px" style="margin-left: 10px;" />
									<span v-if="scaleInfo.status == 'online'">在线</span>
								</div>

							</div>
						</div>
						<div class="selection-item" v-else @click="chooseScaleType">
							<div class="device-info">
								<div class="info-value">请选择电子秤</div>
							</div>
						</div>
					</div>

				</div>

			</div>

			<!-- 物料配比进度 -->
			<div class="card">
				<div class="card-header">
					<div class="card-title">物料配比进度</div>
					<div class="card-subtitle">已完成 <span id="completedCount">{{taskInfo.step}}</span>/<span
							id="totalCount">{{taskInfo.total}}</span></div>
				</div>

				<div class="progress-bar">
					<div class="progress-inner" id="progressBar" :style="`width: ${taskInfo.process}%;`"></div>
				</div>

				<div class="material-list">
					<div class="material-item" v-for="(material,index) in taskInfo.lines"
						@click="startProduce(material,index)"
						:style="{ 'border-left': `4px solid ${getStatusColor(material.status)}` }">
						<div class="material-header">
							<div class="material-name">{{material.itemCode}}<div v-if="material.attr1" class="material-guige">({{material.attr1}})</div></div>
							
							<div @click.stop="lookBatchRecord(material.taskLineId)" class="material-spec"
								style="height: 20px;font-size: 13px;display: flex;align-items: center;justify-content: center;">
								批次信息<l-icon name="arrow-right-circle" size="15px" color="#888"></l-icon>
							</div>
						</div>
						<div class="weight-info">
							<div class="target">目标: {{material.waitAmount || 0.00}} kg</div>
							<div class="actual">实际: {{material.realAmount  || 0.00}} kg</div>
						</div>
						<div class="weight-info">
							<div>容差: <span
									:class="getDeviationClass(material.tolerance)">{{ material.tolerance || 0.00 }}kg</span>
							</div>
							<div>偏差:
								<span
									:class="getDeviationClass((material.realAmount || 0) - material.waitAmount)">{{material.status=='1'?'0': ((material.realAmount || 0) - material.waitAmount).toFixed(2) }}kg</span>
							</div>
						</div>
						<div class="status-indicator">
							<div :class="`status-dot ${getStatusDotClass(material.status)}`"></div>
							<span>{{getMaterialStatusText(material.status)}}</span>
						</div>
						
					</div>
				</div>
			</div>
		</scroll-view>

		<div class="action-buttons" id="actionButtons">
			<button class="btn btn-primary" @click="finishTask()"
				v-if="taskInfo.task.status == 'START' || taskInfo.task.status == 'PAUSE'">
				<l-icon name="git-repository" color="#ffffff" size="20px" style="margin-right: 8px;" /> 完成
			</button>
			<button class="btn btn-warning" @click="pauseTaskWork()" v-if="taskInfo.task.status == 'START'"
				style="background: #f39c12;">
				<l-icon name="stop-circle" color="#ffffff" size="20px" style="margin-right: 8px;" /> 暂停任务
			</button>
			<button class="btn btn-danger" @click="uploadError()"
				v-if="taskInfo.task.status == 'NORMAL' ||taskInfo.task.status == 'START' || taskInfo.task.status == 'PAUSE'">
				<l-icon name="error-circle" color="#ffffff" size="20px" style="margin-right: 8px;" />中断上报
			</button>
		</div>


		<uni-popup ref="popReactorCode" type="dialog">
			<uni-popup-dialog ref="inputReactorClose" mode="input" title="反应釜编码" :value="reactorCode"
				placeholder="请输入反应釜编码" @confirm="dialogReactorInputConfirm"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popScaleCode" type="dialog">
			<uni-popup-dialog ref="inputScaleClose" mode="input" title="电子秤编码" :value="scaleCode" placeholder="请输入电子秤编码"
				@confirm="dialogScaleInputConfirm"></uni-popup-dialog>
		</uni-popup>
		<TaskLinePicker ref="pickerLine"></TaskLinePicker>

	</view>
</template>

<script setup>
	import {
		getTaskInfoAndLines,
		startTask,
		pauseTask,
		finishTaskByCode,
		getReactorByCode,
		getScaleByCode,
		upBatchCode,
		doingListOne,
	} from '@/api/home/task.js'
	import {
		ref,
		getCurrentInstance
	} from 'vue';
	import {
		onLoad,
		onShow,
		onReady
	} from '@dcloudio/uni-app'

	onLoad((options) => {
		if (options.taskId) {
			taskId.value = options.taskId
		}

	})
	// 反应釜编码
	const popReactorCode = ref(null)
	const reactorCode = ref(null)
	const reactorCodeShow = ref(false)
	const reactorInfo = ref({})
	const scanReactorCode = () => {
		uni.scanCode({
			onlyFromCamera: false, // 可选：true 表示只从相机扫码，false 可从相册选择
			scanType: ['qrCode'], // 只识别二维码（可选：'barCode', 'datamatrix' 等）
			autoZoom: false,
			success: (res) => {
				let code = res.result;
				let reactorCodeOld = taskInfo.value.task.reactorCode;
				console.log(res.result);
				if (code != null && code != undefined && code != '') {
					if (code.startsWith('REACTOR-')) {
						code = code.split('-')[1];
						if (code == reactorCodeOld) {
							getReactorInfo(code);
						} else {
							// uni.showToast({
							// 	title: '请扫描指定的反应釜',
							// 	icon: 'none',
							// })
							handleQueryOtherTask(code);
						}
					} else {
						uni.showToast({
							title: '请扫描正确的反应釜二维码',
							icon: 'none',
						})
					}
				} else {
					uni.showToast({
						title: '请扫描正确的反应釜',
						icon: 'none',
					})
				}
			},
			fail: (err) => {
				console.error('扫码失败：', err)
				uni.showToast({
					title: '扫码失败',
					icon: 'none'
				})
			}
		})
	}
	const showReactorInputDialog = () => {
		reactorCode.value = '';
		popReactorCode.value.open();
	}
	const dialogReactorInputConfirm = (code) => {
		if (code != null && code != undefined && code != '') {
			console.log(code)
			let reactorCodeOld = taskInfo.value.task.reactorCode;
			if (code == reactorCodeOld) {
				getReactorInfo(code);
			} else {
				// uni.showToast({
				// 	title: '请输入指定的反应釜',
				// 	icon: 'none',
				// });
				handleQueryOtherTask(reactorCode.value);
				reactorCode.value = '';
			}
		} else {
			uni.showToast({
				title: '请输入正确的反应釜',
				icon: 'none',
			});
			reactorCode.value = '';
		}
	}
	const getReactorInfo = (code) => {
		uni.showLoading({
			title: '加载中...',
			mask: true,
		});
		getReactorByCode(code).then(res => {
			reactorInfo.value = res.data;
			reactorCodeShow.value = true;
			console.log(res)
			uni.hideLoading();
		}).catch((e) => {
			uni.hideLoading();
			uni.showToast({
				title: e,
				icon: 'none'
			})
		})
	}

	// 电子秤编码
	const popScaleCode = ref(null)
	const scaleCode = ref(null)
	const scaleCodeShow = ref(false)
	const scaleInfo = ref({})
	const scanScaleCode = () => {
		uni.scanCode({
			onlyFromCamera: false, // 可选：true 表示只从相机扫码，false 可从相册选择
			scanType: ['qrCode'], // 只识别二维码（可选：'barCode', 'datamatrix' 等）
			autoZoom: false,
			success: (res) => {
				let code = res.result;
				console.log(res.result);
				if (code != null && code != undefined && code != '') {
					if (code.startsWith('SCALE-')) {
						code = code.split('-')[1];
						getScaleInfo(code);
					} else {
						uni.showToast({
							title: '请扫描指定的电子秤二维码',
							icon: 'none',
						})
					}
				} else {
					uni.showToast({
						title: '请扫描正确的电子秤',
						icon: 'none',
					})
				}
			},
			fail: (err) => {
				console.error('扫码失败：', err)
				uni.showToast({
					title: '扫码失败',
					icon: 'none'
				})
			}
		})
	}
	const showScaleInputDialog = () => {
		scaleCode.value = '';
		popScaleCode.value.open();
	}
	const dialogScaleInputConfirm = (code) => {
		if (code != null && code != undefined && code != '') {
			console.log(code)
			getScaleInfo(code);
		} else {
			uni.showToast({
				title: '请输入正确的电子秤',
				icon: 'none',
			});
			reactorCode.value = '';
		}
	}
	const getScaleInfo = (code) => {
		uni.showLoading({
			title: '加载中...',
			mask: true,
		});
		getScaleByCode(code).then(res => {
			scaleInfo.value = res.data;
			scaleCodeShow.value = true;
			console.log(res)
			uni.hideLoading();
		}).catch((e) => {
			uni.hideLoading();
			uni.showToast({
				title: e,
				icon: 'none'
			})
		})
	}
	const lookBatchRecord = (taskLineId) => {
		uni.navigateTo({
			url: '/pages/task/batch_record/batch_record?taskLineId=' + taskLineId,
		})
	}

	const handleQueryOtherTask = (reactor) => {
		console.log(reactor);
		uni.showLoading({
			title: '加载中...',
			mask: true,
		});
		doingListOne(reactor).then(res => {
			reactorInfo.value = res.data.reactor;
			reactorCodeShow.value = true;

			taskId.value = res.data.task.taskId;
			taskInfo.value = res.data;
			console.log(res)
			uni.hideLoading();
		}).catch((e) => {
			console.log(e);
			uni.hideLoading();
			uni.showToast({
				title: e,
				icon: 'none'
			})
		})
	}

	import TaskLinePicker from '@/components/task_line_picker/index.vue'

	const taskId = ref(null)
	const taskInfo = ref({
		task: {},
		lines: [],
		process: 0,
		step: 0,
		total: 0,
	})
	const screeWith = ref(null)
	const pickerLine = ref(null)
	onReady(() => {

	})
	onShow(() => {
		const systemInfo = uni.getSystemInfoSync();

		screeWith.value = systemInfo.windowWidth; // 窗口可用宽度
		if (taskId.value == null || taskId.value == '' || taskId.value == undefined) {
			uni.showToast({
				icon: 'none',
				title: '获取内容失败，内容不存在',
				duration: 3000,
				complete: function() {
					uni.navigateBack();
				}
			})
		} else {
			loadTaskInfo();
		}
	})
	const chooseReactorType = () => {
		uni.showActionSheet({
			title: '请选择方式',
			itemList: ['扫描二维码', '输入反应釜编码'],
			success: function(e) {
				switch (e.tapIndex) {
					case 0:
						scanReactorCode();
						break;
					case 1:
						reactorCode.value = '';
						showReactorInputDialog();
						break;
				}
			}
		})
	}
	const chooseScaleType = () => {
		uni.showActionSheet({
			title: '请选择方式',
			itemList: ['扫描二维码', '输入电子秤编码'],
			success: function(e) {
				switch (e.tapIndex) {
					case 0:
						scanScaleCode();
						break;
					case 1:
						scaleCode.value = '';
						showScaleInputDialog();
						break;
				}
			}
		})
	}
	const loadTaskInfo = () => {
		uni.showLoading({
			title: '加载中...',
			mask: true,
		});
		getTaskInfoAndLines(taskId.value).then(res => {
			taskInfo.value = res.data;
			console.log(res)
			uni.hideLoading();
			if ((taskInfo.value.task.status == 'PAUSE' || taskInfo.value.task.status == 'START') && taskInfo
				.value.task.attr2 != '' && taskInfo.value.task
				.attr1 != '') {
				console.log(111)
				getScaleInfo(taskInfo.value.task.attr2);
				getReactorInfo(taskInfo.value.task.attr1);
			} else if ((taskInfo.value.task.status == 'PAUSE' || taskInfo.value.task.status == 'START' ||
					taskInfo.value.task.status == 'NORMAL') && (taskInfo.value.task.attr2 == '' || taskInfo
					.value.task.attr2 == undefined || taskInfo.value.task.attr2 == null)) {
				let code = uni.getStorageSync('scale_code');
				console.log('sssss:' + code);
				if (code != undefined && code != null && code != '') {
					getScaleInfo(code);
				}
			}
		}).catch((e) => {
			uni.hideLoading();
			uni.showToast({
				title: e,
				icon: 'none'
			})
		})
	}


	const showPicker = ref(false);
	// 异常上报
	const uploadError = () => {
		uni.$off('onTaskLineSelect');
		pickerLine.value.open(taskId.value);
		console.log('eee')

		uni.$on('onTaskLineSelect', (line) => {
			console.log(line);
			uni.navigateTo({
				url: '/pages/task/errorreport/errorreport?taskId=' + taskId.value + "&taskLineId=" +
					line.taskLineId,
			});
		})
	}
	// 完成生产
	const finishTask = () => {
		uni.showModal({
			title: '提示',
			content: '是否确认完成此任务?',
			cancelText: '取消',
			cancelColor: '#333',
			confirmText: '确认完成',
			confirmColor: '#52c41a',
			success: function(isOk) {
				if (isOk.confirm) {
					commitFinish();
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}

		})

	}

	const commitFinish = () => {
		uni.showLoading({
			title: '正在提交...',
			mask: true,
		});
		finishTaskByCode(taskInfo.value.task.taskCode).then(res => {
			console.log(res)
			uni.hideLoading();
			//loadTaskInfo();
			uni.navigateBack();
		}).catch((e) => {
			uni.hideLoading();
			uni.showToast({
				title: e,
				icon: 'none'
			})
		})
	}

	const backPage = () => {
		uni.navigateBack();
	}
	const toCDB = (str) => {
		var tmp = "";
		for (var i = 0; i < str.length; i++) {
			if (str.charCodeAt(i) > 65248 && str.charCodeAt(i) < 65375) {
				tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
			} else {
				tmp += String.fromCharCode(str.charCodeAt(i));
			}
		}
		return tmp
	}


	const startProduce = (line, index) => {
		if (taskInfo.value.task.status == 'FINISHED') {
			return;
		}
		if (Object.keys(reactorInfo.value).length == 0) {
			console.log('1')
			uni.showToast({
				title: '请选择反应釜',
				icon: 'none'
			});
			return;
		}
		if (Object.keys(scaleInfo.value).length == 0) {
			uni.showToast({
				title: '请选择电子秤',
				icon: 'none'
			});
			return;
		}
		if (line.status == '4' || line.status == '5') {
			uni.showToast({
				title: '此物料已投料完毕,请按照顺序选择其他物料',
				icon: 'none'
			});
			return;
		}
		// let lines = taskInfo.value.lines;
		// for (let i = 0; i < index; i++) {
		// 	try{
		// 		const status = lines[i].status;
		// 		if (status != 4 && status != 5) {

		// 			uni.showToast({
		// 				title: '请先完成第' + (i + 1) + '步骤的物料投料',
		// 				icon: 'none',
		// 				duration: 2000
		// 			});
		// 			return;
		// 		}
		// 	} catch(e){
		// 		console.log(e)
		// 		return;
		// 	}

		// }
		
		
		uni.scanCode({
			onlyFromCamera: false, // 可选：true 表示只从相机扫码，false 可从相册选择
			scanType: ['qrCode'], // 只识别二维码（可选：'barCode', 'datamatrix' 等）
			autoZoom: false,
			success: (res) => {
				let code = res.result;
				
				

				if (code != null && code != undefined && code != '') {
					try {
						code = toCDB(code);
						console.log(code);
						const parts = code.split('*').filter(part => part.trim() !== '');
						const itemCode = parts[1]; // 索引0
						const batchCode = parts[2]; // 索引2
						if(line.attr1 != undefined && line.attr1 != null && line.attr1 != ''){
							if(line.attr1 != batchCode){
								uni.showToast({
									title: '请扫描指定的物料',
									icon: 'none',
								})
								return;
							}
						}
						if (itemCode == line.itemCode) {
							uni.showLoading({
								title: '加载中...',
								mask: true,
							});
							startTask(line.taskCode, scaleInfo.value.machineryCode).then(res => {
								console.log(res)
								uni.hideLoading();
								uni.showLoading({
									title: '加载中...',
									mask: true,
								});
								upBatchCode(batchCode, line.taskLineId).then(res => {
									uni.setStorageSync('scale_code', scaleInfo.value
										.machineryCode);
									uni.hideLoading();
									uni.navigateTo({
										url: '/pages/produce/start_produce/start_produce?taskId=' +
											line.taskId + "&taskLineId=" +
											line.taskLineId + "&taskCode=" + line
											.taskCode + "&itemCode=" +
											line.itemCode + "&scaleCode=" +
											scaleInfo.value.machineryCode +
											"&specification=" + batchCode,
									})
								}).catch((e) => {
									uni.hideLoading();
									uni.showToast({
										title: e,
										icon: 'none'
									})
								})
							}).catch((e) => {
								uni.hideLoading();
								uni.showToast({
									title: e,
									icon: 'none'
								})
							})


						} else {
							uni.showToast({
								title: '请扫描指定的物料',
								icon: 'none',
							})
						}
					} catch (e) {
						uni.showToast({
							title: '请扫描指定的物料' + e,
							icon: 'none',
						})
					}
				} else {
					uni.showToast({
						title: '请扫描正确的物料',
						icon: 'none',
					})
				}
			},
			fail: (err) => {
				console.error('扫码失败：', err)
				uni.showToast({
					title: '扫码失败',
					icon: 'none'
				})
			}
		})

	}
	// 开始生产
	const pauseTaskWork = () => {
		uni.showLoading({
			title: '加载中...',
			mask: true,
		});
		pauseTask(taskInfo.value.task.taskCode).then(res => {
			console.log(res)
			uni.hideLoading();
			loadTaskInfo();
		}).catch((e) => {
			uni.hideLoading();
			uni.showToast({
				title: e,
				icon: 'none'
			})
		})
	}
	// 获取状态颜色
	const getStatusColor = (status) => {
		switch (status) {
			case '1':
				return '#ccc';
			case '2':
				return '#1890ff';
			case '4':
				return '#52c41a';
			case '3':
				return '#ff9900';
			case '5':
				return '#dd524d';
			default:
				return '#ccc';
		}
	}

	// 获取状态点类名
	const getStatusDotClass = (status) => {
		switch (status) {
			case '1':
				return 'dot-pending';
			case '2':
				return 'dot-processing';
			case '4':
				return 'dot-completed';
			case '3':
				return 'dot-warning';
			case '5':
				return 'dot-error';
			default:
				return 'dot-pending';
		}
	}

	// 获取物料状态文本
	const getMaterialStatusText = (status) => {
		console.log(status)
		switch (status) {
			case '1':
				return '未投料';
			case '2':
				return '投料中';
			case '4':
				return '已完成';
			case '3':
				return '暂停(换桶)';
			case '5':
				return '超重';
			default:
				return '未知';
		}
	}

	// 获取偏差类名
	const getDeviationClass = (deviation) => {
		deviation = parseFloat(deviation);
		if (deviation <= 1) return 'deviation-good';
		if (deviation <= 3) return 'deviation-warning';
		return 'deviation-error';
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: #f5f7fa;
		color: #333;
		padding: 10px;
		line-height: 1.6;
	}

	.card {
		background: #fff;
		border-radius: 12px;
		padding: 10px;
		margin-bottom: 10px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		transition: transform 0.2s;
	}

	.card:hover {
		transform: translateY(-2px);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid #eee;
	}

	.card-title {
		font-size: 16px;
		font-weight: bold;
		color: #1a1a1a;
	}

	.card-subtitle {
		font-size: 16px;
		color: #666;
	}

	.info-row {
		display: flex;
		margin-bottom: 12px;
	}

	.info-label {
		/* width: 120px; */
		color: #666;
		font-size: 15px;
		margin-right: 20px;
	}

	.info-value {
		/* flex: 1; */
		color: #333;
		font-size: 15px;
		font-weight: 400;
	}

	.status {
		padding: 6px 16px;
		border-radius: 20px;
		font-size: 13px;
		font-weight: 600;
	}

	.status-processing {
		background: #e6f7ff;
		color: #1890ff;
	}

	.status-completed {
		background: #f6ffed;
		color: #52c41a;
	}

	.status-pending {
		background: #fff6e6;
		color: #ff9900;
	}

	.status-online {
		background: #f6ffed;
		color: #52c41a;
	}

	.status-offline {
		background: #fff1f0;
		color: #ff4d4f;
	}

	.progress-bar {
		height: 10px;
		background: #f0f0f0;
		border-radius: 5px;
		margin: 20px 0;
		overflow: hidden;
	}

	.progress-inner {
		height: 100%;
		background: #4cd964;
		border-radius: 5px;
		transition: width 0.5s ease;
	}

	.material-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.material-item {
		display: flex;
		flex-direction: column;
		padding: 16px;
		border-radius: 8px;
		background: #f9f9f9;
		border-left: 4px solid #ccc;
	}

	.material-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 12px;
	}

	.material-name {
		font-weight: bold;
		font-size: 16px;
		color: #1a1a1a;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.material-guige {
		color: #3498db;
		font-size: 16px;
	}
	.material-spec {
		color: #888;
		font-size: 14px;
	}

	.weight-info {
		display: flex;
		justify-content: space-between;
		margin-bottom: 8px;
	}

	.deviation {
		font-size: 14px;
		font-weight: 500;
	}

	.deviation-good {
		color: #4cd964;
	}

	.deviation-warning {
		color: #ff9900;
	}

	.deviation-error {
		color: #dd524d;
	}

	.status-indicator {
		display: flex;
		align-items: center;
		margin-top: 8px;
	}

	.status-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		margin-right: 8px;
	}

	.dot-pending {
		background: #ccc;
	}

	.dot-processing {
		background: #1890ff;
	}

	.dot-completed {
		background: #52c41a;
	}

	.dot-warning {
		background: #ff9900;
	}

	.dot-error {
		background: #dd524d;
	}

	.monitor-section {
		text-align: center;
		padding: 20px 0;
	}



	.comparison {
		display: flex;
		justify-content: space-between;
		margin: 15px 0;
	}

	.progress-container {
		margin: 25px 0;
		position: relative;
	}

	.progress-text {
		position: absolute;
		right: 0;
		top: -25px;
		font-size: 14px;
		color: #666;
	}

	.action-buttons {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}

	.btn {
		margin-top: 10px;
		padding: 12px 20px;
		border: none;
		border-radius: 6px;
		font-size: 15px;
		font-weight: 500;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 45px;
		transition: all 0.2s;
	}

	.btn:hover {
		opacity: 0.9;
		transform: translateY(-2px);
	}

	.btn-primary {
		background: #1890ff;
		color: white;
	}

	.btn-warning {
		background: #ff9900;
		color: white;
	}

	.btn-danger {
		background: #dd524d;
		color: white;
	}

	.btn-success {
		background: #4cd964;
		color: white;
	}

	.btn-default {
		background: #f0f0f0;
		color: #333;
	}

	.complete-section {
		margin-top: 30px;
		text-align: center;
	}

	.modal {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1000;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background: white;
		border-radius: 12px;
		padding: 10px;
		width: 90%;
		max-width: 500px;
		max-height: 80vh;
		overflow-y: auto;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.modal-title {
		font-size: 20px;
		font-weight: bold;
	}

	.modal-close {
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;
		color: #888;
	}

	.material-option {
		display: flex;
		justify-content: space-between;
		padding: 12px;
		border-bottom: 1px solid #eee;
		cursor: pointer;
	}

	.material-option:hover {
		background: #f0f7ff;
	}

	.material-option.active {
		background: #e6f7ff;
	}

	.modal-actions {
		display: flex;
		gap: 12px;
		margin-top: 20px;
	}

	.selection-section {
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
	}

	.selection-card {
		flex: 1;
		background: #fff;
		border-radius: 12px;
		padding: 10px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}

	.selection-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

	.selection-title {
		font-size: 16px;
		font-weight: bold;
	}

	.selection-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.selection-item {
		display: flex;
		justify-content: space-between;
		padding: 12px;
		border-radius: 8px;
		background: #f9f9f9;
		cursor: pointer;
	}

	.selection-item:hover {
		background: #f0f7ff;
	}

	.selection-item.active {
		background: #e6f7ff;
		border: 1px solid #1890ff;
	}

	.device-info {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.device-status {
		display: flex;
		align-items: center;
		gap: 6px;
	}
</style>