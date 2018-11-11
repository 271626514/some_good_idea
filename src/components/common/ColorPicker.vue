<template>
  <div class="color-picker">
    <span class="color-box" :style="{backgroundColor: colors.hex}" @click="colorPicker = !colorPicker"></span>
    <Chrome id="js-colorPicker" :value="colors" v-if="colorPicker" @input="checkColor"></Chrome>
  </div>
</template>
<style lang="scss" scoped>
.color-box {
  width: 45px;
  display: block;
  height: 30px;
  cursor: pointer;
  margin-top: 5px;
}

.vc-chrome {
  position: absolute;
  left: 50px;
  top: 0;
  z-index: 99;
}
</style>
<script>
import {Chrome} from 'vue-color'

export default {
  name: 'vclor',
  data () {
    return {
      colors: {
        hex: this.color
      },
      colorPicker: false
    }
  },
  components: {
    Chrome
  },
  props: {
    color: [String, Number]
  },
  methods: {
    checkColor (val) {
      this.$emit('getClolr', val)
      this.colors.hex = val.hex8
    },
    close (event) {
      const DOM = document.getElementById('js-colorPicker')
      if (DOM && !DOM.contains(event.target)) {
        this.colorPicker = false
      }
    }
  },
  mounted () {
    window.addEventListener('click', this.close)
  }
}
</script>
