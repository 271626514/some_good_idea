<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">水平偏移：</div>
        <div class="tools-box__value fn-right">
          <Slider :value.sync="code_shadow.horizontal" v-model="code_shadow.horizontal" :min="-20" :max="20" show-input></Slider>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">垂直偏移：</div>
        <div class="tools-box__value fn-right">
          <Slider :value.sync="code_shadow.vertical" v-model="code_shadow.vertical" :min="-20" :max="20" show-input></Slider>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">模糊半径：</div>
        <div class="tools-box__value fn-right">
          <Slider :value.sync="code_shadow.blur" v-model="code_shadow.blur" :min="0" :max="20" show-input></Slider>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">阴影颜色：</div>
        <div class="tools-box__value fn-right">
          <vclor @getClolr="getClolr" :color="code_shadow.color"></vclor>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">内阴影：</div>
        <div class="tools-box__value fn-right">
          <i-switch size="large" @on-change="()=>{code_shadow.type = !code_shadow.type}">
            <span slot="open">ON</span>
            <span slot="close">OFF</span>
          </i-switch>
        </div>
      </div>
    </div>
    <div class="tools-box__show">
      <span class="tools-box__shadow" :style="show_shadow"></span>
    </div>
    <div class="tools-box__code">
      <pre v-highlightjs="show_shadow_code()" class="tools-box__pre"><code class="css"></code></pre>
    </div>
  </div>
</template>
<script>
import vclor from '../common/ColorPicker'

export default {
  name: 'vshadow',
  data () {
    return {
      code_shadow: {
        horizontal: 0,
        vertical: 0,
        blur: 20,
        type: true,
        color: '#333'
      }
    }
  },
  components: {
    vclor: vclor
  },
  computed: {
    show_shadow () {
      let inset = `${this.code_shadow.type ? '' : 'inset '}`
      return {
        boxShadow: `${inset}${this.code_shadow.horizontal}px ${this.code_shadow.vertical}px ${this.code_shadow.blur}px ${this.code_shadow.color}`
      }
    }
  },
  methods: {
    getClolr (color) {
      this.code_shadow.color = color.hex8
    },
    show_shadow_code () {
      let inset = `${this.code_shadow.type ? '' : 'inset '}`
      return `
{
  box-shadow: ${inset}${this.code_shadow.horizontal}px ${this.code_shadow.vertical}px ${this.code_shadow.blur}px ${this.code_shadow.color};
}
      `
    }
  }
}
</script>
<style lang="scss" scoped></style>
