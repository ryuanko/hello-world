<template>
  <div class="etc">
    <h1>This is an etc page</h1>
    <div class="searchbox">
				<select v-model="search_type">
					<option value="">All</option>
					<option value="id">Id</option>
					<option value="service_id">Service Id</option>
					<option value="name">Name</option>
					<option value="description">Description</option>
				</select>
				<input type="text" v-model="search_param" @keydown.enter="getData()">
				<button type="button" @click="getData()" >검색</button>
		</div>
    <table>
      <thead>
        <tr>
          <th>ALL</th>
          <th>Doc ID</th>
          <th>Subject</th>
          <th>Provider</th>
          <th>Date</th>
          <th>Read</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td><input type="checkbox" /></td>
          <td>{{item.doc_n}}</td>
          <td class="textAlignL">[{{item.calsn}}]{{item.subj_n}}</td>
          <td>{{item.kornm_n}}/{{item.team_n}}</td>
          <td>{{item.crdate_d}}</td>
          <td>{{item.read_n}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
	name: '',
	props: [],
	mixins: [],
	components: {},
	watch: {},
	computed: {},
	data () {
		return {
      list: [],
      search_type: '',
      search_param: ''
    }
	},
	methods: {
    // async 적용 o
    async getData () {
      const urlPath = "api/safety"
      await this.$http.get(urlPath).then(res => {
        this.list = res.data
      }).catch(error => {
      })
      console.log(this.list)
    },
    // async 적용 x
    getData2 () {
      const urlPath = "api/safety"
      this.$http.get(urlPath).then(res => {
        this.list = res.data.results
      }).catch(error => {
      })
    },
  },
	created () {},
	mounted () {
    this.getData()
  },
	updated () {},
}
</script>
<style scoped>
  table {width: 80%; margin: 0 auto;}
  table, th, td { border: 1px solid #bcbcbc; }
  .textAlignL {text-align: left; padding-left: 10px;}
  .searchbox {margin: 10px;}
  .searchbox select {
    height: 26px;
    border: 1px solid black;
    border-right: 0;
  }
  .searchbox input {
    height: 22px;
    border: 1px solid black;
    border-left: 0;
  }
  .searchbox button {
    margin-left: 10px;
  }
</style>