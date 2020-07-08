const UserApi = {}

const CategoryApi = {}

const PublishApi = {}

UserApi.sendLogin = (axios, params) => axios.$post('/api/user/login', params)

UserApi.getUser = (axios, user) => axios.$get(`/api/user/u/${user}`)

UserApi.checkAuth = (axios, uid) => axios.$get(`/api/user/auth/${uid}`)

UserApi.register = (axios, data) => axios.$post('/api/user/reg', data)

CategoryApi.getOnesCategory = (axios, uid) =>
  axios.$get(`/api/category/get/${uid}`)

CategoryApi.createCategory = (axios, data) =>
  axios.post('/api/category/create', data)

// Publish
PublishApi.postArticle = (axios, data) =>
  axios.post('/api/publish/create', data)

PublishApi.getOnesAriticles = (axios, uid) =>
  axios.get(`/api/publish/get/${uid}`)

PublishApi.getArticleByAid = (axios, aid) => axios.get(`/api/publish/a/${aid}`)

PublishApi.putArticle = (axios, doc) => axios.put(`/api/publish/update`, doc)

PublishApi.delArticle = (axios, aid) => axios.delete(`/api/publish/del/${aid}`)

export { UserApi, PublishApi, CategoryApi }
