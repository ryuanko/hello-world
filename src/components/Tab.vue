<template>
  <div class="tab">
		<router-link to="/children/1">children1</router-link> |
		<router-link to="/children/2">children2</router-link> |
		<router-link to="/children/3">children3</router-link>
	</div>
</template>

<script>
export default {
	name: '',
	watch: {
		$route (val) {
			this.routeNm = val.name
		}
	},
	data () {
		return {
			routeNm: '2'
		}
	},
	methods: {},
	mounted () {
		this.routeNm = this.$route.name
	},
}
</script>
<style scoped>
	.tab a {
		border: 1px solid #435546;
		padding: 5px 50px;
		text-decoration: none;
		color: black;
	}
	.on {
		background-color: #b6d8ff59;
	}
</style>