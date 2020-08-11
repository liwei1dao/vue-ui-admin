import request from '@/utils/request'

export function register(data) {
    return request({
      url: '/lego/user/register',
      method: 'post',
      data
    })
}

export function login(data) {
    return request({
      url: '/lego/user/login',
      method: 'post',
      data
    })
}

export function logout() {
  return request({
    url: '/lego/user/logout',
    method: 'post'
  })
}
