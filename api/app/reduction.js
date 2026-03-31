import request from '@/utils/request'

// 查询店鋪公告列表
export function listReduction(query) {
  return request({
    url: '/app/reduction/list',
    method: 'get',
    params: query
  })
}

// 查询店鋪公告详细
export function getReduction(id) {
  return request({
    url: '/app/reduction/' + id,
    method: 'get'
  })
}

// 新增店鋪公告
export function addReduction(data) {
  return request({
    url: '/app/reduction',
    method: 'post',
    data: data
  })
}

// 修改店鋪公告
export function updateReduction(data) {
  return request({
    url: '/app/reduction',
    method: 'put',
    data: data
  })
}

// 删除店鋪公告
export function delReduction(id) {
  return request({
    url: '/app/reduction/' + id,
    method: 'delete'
  })
}
