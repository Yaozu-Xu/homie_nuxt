import { getStore } from '~/utils'

export default function({ $axios, redirect }) {
  $axios.setBaseURL('http://127.0.0.1:3001')
  $axios.onRequest(config => {
    const accessToken = getStore('access_token')
    if (accessToken) {
      config.header.access_token = accessToken
    }
    return config
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
