<template>
  <div>
    <vqrcode></vqrcode>
    <throughLine></throughLine>
  </div>
</template>
<script>
import { vqrcode, throughLine } from '@/components/'

export default {
  name: 'transform',
  data () {
    return {
    }
  },
  components: {
    vqrcode,
    throughLine
  }
}
</script>
<style lang="scss" scoped></style>
