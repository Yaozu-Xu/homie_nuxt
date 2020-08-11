// 访问 /user/xyz
// state的属性都基于 当前页面的用户xyz
export const state = () => ({
  userName: null,
  uid: null,
  isLogin: false
})

export const mutations = {
  USER_LOGIN(state, userObject) {
    state.userName = userObject.username
    state.uid = userObject._id
    state.isLogin = false
  },

  USER_LOGOUT(state, userObject) {
    state.userName = userObject.username
    state.uid = userObject._id
    state.isLogin = false
  }
}
