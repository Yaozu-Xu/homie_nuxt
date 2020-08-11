/**
 * 存储localStorage
 */
import Cookies from 'js-cookie'

export const setStore = (name, content) => {
  if (process.client) {
    return localStorage.setItem(name, content)
  }
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (process.client) {
    return localStorage.getItem(name)
  }
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (process.client) {
    localStorage.removeItem(name)
  }
}

export const getUid = () => Cookies.get('uid')

export const getRefreshToken = () => Cookies.get('refresh_token')
