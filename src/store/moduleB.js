const moduleB = {
  state: () => ({
    count: 0,
    name: 'B'
  }),
  mutations: {
    incrementB (state) {
      // state는 지역 모듈 상태 입니다
      state.count++
    }
  },

  getters: {
    doubleCountB (state) {
      return state.count * 2
    }
  }
}
export default moduleB