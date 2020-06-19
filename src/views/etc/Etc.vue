<template>
  <div class="etc">
    <h1>This is an etc page</h1>
    <div class="searchbox">
        <div>
          <select v-model="search_type">
            <option value="">All</option>
            <option value="subj_n">Subject</option>
            <option value="provider">Provider</option>
            <option value="doc_n">Doc ID</option>
            <option value="crdate_d">Period</option>
          </select>
        </div>
        <div class="searchInputDiv">
          <input type="text" v-model="search_param" @keydown.enter="getData()">
        </div>
        <div>
          <button type="button" @click="getData()" >검색</button>
        </div>
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
        <tr v-for="item in list" :key="item.doc_n" @dblclick="goDetail(item.doc_n)">
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
      search_param: '',
      isfocus: false
    }
	},
	methods: {
    // async 적용 o
    async getData () {
      let params = {}

      if (!_.isEmpty(this.search_type)) {
        params[this.search_type] = this.search_param
      }

      const urlPath = "/api/safety"
      await this.$http.get(urlPath, {params}).then(res => {
        this.list = res.data
      }).catch(error => {
      })
    },
    goDetail (doc_n) {
      this.$router.push({path: `/etc/${doc_n}/detail`})
    },
    // async 적용 x
    getData2 () {
      const urlPath = "/api/safety"
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
  .searchbox {
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .searchbox select {
    height: 30px;
    border: 1px solid black;
    border-right: 0;
    padding: 3px;
  }

  .searchInputDiv {
    width: 300px;
  }

  .searchbox input {
    height: 26px;
    border: 1px solid black;
    border-left: 0;
    line-height: 23px;
    width: 100%;
  }

  .searchbox button {
    margin-left: 10px;
    height: 30px;
  }
</style>