<template>
  <div class="workspace">
    <router-view/>				
    <router-view name="header" />
    <router-view name="body" />
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
	methods: {},
	created () {},
	mounted () {},
	updated () {},
}
</script>
