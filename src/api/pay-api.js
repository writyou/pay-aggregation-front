import axios from '@/libs/api.request'

/**
 * 获取支付单
 * @param {*} param
 */
export const getChargeListRequest = (param) => {
    const url = '/trade/web/charge/list'
    return axios.request({
        url: url,
        method: 'get',
        params: param
    })
}

/**
 * 获取退款单数据
 * @param {查询参数} param
 */
export const getRefundListRequest = (param) => {
    const url = '/trade/web/refund/list'
    return axios.request({
        url: url,
        method: 'get',
        params: param
    })
}

/**
 * 获取所有已开通的渠道配置
 * @param {*} appId
 */
export const getOpenedChannelConfigRequest = (appId) => {
    const url = `/trade/web/app/${appId}/channel`
    return axios.request({
        url: url,
        method: 'get'
    })
}

/**
 * 添加新的渠道配置
 * @param {*} appId
 * @param {*} param
 */
export const addNewChannelConfigRequest = (appId, param) => {
    const url = `/trade/web/app/${appId}/channel`
    return axios.request({
        url,
        method: 'post',
        data: param
    })
}

/**
 * 添加新的渠道配置
 * @param {*} appId
 * @param {*} param
 */
export const updateChannelConfigRequest = (appId, param) => {
    const url = `/trade/web/app/${appId}/channel`
    return axios.request({
        url,
        method: 'put',
        data: param
    })
}

/**
 * 获取渠道配置
 * @param {*} appId
 * @param {*} channel
 */
export const deleteChannelConfigRequest = (appId, channel) => {
    const url = `/trade/web/app/${appId}/channel/${channel}`
    return axios.request({
        url,
        method: 'delete'
    })
}

/**
 * 获取通知日志记录
 * @param {*} appId
 * @param {*} param
 */
export const getNotifyLogRecordRequest = (appId, param) => {
    const url = `/notification/web/app/${appId}/record`
    return axios.request({
        url,
        method: 'get',
        params: param
    })
}

/**
 *  获取事件订阅
 * @param {*} appId
 */
export const getEventSubscriptionRequest = (appId) => {
    const url = `/notification/web/app/${appId}/subscription`
    return axios.request({
        url,
        method: 'get'
    })
}

/**
 * 添加或更新事件订阅
 * @param {*} appId
 * @param {*} param
 */
export const addOrUpdateEventSubscriptionRequest = (appId, param) => {
    const url = `/notification/web/app/${appId}/subscription`
    return axios.request({
        url,
        method: 'post',
        data: param
    })
}

/**
 * 取消订阅事件
 * @param {*} appId
 * @param {*} eventType
 */
export const deleteEventSubscriptionRequest = (appId, eventType) => {
    const url = `/notification/web/app/${appId}/subscription/${eventType}`
    return axios.request({
        url,
        method: 'delete'
    })
}

/**
 * 获取主应用列表
 * @param {} appId
 */
export const getAppMasterListRequest = () => {
    const url = '/auth/web/app/master'
    return axios.request({
        url,
        method: 'get'
    })
}

/**
 * 获取指定应用信息
 * @param {} appId
 */
export const getAppInfoRequest = (appId) => {
    const url = `/auth/web/app/${appId}/info`
    return axios.request({
        url,
        method: 'get'
    })
}

/**
 * 添加新的平台应用
 * @param {*} param
 */
export const addNewAppRequest = (param) => {
    const url = '/auth/web/app'
    return axios.request({
        url,
        method: 'post',
        data: param
    })
}

/**
 * 添加新的平台应用
 * @param {*} param
 */
export const addNewSubAppRequest = (appId, param) => {
  const url = `/auth/web/app/${appId}/sub`
  return axios.request({
    url,
    method: 'post',
    data: param
  })
}

/**
 * 更新应用信息
 * @param {} appId
 * @param {*} param
 */
export const updateAppInfoRequest = (appId, param) => {
    const url = `/auth/web/app/${appId}`
    return axios.request({
        url,
        method: 'put',
        data: param
    })
}

/**
 * 获取api接口请求日志
 * @param {} appId
 */
export const getApiLogRequest = (appId, param) => {
    const url = `/trade/web/${appId}/log/req`
    return axios.request({
        url,
        method: 'get',
        params: param
    })
}

/**
 * 获取平台异步通知日志
 * @param {} appId
 */
export const getPlatformNotifyLogRequest = (appId, param) => {
    const url = `/trade/web/${appId}/log/notification`
    return axios.request({
        url,
        method: 'get',
        params: param
    })
}

/**
 * 获取整棵应用树
 * @param appId
 * @returns {never}
 */
export const getAppTreeRequest = (appId) => {
  const url = `/auth/web/app/${appId}/tree`
  return axios.request({
    url,
    method: 'get'
  })
}


/************统计数据接口******************/

/**
 * 获取今日交易数据统计
 * @param appId
 * @param param
 * @returns {never}
 */
export const getTodayTradeStatRequest = (appId, param) => {
  const url = `/trade/web/statistics/${appId}/today`
  return axios.request({
    url,
    method: 'get',
    params: param
  })
}

/**
 * 获取历史交易数据统计
 * @param appId
 * @param param
 * @returns {never}
 */
export const getTradeHistoryStatRequest = (appId, param) => {
  const url = `/trade/web/statistics/${appId}/history`
  return axios.request({
    url,
    method: 'get',
    params: param
  })
}

/**
 * 获取交易平台数据统计
 * @param appId
 * @param param
 * @returns {never}
 */
export const getChannelTradeStatRequest = (appId, param) => {
  const url = `/trade/web/statistics/${appId}/channel`
  return axios.request({
    url,
    method: 'get',
    params: param
  })
}

/**
 * 获取交易平台数据统计
 * @param appId
 * @param param
 * @returns {never}
 */
export const getSubAppTradeStatRequest = (appId, param) => {
  const url = `/trade/web/statistics/${appId}/sub`
  return axios.request({
    url,
    method: 'get',
    params: param
  })
}
