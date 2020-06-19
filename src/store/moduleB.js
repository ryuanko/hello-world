const moduleB = {
  state: () => ({
    doc_n: ''
  }),
  mutations: {
    // state는 지역 모듈 상태 입니다
    reset_B (state) {
      state.doc_n = ''
    },
    setDocN_B (state, doc_n) {
      state.doc_n = doc_n
    }
  },
  getters: {
    getDocN_B: state => {
      return state.doc_n
    }
  }
}
export default moduleB