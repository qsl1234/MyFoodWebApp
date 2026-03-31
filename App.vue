<script>
	import {
		mapMutations
	} from 'vuex'
	import {
		version
	} from './package.json'

	import config from './config'
	import store from '@/store'
	import {
		getAppVersion
	} from '@/api/system/config'
	import {
		getToken
	} from '@/utils/auth'
	export default {
		onLaunch: function() {
			this.initApp()
			// #ifdef H5
			console.log(
				`%c hello uniapp %c v${version} `,
				'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
				'background:#007aff ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;'
			)
			// #endif
			console.log('App Launch');

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			test: ''
		},
		methods: {
			...mapMutations(['setUniverifyErrorMsg', 'setUniverifyLogin']),

			// 初始化应用
			initApp() {
				// 初始化应用配置
				this.initConfig()
				// 检查用户登录状态
				//#ifdef H5
				this.checkLogin()
				//#endif
				// #ifdef APP
				this.checkVersion();
				// #endif
			},
			checkVersion() {
				let appVersion = plus.runtime.version
				let os = '';
				let plt = uni.getSystemInfoSync().platform;
				if (plt == 'ios') {
					os = '2';
				} else if (plt == 'android') {
					os = '1';
				} else if (plt == 'harmonyos') {
					os = '4';
				} else {
					return;
				}
				getAppVersion(os, appVersion).then(res => {

					if (res.code == 200) {
						if (res.data.update == true) {
							uni.showModal({
								title: '发现新版本',
								content: res.data.info,
								showCancel: res.data.force == false,
								success: function(res1) {
									if (res1.confirm) {
										plus.runtime.openWeb(res.data.url);
									} else if (res1.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
					} else {}
				}).catch((res) => {})
			},
			initConfig() {
				this.globalData.config = config
			},
			checkLogin() {
				if (!getToken()) {
					this.$tab.reLaunch('/pages/login')
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '@/uni_modules/uni-scss/index.scss';
	@import '@/static/scss/index.scss';
	/* #ifndef APP-PLUS-NVUE */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	@import '@/static/customicons.css';

	/* H5 兼容 pc 所需 */
	/* #ifdef H5 */
	@media screen and (min-width: 768px) {
		body {
			overflow-y: scroll;
		}
	}

	/* 顶栏通栏样式 */
	/* .uni-top-window {
	    left: 0;
	    right: 0;
	} */

	uni-page-body {
		background-color: #F5F5F5 !important;
		min-height: 100% !important;
		height: auto !important;
	}

	.uni-top-window uni-tabbar .uni-tabbar {
		background-color: #fff !important;
	}

	.uni-app--showleftwindow .hideOnPc {
		display: none !important;
	}

	/* #endif */

	/* 以下样式用于 hello uni-app 演示所需 */
	page {
		background-color: #efeff4;
		height: 100%;
		font-size: 28rpx;
		/* line-height: 1.8; */
	}

	.fix-pc-padding {
		padding: 0 50px;
	}

	.uni-header-logo {
		padding: 30rpx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10rpx;
	}

	.uni-header-image {
		width: 100px;
		height: 100px;
	}

	.uni-hello-text {
		color: #7A7E83;
	}

	.uni-hello-addfile {
		text-align: center;
		line-height: 300rpx;
		background: #FFF;
		padding: 50rpx;
		margin-top: 10px;
		font-size: 38rpx;
		color: #808080;
	}

	/* #endif*/
</style>