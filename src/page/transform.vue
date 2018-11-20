<template>
  <div>
    <vshadow></vshadow>
    <throughLine></throughLine>
    <gradient></gradient>
    <through-line></through-line>
    <blur></blur>
    <through-line></through-line>
    <flex></flex>
  </div>
</template>
<script>
import {vshadow, throughLine, gradient, flex, blur} from '@/components/'

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
    flex,
    blur
  }
}
</script>
<style lang="scss" scoped></style>
