import request from '@/utils/request'

// 查询消息记录列表
export function listAllScale(query) {
  return request({
    url: '/dv/scale/listAll',
    method: 'get',
    params: query
  })
}