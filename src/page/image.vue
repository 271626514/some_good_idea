<template>
  <div>
    <vbase></vbase>
    <throughLine></throughLine>
    <sprites></sprites>
    <throughLine></throughLine>
    <image-edit></image-edit>
  </div>
</template>
<script>
import {vbase, throughLine, sprites, imageEdit} from '@/components/'
export default {
  name: 'routerImage',
  components: {
    vbase,
    throughLine,
    sprites,
    imageEdit
  }
}
</script>
<style lang="scss" scoped></style>
