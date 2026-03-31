<template>
	<view class="page">
		<view class="content">
			<view class="card">
				<uni-forms ref="form" :value="user" labelWidth="80px">
					<uni-forms-item name="oldPassword" label="旧密码">
						<uni-easyinput type="password" v-model="user.oldPassword" placeholder="请输入旧密码" />
					</uni-forms-item>
					<uni-forms-item name="newPassword" label="新密码">
						<uni-easyinput type="password" v-model="user.newPassword" placeholder="请输入新密码" />
					</uni-forms-item>
					<uni-forms-item name="confirmPassword" label="确认密码">
						<uni-easyinput type="password" v-model="user.confirmPassword" placeholder="请确认新密码" />
					</uni-forms-item>
					<button style="height: 40px;background: #3498db;color: #ffffff;font-size: 16px;" @click="submit">提交</button>
				</uni-forms>
			</view>
		</view>
		
	</view>
</template>

<script setup>
	import {
		updateUserPwd
	} from "@/api/system/user"
	import {
		onReady
	} from '@dcloudio/uni-app'
	import {
		ref,
		getCurrentInstance,
	} from 'vue'
	const {
		proxy
	} = getCurrentInstance();
	const user = ref({
		oldPassword: undefined,
		newPassword: undefined,
		confirmPassword: undefined
	});
	const rules = ref({
		oldPassword: {
			rules: [{
				required: true,
				errorMessage: '旧密码不能为空'
			}]
		},
		newPassword: {
			rules: [{
					required: true,
					errorMessage: '新密码不能为空',
				},
				{
					minLength: 6,
					maxLength: 20,
					errorMessage: '长度在 6 到 20 个字符'
				}
			]
		},
		confirmPassword: {
			rules: [{
				required: true,
				errorMessage: '确认密码不能为空'
			}, {
				validateFunction: (rule, value, data) => data.newPassword === value,
				errorMessage: '两次输入的密码不一致'
			}]
		}
	})

	onReady(() => {
		proxy.$refs.form.setRules(rules.value)
	})
	
	const submit = () => {
		proxy.$refs.form.validate().then(res => {
			uni.showLoading({
				title:'正在修改...',
				mask:true,
			})
			updateUserPwd(user.value.oldPassword, user.value.newPassword).then(response => {
				proxy.$modal.msgSuccess("修改成功");
				uni.hideLoading();
				uni.clearStorageSync();
				proxy.$tab.reLaunch('/pages/login');
			})
		})
	}
</script>



<style lang="scss" scoped>
	.page {
		margin: 0 auto;
		min-height: 100vh;
		background: white;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
		position: relative;
	} 
	  /* 主内容区 */
	  .content {
	  	padding: 10px;
	  }
	  /* 卡片样式 */
	  .card {
	  	background: white;
	  	border-radius: 16px;
	  	padding: 10px;
	  	margin-bottom: 15px;
	  	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	  	transition: all 0.3s ease;
	  }
</style>