<template>
	<view class="container">
		<div
			style="margin-top: 10px;margin-bottom: 10px; font-size: 16px;color: #3498db;display: flex;justify-content: left;align-items: center;">
			<l-icon name="error-triangle" color="#3498db" size="16px" />
			中断原因
		</div>
		<view class="textarea-container">
			<textarea v-model="reason" class="textarea" placeholder="请输入中断原因..." :auto-focus="true"
				:show-confirm-bar="false" :maxlength="500" />
			<view class="word-count">{{ reason.length }}/500</view>
		</view>
		<div
			style="margin-top: 20px;margin-bottom: 10px; font-size: 16px;color: #3498db;display: flex;justify-content: left;align-items: center;">
			<l-icon name="image-error" color="#3498db" size="16px" />
			中断图片
		</div>
		<image-upload v-model="imgList" :isShowTip="false" :limit="9" @uploadedSuccessfully="handleUploaded"
			@handleDelete="handleDelete" />
		<!-- 提交按钮 -->
		<view class="submit-container">
			<button class="submit-btn" @click="submit">
				提交
			</button>
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
		onReady
	} from '@dcloudio/uni-app';
	const {
		proxy
	} = getCurrentInstance();
	import {upTaskErrorInfo} from '@/api/home/task.js'
	const reason = ref('')
	const imgList = ref([])
	const taskLineId = ref(null)
	onLoad((options) => {
if (options.taskLineId) {
			taskLineId.value = options.taskLineId
		}
	})
	onShow(() => {

	})
	const handleUploaded = (fileListString) => {
		if (fileListString == "") {
			return
		}
		imgList.value = fileListString.split(',');
	}

	const handleDelete = (fileListString) => {
		if (fileListString == "") {
			imgList.value = [];
			return
		}
		imgList.value = fileListString.split(',');
	}
	
	const submit = ()=>{
		if(reason.value == '' || reason.value == null || reason.value == undefined || reason.value.length == 0){
			uni.showToast({
				title:'请输入中断原因',
				icon:'none'
			});
			return;
		}
		if(imgList.value == '' || imgList.value == null || imgList.value == undefined || imgList.value.length == 0){
			uni.showToast({
				title:'请至少上传一张中断照片',
				icon:'none'
			});
			return;
		}
		uni.showLoading({
			title:'正在提交...',
			mask:true,
		});
		let params = {
			taskLineId:taskLineId.value,
			errorReason:reason.value,
			imgs:imgList.value,
		};
		upTaskErrorInfo(params).then(res=>{
			uni.hideLoading();
			uni.showToast({
				title:'提交成功',
				icon:'none',
				duration:2000,
				complete: () => {
					uni.navigateBack();
				}
			});
		}).catch((e)=>{
			uni.hideLoading();
			uni.showToast({
				title:'提交失败',
				icon:'none',
				duration:2000,
			});
		})
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: #fff;
		padding: 10px;
	}

	.textarea-container {
		background-color: #fff;
		padding: 30rpx;
		border-radius: 16rpx;
		box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
	}

	.textarea {
		width: 100%;
		height: 200rpx;
		font-size: 32rpx;
		color: #333;
		line-height: 1.5;
		padding: 0;
		margin-bottom: 20rpx;
	}

	.word-count {
		text-align: right;
		color: #999;
		font-size: 26rpx;
	}

	.submit-container {
		margin-top: 20px;
		padding: 30rpx 30rpx;
	}

	.submit-btn {
		background-color: #3498db;
		color: white;
		font-size: 34rpx;
		border-radius: 12rpx;
		height: 80rpx;
		line-height: 80rpx;
	}
</style>