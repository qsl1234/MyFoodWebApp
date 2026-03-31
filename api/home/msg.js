import request from '@/utils/request'

// 查询消息记录列表
export function listNotice(query) {
  return request({
    url: '/sys/notice/list',
    method: 'get',
    params: query
  })
}

// 修改消息记录
export function updateNotice(data) {
  return request({
    url: '/sys/notice/update',
    method: 'get',
    params: data
  })
}
/**
 * 全标已读
 */
export function readAll() {
  return request({
    url: '/sys/notice/readAll',
    method: 'get',
  })
}
/**
 * 获取未读消息数
 */
export function getMsgCount() {
  return request({
    url: '/sys/notice/getCount',
    method: 'get',
  })
}
/**
 * 获取消息详情
 */
export function getNoticeInfo(noticeId) {
  return request({
    url: '/pro/notice/'+noticeId,
    method: 'get',
  })
}