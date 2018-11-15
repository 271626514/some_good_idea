<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">

    </div>
    <div class="tools-box__show">
      <div class="tools-box__flex-container" :style="show_flex">
        <div class="tools-box__flex-item">A</div>
        <div class="tools-box__flex-item">B</div>
        <div class="tools-box__flex-item">C</div>
        <div class="tools-box__flex-item">D</div>
        <div class="tools-box__flex-item">E</div>
      </div>
    </div>
    <div class="tools-box__code">
      <pre v-highlightjs="show_flex_code()" class="tools-box__pre"><code class="css"></code></pre>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    show_flex () {
      return {
        flexDirection: 'row'
      }
    }
  },
  methods: {
    show_flex_code () {
      return `
.container: {
  display: flex;
}

.item {
  flex: 1;
}
      `
    }
  }
}
</script>
