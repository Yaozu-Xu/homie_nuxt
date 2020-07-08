export const state = () => ({
  isAsideShow: false
})

export const mutations = {
  TOGGLE_ASIDE(state) {
    state.isAsideShow = !state.isAsideShow
  }
}
