<template>
  <div class="emit">
    <h1>This is an emit page</h1>
    <emit-child
      :id="params.id"
      :name="params.name"
      :cnt="params.cnt"
      :ParentData="ParentData"
      :item="params"
      @setData="setData"
      @addCnt="addCnt"
    />
    <div class="rst-parent">
      Parent Data<br/>
      1. {{params}}<br/>
      2. {{ParentData}}
    </div>
  </div>
</template>
<script>
import EmitChild from "./EmitChild"
export default {
	name: '',
	props: [],
	components: {EmitChild},
	watch: {},
	computed: {},
	data () {
    return {
      params: {
        id: '111',
        name: '111',
        cnt: 0
      },
      ParentData: "iiii"
    }
	},
	methods: {
    setData (data) {
      this.params = data
    },
    addCnt (data) {
      this.params.cnt = data
    }
  }
}
</script>
<style scoped>
  .emit {
    border: 1px solid blue;
    width: 90%;
    margin: 10px auto;
  }
  .rst-parent {
    border: 1px solid seagreen;
    width: 40%;
    margin: 10px auto;
    padding: 30px;
  }
</style>