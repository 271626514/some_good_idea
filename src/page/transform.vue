<template>
  <div>
    <vshadow></vshadow>
    <throughLine></throughLine>
    <gradient></gradient>
    <through-line></through-line>
    <flex></flex>
  </div>
</template>
<script>
import {vshadow, throughLine, gradient, flex} from '@/components/'

export default {
  name: 'transform',
  data () {
    return {
    }
  },
  components: {
    vshadow,
    throughLine,
    gradient,
    flex
  }
}
</script>
<style lang="scss" scoped></style>
