<template>
  <div class="bus">
    <h1>This is an bus page</h1>
    <button @click="showHide(true)">show</button>
    <button @click="showHide(false)">hide</button>
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
		return {}
	},
	methods: {
    showHide (flag) {
      this.$bus.$emit('showHide', flag)
    }
  },
	created () {},
	mounted () {},
	updated () {},
}
</script>
<style scoped>
  button {margin: 30px;}
</style>