<template>
	<view class="page">
		<view class="scan-container">
			<div class="scan-header">
				<div class="scan-title">扫码绑定反应釜</div>
				<div class="scan-subtitle">
					请扫描反应釜上的二维码开始配料任务。系统将自动加载配方信息，
					并引导您完成配料过程。
				</div>
			</div>

			<div class="scan-box">
				<div class="scan-frame">
					<div class="scan-line"></div>
					<l-icon name="qrcode" color="#ffffff" size="100px" />
				</div>
				<div class="scan-tip">
					将二维码放入框内，系统将自动识别。如遇扫码问题，
					可选择手动输入反应釜编号。
				</div>

				<div class="scan-actions">
					<button class="btn scan-btn" @click="scanCode">
						<l-icon name="camera" color="#000000" size="16px" />
						<div style="width: 8px;"></div>
						开始扫描
					</button>
					<button class="btn manual-btn" @click="showInputDialog">
						<l-icon name="keyboard" color="#000000" size="16px" />
						<div style="width: 8px;"></div>手动输入
					</button>
				</div>
			</div>
			<uni-popup ref="popCode" type="dialog">
				<uni-popup-dialog ref="inputClose" mode="input" title="反应釜编码" :value="reactorCode"
					placeholder="请输入反应釜编码" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
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

	const popCode = ref(null)
	const reactorCode = ref('')
	onLoad((options) => {
		if (options.taskId) {
			taskId.value = options.taskId;
		}
		if (options.reactorCode) {
			reactorCodeOld.value = options.reactorCode;
		}
	})

	const screeWith = ref(null)
	const taskId = ref(null)
	const reactorCodeOld = ref(null)
	onShow(() => {
		if ((taskId.value == null || taskId.value == '' || taskId.value == undefined) || (reactorCodeOld.value ==
				null || reactorCodeOld.value == '' || reactorCodeOld.value == undefined)) {
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

	})
	const scanCode = () => {
		uni.scanCode({
			onlyFromCamera: false, // 可选：true 表示只从相机扫码，false 可从相册选择
			scanType: ['qrCode'], // 只识别二维码（可选：'barCode', 'datamatrix' 等）
			autoZoom:false,
			success: (res) => {
				let code = res.result;
				console.log(res.result);
				if (code != null && code != undefined && code != '') {
					if (code.startsWith('REACTOR-')) {
						code = code.split('-')[1];
						if (code == reactorCodeOld.value) {
							// 下一步处理
							uni.redirectTo({
								url:'/pages/produce/recipe_line/recipe_line?taskId=' + taskId.value + '&reactorCode=' + reactorCodeOld.value,
							});
						} else {
							uni.showToast({
								title: '请扫描指定的反应釜',
								icon: 'none',
							})
						}
					} else {
						uni.showToast({
							title: '请扫描指定的反应釜二维码',
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
	const showInputDialog = () => {
		reactorCode.value = '';
		popCode.value.open();

	}
	const dialogInputConfirm = (code) => {
		if (code != null && code != undefined && code != '') {
			if (code == reactorCodeOld.value) {
				// 下一步处理
				uni.redirectTo({
					url:'/pages/produce/recipe_line/recipe_line?taskId=' + taskId.value + '&reactorCode=' + reactorCodeOld.value,
				});
			} else {
				uni.showToast({
					title: '请输入指定的反应釜',
					icon: 'none',
				})
			}
		} else {
			uni.showToast({
				title: '请输入正确的反应釜',
				icon: 'none',
			})
		}
	}
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

	.scan-container {
		background: linear-gradient(135deg, #1a5276, #3498db);
		color: white;
		height: 100vh;
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.scan-header {
		text-align: center;
		margin-bottom: 40px;
	}

	.scan-title {
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	.scan-subtitle {
		font-size: 15px;
		opacity: 0.9;
		margin: 0 auto;
		line-height: 1.7;
	}

	.scan-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.scan-frame {
		width: 180px;
		height: 180px;
		position: relative;
		border: 4px solid rgba(255, 255, 255, 0.3);
		border-radius: 20px;
		overflow: hidden;
		margin-bottom: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.scan-frame::before,
	.scan-frame::after {
		content: '';
		position: absolute;
		width: 40px;
		height: 40px;
		border-color: white;
		border-style: solid;
	}

	.scan-frame::before {
		top: 0;
		left: 0;
		border-width: 4px 0 0 4px;
		border-top-left-radius: 16px;
	}

	.scan-frame::after {
		bottom: 0;
		right: 0;
		border-width: 0 4px 4px 0;
		border-bottom-right-radius: 16px;
	}

	.scan-line {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background: #2ecc71;
		animation: scan 3s infinite linear;
		box-shadow: 0 0 10px #2ecc71;
	}

	@keyframes scan {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(280px);
		}
	}

	.scan-icon {
		font-size: 80px;
		opacity: 0.1;
	}

	.scan-tip {
		font-size: 15px;
		margin-bottom: 40px;
		text-align: center;
		line-height: 1.7;
	}

	.scan-actions {
		display: flex;
		justify-content: center;
		gap: 20px;
		width: 100%;
		max-width: 500px;
	}

	.scan-btn {
		flex: 1;
		background: #2ecc71;
		max-width: 220px;
		padding: 16px;
		font-size: 17px;
		border-radius: 12px;
	}

	.manual-btn {
		flex: 1;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(5px);
		max-width: 220px;
		padding: 16px;
		font-size: 17px;
		border-radius: 12px;
	}
</style>