export const state = () => ({
  userName: '',
  uid: null,
  isLogin: false,
  isSelfPage: false
})

export const mutations = {
  USER_STATE(state, userObject) {
    state.userName = userObject.user
    state.uid = userObject.uida
    state.isLogin = true
    state.isSelfPage = true
  }
}
