<template>
  <div class="list">
    <h1>This is an list page</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id" @click="goDetail(item.id)">
          <th>{{item.id}}</th>
          <td>{{item.title}}</td>
          <td>{{item.release_date}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Table Foot</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      list: []
    }
  },
  methods: {
    getData () {    
      const urlPath = "movie/now_playing";
      this.$http.get(urlPath).then(res => {
        this.list = res.data.results
      }).catch(error => {
        console.log(error)
      })
    },
    goDetail (id) {

      this.$router.push({name: "Detail", params: {id:id}})
    }
  },
  created() {},
  mounted() {
    this.getData()
  }
}
</script>
<style scoped>
  table {width: 80%; margin: 0 auto;}
  table, th, td { border: 1px solid #bcbcbc; }
</style>