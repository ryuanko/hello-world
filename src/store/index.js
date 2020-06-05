import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './moduleA'
import moduleB from './moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
    id: '110251',
    name: '양성수',
    perm: 'admin',
    phone: '010-2644-7504',
    todos: [
      { id: 1, text: 'true', done: true },
      { id: 2, text: 'false', done: false },
      { id: 3, text: 'true', done: true }
    ]
  },
  mutations: {
    decrement (state) {
      state.count--
    },
    increment (state) {
      state.count++
    },
    tranParams (state, item) {
      state.name = item
    },
    updateId (state, id) {
      state.id = id
    }
  },
  getters: {
    replecePhone: state => {
      return state.phone.replace(/-/gi,"")
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoByid: (state) => id => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {   
    incrementAction ({ commit }) {
      commit('increment')
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 2000)
    },
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 5000)
      })
    },
    // 여러개 dispatch 적용
    actionB ({ dispatch, commit }) {
      return new Promise((resolve, reject) => {
        return dispatch('actionA').then(() => {
          console.log('A 끝')
          setTimeout(() => {
            commit('decrement')
            resolve()
          }, 2000)
        })
      })
    },

    async actionC({dispatch, commit}) {
      await dispatch('actionA') // actionA가 끝나기를 기다립니다.
      commit('decrement')
    }
  },
  modules: {
    moduleA: moduleA,
    moduleB: moduleB
  }
})
