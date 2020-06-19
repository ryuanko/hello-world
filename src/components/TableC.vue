<template>
  <div class="table">
		<table>
			<tr v-for="n in cnt" :key="n">
				<slot :name="`row${n}`"/>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	props: ["cnt"],
	data () {
		return {}
	},
}
</script>
<style scoped>
	table {width: 80%; margin: 0 auto;}
  table, th, td { border: 1px solid #bcbcbc; }
</style>