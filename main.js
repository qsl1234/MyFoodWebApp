import App from './App'
import store from './store'
import { parseTime, resetForm, addDateRange, handleTree, selectDictLabel, selectDictLabels, tansParams, uniappRules } from '@/utils/ruoyi'
import directive from './directive' // directive
import plugins from './plugins' // plugins
import './permission' // permission
import {
	useDict,useTextDict
} from '@/utils/dict'
import dayjs from 'dayjs'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$adpid = "1111111111"
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import * as Pinia from 'pinia';
import Vuex from "vuex";
export function createApp() {
	const app = createSSRApp(App)

	app.config.globalProperties.$adpid = "1111111111"
	app.config.globalProperties.useDict = useDict
	app.config.globalProperties.useTextDict = useTextDict
	app.config.globalProperties.parseTime = parseTime
	app.config.globalProperties.resetForm = resetForm
	app.config.globalProperties.handleTree = handleTree
	app.config.globalProperties.addDateRange = addDateRange
	app.config.globalProperties.selectDictLabel = selectDictLabel
	app.config.globalProperties.selectDictLabels = selectDictLabels
	app.config.globalProperties.tansParams = tansParams
	app.config.globalProperties.uniappRules = uniappRules
	
	app.config.globalProperties.$backgroundAudioData = {
		playing: false,
		playTime: 0,
		formatedPlayTime: '00:00:00'
	}
	app.use(store)
	app.use(Pinia.createPinia());
	 
	app.use(plugins)
	directive(app)
	return {
		app,
		Vuex, // 如果 nvue 使用 vuex 的各种map工具方法时，必须 return Vuex
		Pinia // 此处必须将 Pinia 返回
	}
}
// #endif
