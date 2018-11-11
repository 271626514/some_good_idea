<template>
  <div>
    <triangle></triangle>
    <throughLine></throughLine>
    <ribbon></ribbon>
    <throughLine></throughLine>
    <quadrilateral></quadrilateral>
    <throughLine></throughLine>
    <trapezium></trapezium>
  </div>
</template>
<script>
import {triangle, ribbon, throughLine, quadrilateral, trapezium} from '@/components/'

export default {
  name: 'css',
  components: {
    triangle,
    throughLine,
    ribbon,
    quadrilateral,
    trapezium
  }
}
</script>

<style lang="sass" scoped></style>
