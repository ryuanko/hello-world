<template>
  <div class="contents">
		<TableC
			:cnt="4"
		>
			<th slot="row1">Doc ID</th>
			<td slot="row1">{{params.doc_n}}</td>
			<th slot="row1">A/C</th>
			<td slot="row1">{{params.actp_c}}</td>
			<th slot="row1">Class</th>
			<td slot="row1">{{params.clas_n}}</td>
			<th slot="row1">Bulletin</th>
			<td slot="row1">SAFETY ({{params.bltn_c}})</td>


			<th slot="row2">작성자</th>
			<td slot="row2" colspan="3">{{params.kornm_n}} - {{params.update_d}}</td>
			<th slot="row2">Created</th>
			<td slot="row2">{{params.crdate_d}}</td>
			<th slot="row2">Updated</th>
			<td slot="row2">{{params.update_d}}</td>

			<th slot="row3">제목</th>
			<td slot="row3" colspan="5">{{params.subj_n}}</td>
			<th slot="row3">Read</th>
			<td slot="row3">{{params.read_n}}</td>

			<td slot="row4" colspan="8" v-html="params.cont_e"></td>

		</TableC>

		<TableC :cnt="1" class="txtAlignL">
				<td slot="row1" colspan="8">Attach Files</td>
		</TableC>

		<TableC :cnt="1" class="txtAlignL">
				<td slot="row1" colspan="8">관련문서</td>
		</TableC>
	</div>
</template>

<script>
import TableC from '@/components/TableC'
import { mapGetters } from 'vuex'
export default {
	name: '',
	props: [],
	mixins: [],
	components: {TableC},
	watch: {},
	computed: {
		...mapGetters(['getDocN_B'])			
	},
	data () {
		return {
			params: {
				name: 'HI',
				doc_n: ''
			}
		}
	},
	methods: {
		async getData () {
      const urlPath = `/api/safety/${this.params.doc_n}`
      await this.$http.get(urlPath).then(res => {
        this.params = res.data
      }).catch(error => {
      })
    },
	},
	created () {},
	mounted () {
		this.params.doc_n = this.$router.history.current.params.id || null
    if (_.isEmpty(this.params.doc_n)) return
    this.getData()
  },
	updated () {},
}
</script>

<style scoped>
	.txtAlignL {text-align: left !important;}
</style>