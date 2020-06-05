<template>
  <div class="store">
    <h1>This is an store page</h1>
    <h3>다른 화면을 이동하여도 데이터가 초기화 안됨</h3>
    <table>
      <tr>
          <th>Base</th>
          <td><button type="button" @click="mutations_increment()">증가</button> {{count}}</td>
      </tr>
      <tr>
          <th>mutations 호출</th>
          <td><button type="button" @click="mutations_decrement()">감소</button> {{mapStateCount}}</td>
      </tr>
      <tr>
          <th>mutations 인자 값 넘기기 </th>
          <td>
            <input type="text" @keydown.enter="mutations_props" v-model="name">
            <div style="display:inline-block; margin-left:10px">storData: {{mapStateName}}</div> 
          
          </td>
      </tr>
      <tr>
          <th>mapState</th>
          <td>{{mapStateCount}}</td>
      </tr>
      <tr>
          <th>mapGetters replace</th>
          <td>{{phone}}</td>
       </tr>
       <tr>
          <th>mapGetters filter</th>
          <td>{{doneTodos}}</td>
       </tr>
       <tr>
          <th>mapGetters 변수</th>
          <td>{{todoId}}</td>
       </tr>
       <tr>
          <th>setter getter</th>
          <td><input type="text" v-model="message"> </td>
       </tr>
       <tr>
          <th>moduleA setter getter</th>
          <td><input type="text" v-model="messageA"> </td>
       </tr>
       <tr>
          <th>moduleB Count</th>
          <td>{{countB}} </td>
       </tr>
       
    </table>
  </div>
</template>
<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	name: '',
  components: {},
  computed: {
    message: {
        get () {
          return this.$store.state.id
        },
        set (value) {
          this.$store.commit('updateId', value)
        }
    },
    messageA: {
        get () {
          return this.$store.state.moduleA.name
        },
        set (value) {
          this.$store.commit('updateNm', value)
        }
    },
    ...mapState({
      mapStateCount: state => state.count,
      mapStateName: state => state.name,
      countB: state => state.moduleB.count,
      
    }),
    ...mapGetters ({
      phone: 'replecePhone',
      doneTodos: 'doneTodos',
    }),
    // getter 이름 그대로 사용
    //...mapGetters (['replecePhone', 'doneTodos']),
    
    // getter에 인자가 넘기기
    todoId () {
      return this.$store.getters.getTodoByid(3)
    },
  }
  ,
	data () {
		return {
      count: 0,
      name: '양성수'
    }
	},
	methods: {
    mutations_increment () {
      this.$store.commit('increment')
      this.count = this.$store.state.count
    },    
    ...mapMutations({
      add:'increment' // this.add()를 this.$store.commit('increment')에 매핑합니다.
    }),

    mutations_decrement () {
      this.$store.commit('decrement')
    },
    mutations_props () {
      // Mutations 에 인자 값 넘기기
      this.$store.commit('tranParams', this.name)
    },
    dispatch () {
      // 1.기본 디스패치
      // this.$store.dispatch('incrementAsync')    

      // 2.페이로드와 함께 디스패치
      // this.$store.dispatch('incrementAsync', {
      //   amount: 10
      // })

      // 3.객체와 함께 디스패치
      // this.$store.dispatch({
      //   type: 'incrementAsync',
      //   amount: 10
      // })

      // 비동기형 promise 적용 Example
      // this.$store.dispatch('incrementAsync').then(() => {
      //   console.log('2초 처리 전 리턴')
      // })
      // this.$store.dispatch('actionA').then(() => {
      //   console.log('5초 후 모든 처리 후 리턴')
      // })

      // 여러개 dispatch 적용
      this.$store.dispatch('actionB').then(() => {
        console.log('B 끝')
      })

      // 여러개 dispatch 적용
      this.$store.dispatch('actionC').then((res) => {
        console.log(res)
        console.log('c 끝')
      })
    }
  },
	mounted () {
    this.count = this.$store.state.count
    console.log(this.$store)
    this.$store.commit('incrementB')
  }
}
</script>
<style scoped>
  table {width: 80%; margin: 0 auto;}
  table, th, td { border: 1px solid #bcbcbc; }
  .rst {
    border: 1px solid seagreen;
    width: 40%;
    margin: 10px auto;
    padding: 30px;
  }
</style>