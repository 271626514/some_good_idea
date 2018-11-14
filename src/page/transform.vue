<template>
  <div>
    <vshadow></vshadow>
    <throughLine></throughLine>
    <gradient></gradient>
  </div>
</template>
<script>
import {vshadow, throughLine, gradient} from '@/components/'

export default {
  name: 'transform',
  data () {
    return {
    }
  },
  components: {
    vshadow,
    throughLine,
    gradient
  }
}
</script>
<style lang="scss" scoped></style>
