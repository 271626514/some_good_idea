<template>
  <div>
    <vbase></vbase>
    <throughLine></throughLine>
    <sprites></sprites>
  </div>
</template>
<script>
import {vbase, throughLine, sprites} from '@/components/'
export default {
  name: 'routerImage',
  components: {
    vbase,
    throughLine,
    sprites
  }
}
</script>
<style lang="scss" scoped></style>
