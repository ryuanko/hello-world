<template>
  <div class="detail">
    <h1>This is an detail page</h1>
    <div class="Cover" v-if="params.backdrop_path">
      <img :src="`https://image.tmdb.org/t/p/w300/${params.backdrop_path}`"/>
    </div>


    <div class="Content">
      <div class="imgContainer" v-if="params.poster_path">
        <img :src="`https://image.tmdb.org/t/p/w300/${params.poster_path}`"/>
      </div>         
      <table>
        <tr height="2"><td colspan="2"></td></tr>
        <tr>
          <th>Id</th>
          <td><input type="text" v-model="params.id"></td>
        </tr>
        <tr>
          <th>Title</th>
          <td>
            <input type="text" v-model="params.original_title">
          </td>
        </tr>
        <tr>
          <th>Date</th>
          <td>
            <input type="text" v-model="params.release_date">
          </td>
        </tr>
        <tr>
          <th>Tagline</th>
          <td>
            <input type="text" v-model="params.tagline">
          </td>
        </tr>
        <tr>
          <th>Overview</th>
          <td>
            <textarea v-model="params.overview" cols="5" rows="5"></textarea>
          </td>
        </tr>
        <tr>
          <button type="button" @click="setData()">수정</button> 
          <button type="button" @click="setDelete()">삭제</button>
        </tr>
      </table> 
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: '',
  props: [],
  mixins: [],
  components: {},
  watch: {},
  data () {
    return {
      params: {
        id: ''
      }
    }
  },
  methods: {
    getData () {    
      const urlPath = "movie/" + this.params.id
      this.$http.get(urlPath).then(res => {
        this.params = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    // put
    setData () {
      const urlPath = "movie/" + this.params.id
      this.$http.put(urlPath, this.params).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    },
    // put
    setDelete () {
      const urlPath = "movie/" + this.params.id
      this.$http.delete(urlPath).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    }

  },
  created() {},
  mounted() {
    this.params.id = this.$router.history.current.params.id || null
    if (!_.isNumber(this.params.id)) return
    this.getData()
  }
}
</script>
<style scoped>
  table {
    text-align: left;
    width: 50%;
    z-index: 10;
    position: absolute;
    right: 0;
    margin: 0 10%;
  }
  input {
      width: 100%;
  }
  textarea {
    width: 100%;
  }
  .Cover img{
    position:absolute;
    top:55px;
    left:0;
    width:100%;
    height:100%;
    opacity:0.5;
    z-index:0;
  }  
  .imgContainer {
    position:absolute;
    left:0;
    margin: 0 10%;
    width: 20%;
  }
  .Content {
    width: 100%;
  }
  button {margin-top: 20px; margin-right: 10px;}
</style>