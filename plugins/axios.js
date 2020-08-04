export default function({ $axios, redirect }) {
  $axios.setBaseURL('http://127.0.0.1:3001')
  // $axios.onRequest((config) => {
  //   console.log('Making request to ' + config.url)
  // })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
