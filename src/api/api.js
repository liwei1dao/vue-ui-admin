import request from '@/utils/request'

export function captcha(data) {
    return request({
      url: '/lego/api/captcha',
      method: 'post',
      data
    })
}
