import request from '@/utils/request'

// 查询用户个人信息
export function getUserProfile() {
  return request({
    url: '/system/user/profile',
    method: 'get'
  })
}
export function listAllUser(query) {
  return request({
    url: '/system/user/listAllUser',
    method: 'get',
    params: query
  })
}
// 用户密码重置
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword
  }
  return request({
    url: '/system/user/profile/updatePwd',
    method: 'put',
    params: data
  })
}