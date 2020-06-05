<template>
  <div class="etc">
    <h1>This is an etc page</h1>
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
      params: []
    }
	},
	methods: {
    // async 적용 o
    async getData () {
      console.log('1') 
      const urlPath = "api/menu"
      await this.$http.get(urlPath).then(res => {
        console.log('2') 
        this.params = res.data
        console.log(this.params)
      }).catch(error => {
        console.log(error)
      })
      console.log(3)
    },
    // async 적용 x
    getData2 () {
      console.log('1') 
      const urlPath = "api/menu"
      this.$http.get(urlPath).then(res => {
        console.log('2') 
        this.params = res.data
        console.log(this.params)
      }).catch(error => {
        console.log(error)
      })
      console.log(3)
    },
  },
	created () {},
	mounted () {
    // this.getData()
    const er = _.reduce({ 'a': 1, 'b': 2, 'c': 1, 'd': 2, 'e': 3 }, function(result, value, key) {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {});
    console.log(er)
    // 1: (2) ["a", "c"]
    // 2: ["b"]
  },
	updated () {},
}
</script>
