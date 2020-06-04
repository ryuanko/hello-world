<template>
  <div class="emit-child">
    <h3>This is an emit Child page</h3>
      <table>
        <tr height="2"><td colspan="2"></td></tr>
        <tr>
            <th>ID</th>
            <td><input type="text" v-model="params.id"></td>
        </tr>
        <tr>
            <th>Name</th>
            <td><input type="text" v-model="params.name"></td>
        </tr>
        <tr>
            <th>Cnt</th>
            <td><button @click="addCnt">추가 버튼 {{this.params.cnt}}</button></td>
        </tr>
        <tr>
            <th>Parent Data [Vue warn]</th>
            <td><input type="text" v-model="ParentData"></td>
        </tr>
        <tr>
            <th>Parent map</th>
            <td><input type="text" v-model="item.id"></td>
        </tr>
      </table>
      <button type="button" @click="setData()">제출</button>
      <div class="rst-child">
        Child Data
        {{params}}
      </div>
  </div>
</template>
<script>
export default {
	name: '',
	props: ["id", "name", "cnt", "ParentData", "item"],
	components: {},
	watch: {},
	computed: {},
	data () {
    return {
      params: {
        id: '',
        name: '',
        cnt: 0
      }
    }
	},
	methods: {
    setData () {
      this.$emit('setData', this.params)
    },
    addCnt () {
      this.params.cnt++
      this.$emit('addCnt', this.params.cnt)
    }
  },
	created () {},
	mounted () {
    this.params.id = this.id
    this.params.name = this.name
    this.params.cnt = this.cnt
  },
	updated () {},
}
</script>
<style scoped>
  .emit-child {
    border: 1px solid hotpink;
    width: 70%;
    margin: 10px auto;
  }
  table {
    text-align: left;
    margin: 0 auto;
  }
  .rst-child {
    border: 1px solid seagreen;
    width: 40%;
    margin: 10px auto;
    padding: 30px;
  }
  button {margin-top: 20px;}
</style>