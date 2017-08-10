<template>
	<div>
    <h1>test</h1>
    <slot>
      只有在没有要分发的内容时才会显示。
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'vueQueueAnim'
  }
</script>

<style lang="css" scoped>
</style>
