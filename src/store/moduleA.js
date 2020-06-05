const moduleA = {
  state: () => ({
    count: 0,
    name: 'A'
  }),
  mutations: {
    incrementA (statee) {
      // state는 지역 모듈 상태 입니다
      state.count++
    },
    updateNm (state, name) {
      state.name =name
    }
  },

  getters: {
    doubleCountA (state) {
      return state.count * 2
    }
  }
}
export default moduleA