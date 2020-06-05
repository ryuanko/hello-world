<template>
  <div class="child">
    <h1>This is an child page</h1>
		<router-view/>
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
	methods: {},
	created () {},
	mounted () {},
	updated () {},
}
</script>
<style>
	.child {
		border: 1px solid red;
		margin: 20px;
    height: 500px;
	}
	.child > div {
		border: 1px solid #2336e6;
		margin: 50px 20px;
    height: 300px;
	}
</style>
