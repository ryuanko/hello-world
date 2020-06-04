<template>
  <div class="Main">
    <h1>This is an slot page</h1>
    <slot-container>
      <slot-item slot="item"/>
      <slot-item slot="item"/>
      <slot-item slot="item"/>
      <div class="footer" slot="footer">
        Footer Sample Div
      </div>
    </slot-container>
  </div>
</template>

<script>

import SlotContainer from "@/views/slot/SlotContainer.vue"
import SlotItem from "@/views/slot/SlotItem.vue"
export default {
	name: '',
	components: {SlotContainer, SlotItem},
}
</script>
<style scoped>
  .footer {
    border: 1px solid #38af0d;
    margin: 10px;
  }
</style>
