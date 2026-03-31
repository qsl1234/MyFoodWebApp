import {
	defineStore
} from 'pinia'
import config from '@/config'
import storage from '@/utils/storage'
import constant from '@/utils/constant'
import {
	login,
	logout,
	getInfo,
	register
} from '@/api/login'
import {
	getToken,
	setToken,
	removeToken
} from '@/utils/auth'
import profile from '@/static/logo.png';

const baseUrl = config.baseUrl
//判断是不是微服务后台
const isCloud = config.isCloud

const useUserStore = defineStore('user', {
	state: () => ({
		token: getToken(),
		id: '',
		nick: '',
		compCode: '',
		userType: '',
		waiteApproveWork: false,
		sysLogo: '',
		sysName: '',
		name: storage.get(constant.name) || '',
		avatar: storage.get(constant.avatar) || profile,
		roles: storage.get(constant.roles) || [],
		permissions: storage.get(constant.permissions) || []
	}),
	actions: {
		// 登录  
		async login(userInfo) {
			const {
				username,
				password,
				code,
				uuid
			} = userInfo
			try {
				const res = await login(username.trim(), password, code, uuid)
				//判断是微服务后台
				if (isCloud) {
					setToken(res.data.access_token)
					this.token = res.data.access_token
				} else {
					//否则
					setToken(res.token)
					this.token = res.token
				}
				return res
			} catch (error) {
				throw error
			}
		},

		// 获取用户信息  
		async getInfo() {
			try {
				const res = await getInfo()
				const user = res.user || {}
				let avatar = ''
				//判断是微服务后台
				if (isCloud) {
					avatar = user.avatar ? user.avatar : profile
				} else {
					//否则
					avatar = user.avatar ? `${baseUrl}${user.avatar}` : profile
				}
				const username = user.userName || ''
				this.id = user.userId
				this.name = username
				this.avatar = avatar
				this.compCode = user.compCode
				this.userType = user.userType
				this.userName = user.userName
				this.nick = user.nickName
				this.waiteApproveWork = res.waitNotice
				if (res.sysCompConfig != null && res.sysCompConfig != '' && res.sysCompConfig !=
					undefined) {
					this.sysLogo = res.sysCompConfig.logoUrl
					this.sysName = res.sysCompConfig.compName
				}


				if (res.roles && res.roles.length > 0) {
					this.roles = res.roles
					this.permissions = res.permissions
				} else {
					this.roles = ['ROLE_DEFAULT']
					this.permissions = []
				}
				return res
			} catch (error) {
				throw error
			}
		},

		// 退出系统
		async cleanUserInfo() {
			try {
				this.token = ''
				this.roles = []
				this.permissions = []
				removeToken()
				storage.clean()
			} catch (error) {
				throw error
			}
		},

		// 退出系统  
		async logOut() {
			try {
				await logout(this.token)
				this.token = ''
				this.roles = []
				this.permissions = []
				removeToken()
				storage.clean()
			} catch (error) {
				throw error
			}
		},
		
		// 登录
		async registerUser(userInfo) {
			const {
				username,
				password,
				code,
				uuid
			} = userInfo
			try {
				const res = await register(username.trim(), password, code, uuid)
				
				return res
			} catch (error) {
				throw error
			}
		},
	},
})

export default useUserStore