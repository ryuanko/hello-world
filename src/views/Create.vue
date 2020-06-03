<template>
  <div class="create">
    <h1>This is an create page</h1>
      <table>
      <tr height="2"><td colspan="2"></td></tr>
      <tr>
          <th> 이름</th>
          <td><input type="text" v-model="params.name"></td>
      </tr>
      <tr>
          <th>주민등록번호</th>
          <td>
            <input type="text" v-model="params.num1"> -
            <input type="password" v-model="params.num2">
          </td>
       </tr>
       <tr>
          <th>아이디</th>
          <td>
            <input type="text" v-model="params.id">
          </td>
       </tr>
       <tr>
          <th>비밀번호</th>
          <td>
            <input type="password" v-model="params.pwd" placeholder=" 영문/숫자포함 6자 이상">
          </td>
       </tr>
    </table>    
    <button type="button" @click="setData()">제출</button>
    <div class="rst">
      {{params}}
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      params: {
        name: '',
        num1: '',
        num2: '',
        id: '',
        pwd: ''
      }
    }
  },
  methods: {
    setData () {

    }
  },
  created() {},
  mounted() {},
}
</script>
<style scoped>
  table {text-align: left; margin: 0 auto;}
  button {margin-top: 20px;}
  .rst {border: 1px solid; width: 80%; margin: 40px auto; padding: 50px;}
</style>