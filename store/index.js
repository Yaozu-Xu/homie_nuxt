// 访问 /user/xyz
// state的属性都基于 当前页面的用户xyz
export const state = () => ({
  userName: null,
  uid: null,
  isLogin: false
})

export const mutations = {
  USER_STATE(state, userObject, isLogin = true) {
    state.userName = userObject.user
    state.uid = userObject.uid
    state.isLogin = isLogin
  }
}
