<template>
  <div>
    <vqrcode></vqrcode>
    <throughLine></throughLine>
  </div>
</template>
<script>
import { vqrcode, throughLine, time } from '@/components/'

export default {
  name: 'transform',
  data () {
    return {
    }
  },
  components: {
    vqrcode,
    throughLine,
    time
  }
}
</script>
<style lang="scss" scoped></style>
