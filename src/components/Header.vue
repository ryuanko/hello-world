<template>  
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/list">List</router-link> |
    <router-link to="/create">Create</router-link> |
    <router-link to="/detail">Detail</router-link> |
    <router-link to="/emit">Emit</router-link> |
    <router-link to="/bus">Bus</router-link> |
    <router-link to="/slot">Slot</router-link> |
    <router-link to="/store">Store</router-link> |
    <router-link to="/children/1">Children</router-link> |
    <router-link to="/etc">Etc</router-link>
  </div>
</template>
<script>
export default {
	name: '',
	props: [],
	watch: {
    $route(val) {}
  },
	data () {
		return {}
	},
	methods: {},
	mounted () {},
}
</script>
