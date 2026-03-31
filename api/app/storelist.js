import request from '@/utils/request'

// 查询店铺（分店）信息列表
export function listList(query) {
  return request({
    url: '/app/storeList/list',
    method: 'get',
    params: query
  })
}

export function listMyStore(query) {
  return request({
    url: '/app/storeList/listMy',
    method: 'get',
    params: query
  })
}

// 查询店铺（分店）信息详细
export function getList(id) {
  return request({
    url: '/app/storeList/' + id,
    method: 'get'
  })
}

// 新增店铺（分店）信息
export function addList(data) {
  return request({
    url: '/app/storeList',
    method: 'post',
    data: data
  })
}

// 修改店铺（分店）信息
export function updateList(data) {
  return request({
    url: '/app/storeList',
    method: 'put',
    data: data
  })
}

// 删除店铺（分店）信息
export function delList(id) {
  return request({
    url: '/app/storeList/' + id,
    method: 'delete'
  })
}
