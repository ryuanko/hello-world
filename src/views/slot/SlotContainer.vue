<template>
  <div class="slot">
    slot container
    <slot name="item"/>
    <slot name="footer"/>
  </div>
</template>
<style scoped>
  .slot {
    border: 1px solid burlywood;
  }
</style>
