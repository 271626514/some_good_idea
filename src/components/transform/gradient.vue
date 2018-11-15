<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">渐变角度：</div>
        <div class="tools-box__value fn-right">
          <Slider :value.sync="code_gradient.deg" v-model="code_gradient.deg" :min="-180" :max="180" :step="15" show-input></Slider>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">渐变起始颜色：</div>
        <div class="tools-box__value fn-right">
          <vclor @getClolr="getClolrStart" :color="code_gradient.colorStart"></vclor>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">渐变结束颜色：</div>
        <div class="tools-box__value fn-right">
          <vclor @getClolr="getColorFinish" :color="code_gradient.colorFinish"></vclor>
        </div>
      </div>
      <!-- <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">
          其他渐变颜色
        </div>
        <div class="tools-box__form fn-right">

        </div>
      </div> -->
    </div>
    <div class="tools-box__show">
      <div class="tools-box__gradient" :style="show_gradient"></div>
    </div>
    <div class="tools-box__code">
      <pre v-highlightjs="show_gradient_code()" class="tools-box__pre"><code class="css"></code></pre>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import vclor from '../common/ColorPicker'

export default {
  name: 'gradient',
  data () {
    return {
      code_gradient: {
        deg: 0,
        colorStart: '#ff0000',
        colorFinish: '#0101fe',
        colorGroup: []
      }
    }
  },
  methods: {
    addColor () {
      // 增加渐变颜色组
    },
    getClolrStart (color) {
      this.code_gradient.colorStart = color.hex8
    },
    getColorFinish (color) {
      this.code_gradient.colorFinish = color.hex8
    },
    show_gradient_code () {
      return `
{
  background: linear-gradient(${this.code_gradient.deg}deg, ${this.code_gradient.colorStart}, ${this.code_gradient.colorFinish});
}
      `
    }
  },
  computed: {
    show_gradient () {
      return {
        background: `linear-gradient(${this.code_gradient.deg}deg, ${this.code_gradient.colorStart}, ${this.code_gradient.colorFinish})`
      }
    }
  },
  components: {
    vclor
  }
}
</script>
