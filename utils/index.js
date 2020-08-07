/**
 * 存储localStorage
 */
import Cookies from 'js-cookie'

export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  return window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!getStore(name) || name) {
    return
  }
  window.localStorage.removeItem(name)
}

export const getUid = () => Cookies.get('uid')

export const getRefreshToken = () => Cookies.get('refresh_token')
