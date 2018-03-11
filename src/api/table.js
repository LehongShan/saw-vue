import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/sys/menu',
    method: 'get',
    params
  })
}
