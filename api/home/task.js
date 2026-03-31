import request from '@/utils/request'

// 获取顶部进度
export function getHomeTopInfo(query) {
  return request({
    url: '/dv/task/topInfo',
    method: 'get',
  })
}
//最新任务
export function inTimeList(query) {
	return request({
		url: '/dv/task/inTimeList',
		method: 'get',
		params: query
	})
}
export function myDoingTaskList(query) {
	return request({
		url: '/dv/task/myDoingList',
		method: 'get',
		params: query
	})
}
/**
 * 待开始任务列表
 * @param {Object} query
 */
export function waitList(query) {
	return request({
		url: '/dv/task/unDoList',
		method: 'get',
		params: query
	})
}
/**
 * 已完成任务列表
 * @param {Object} query
 */
export function doneList(query) {
	return request({
		url: '/dv/task/doneList',
		method: 'get',
		params: query
	})
}
/**
 * 根据任务ID获取任务详情-头部信息
 * @param {Number} taskId 任务ID
 */
export function getTaskInfoAndLines(taskId) {
	return request({
		url: '/dv/task/infoLines/'+taskId,
		method: 'get',
	})
}
/**
 * 根据报警ID获取超重信息
 * @param {Number} taskId 任务ID
 */
export function getTaskWarnInfo(recordId) {
	return request({
		url: '/dv/warnRecord/'+recordId,
		method: 'get',
	})
}


export function upTaskErrorInfo(data) {
	return request({
		url: '/dv/taskLine/taskError',
		method: 'post',
		data:data
	})
}
export function listAllLineForTask(taskId) {
	return request({
		url: '/dv/taskLine/listAll?taskId='+taskId,
		method: 'get',
	})
}
export function upBatchCode(batchCode,taskLineId) {
	return request({
		url: '/dv/taskLine/upBatchCode?batchCode='+batchCode+'&taskLineId='+taskLineId,
		method: 'get',
	})
}

export function getBatchCodeList(taskLineId) {
	return request({
		url: '/dv/record/listByLineId?taskLineId='+taskLineId,
		method: 'get',
	})
}

export function doingListOne(reactorCode) {
	return request({
		url: '/dv/task/doingListOne?reactorCode='+reactorCode,
		method: 'get',
	})
}

/**
 * 开始任务
 * @param {Number} taskId 任务ID
 */
export function startTask(taskCode,scaleCode) {
	return request({
		url: '/dv/task/startTask?taskCode='+taskCode+'&scaleCode='+scaleCode,
		method: 'get',
	})
}
/**
 * 暂停任务
 * @param {Number} taskId 任务ID
 */
export function pauseTask(taskCode) {
	return request({
		url: '/dv/task/pauseTask?taskCode='+taskCode,
		method: 'get',
	})
}
export function getReactorByCode(reactorCode) {
	return request({
		url: '/dv/reactor/getInfoByCode?reactorCode='+reactorCode,
		method: 'get',
	})
}
export function getScaleByCode(scaleCode) {
	return request({
		url: '/dv/scale/getInfoByCode?scaleCode='+scaleCode,
		method: 'get',
	})
}
/**
 * 暂停任务
 * @param {Number} taskId 任务ID
 */
export function lineChange(data) {
	return request({
		url: '/dv/taskLine/lineChange',
		method: 'post',
		data:data
	})
}

/**
 * 完成任务
 * @param {Number} taskId 任务ID
 */
export function finishTaskByCode(taskCode) {
	return request({
		url: '/dv/task/finishTask?taskCode='+taskCode,
		method: 'get',
	})
}

/**
 * 任务详情
 * @param {Number} taskId 任务ID
 */
export function lineDetails(taskCode,lineId) {
	return request({
		url: '/dv/taskLine/lineDetails?taskCode='+taskCode+"&lineId="+lineId,
		method: 'get',
	})
}