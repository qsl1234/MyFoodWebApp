import request from '@/utils/request'

// 根据参数键名查询参数值
export function getConfigKey(configKey) {
  return request({
    url: '/system/config/configKey/' + configKey,
    method: 'get'
  })
}


export function scanMethodPost(url,data) {
  return request({
    url: url,
    method: 'post',
	data:data
  })
}

export function getAppVersion(os,version) {
  return request({
    url: '/app/version/getAppVersion?os='+os+'&version='+version,
    method: 'get',
  })
}
export function getIosAppVersion(version) {
  return request({
    url: '/app/version/getIosAppVersion?version='+version,
    method: 'get',
  })
}
