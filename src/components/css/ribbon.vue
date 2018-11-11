<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">形状方向：</div>
        <div class="tools-box__value fn-right">
          <span class="tools-box__radio" @click="()=>check(item.value)" :class="{active: item.value === code_ribbon.type}" v-for="(item, index) in DIR_OPTION" :key=index>{{item.label}}</span>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">矩形宽度：</div>
        <div class="tools-box__value fn-right">
          <i-input type="text" placeholder="宽度..." :value.sync="code_ribbon.width" v-model="code_ribbon.width"></i-input>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">矩形高度：</div>
        <div class="tools-box__value fn-right">
          <i-input type="text" placeholder="宽度..." :value.sync="code_ribbon.height" v-model="code_ribbon.height"></i-input>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">颜色：</div>
        <div class="tools-box__value fn-right">
          <vclor @getClolr="getClolr" :color="code_ribbon.color"></vclor>
        </div>
      </div>
    </div>
    <div class="tools-box__show">
      <span class="tools-box__ribbon" :style="show_ribbon"></span>
    </div>
    <div class="tools-box__code">
      <pre v-highlightjs="show_ribbon_code()" class="tools-box__pre"><code class="css"></code></pre>
    </div>
  </div>
</template>
<script>
import vclor from '../common/ColorPicker'

const TOP = 'top'
const RIGHT = 'right'
const BOTTOM = 'bottom'
const LEFT = 'left'

const RIBBON = {
  [TOP]: obj => {
    let color = obj.code_ribbon.opcital !== 0 ? `rgba(${obj.code_ribbon.rgb}, .${obj.code_ribbon.opcital})` : `${obj.code_ribbon.color}`
    return {
      width: `${obj.code_ribbon.width}px`,
      height: `${parseInt(obj.code_ribbon.width) + parseInt(obj.code_ribbon.height)}px`,
      borderRight: `${obj.code_ribbon.width}px solid ${color}`,
      borderBottom: `${obj.code_ribbon.width}px solid transparent`,
      borderLeft: `${obj.code_ribbon.width}px solid ${color}`,
      borderTop: `none`
    }
  },
  [RIGHT]: obj => {
    let color = obj.code_ribbon.opcital !== 0 ? `rgba(${obj.code_ribbon.rgb}, .${obj.code_ribbon.opcital})` : `${obj.code_ribbon.color}`
    return {
      height: `${obj.code_ribbon.width}px`,
      width: `${parseInt(obj.code_ribbon.width) + parseInt(obj.code_ribbon.height)}px`,
      borderTop: `${obj.code_ribbon.width}px solid ${color}`,
      borderRight: `${obj.code_ribbon.width}px solid transparent`,
      borderBottom: `${obj.code_ribbon.width}px solid ${color}`,
      borderLeft: `none`
    }
  },
  [BOTTOM]: obj => {
    let color = obj.code_ribbon.opcital !== 0 ? `rgba(${obj.code_ribbon.rgb}, .${obj.code_ribbon.opcital})` : `${obj.code_ribbon.color}`
    return {
      width: `${obj.code_ribbon.width}px`,
      height: `${parseInt(obj.code_ribbon.width) + parseInt(obj.code_ribbon.height)}px`,
      borderRight: `${obj.code_ribbon.width}px solid ${color}`,
      borderTop: `${obj.code_ribbon.width}px solid transparent`,
      borderLeft: `${obj.code_ribbon.width}px solid ${color}`,
      borderBottom: `none`
    }
  },
  [LEFT]: obj => {
    let color = obj.code_ribbon.opcital !== 0 ? `rgba(${obj.code_ribbon.rgb}, .${obj.code_ribbon.opcital})` : `${obj.code_ribbon.color}`
    return {
      height: `${obj.code_ribbon.width}px`,
      width: `${parseInt(obj.code_ribbon.width) + parseInt(obj.code_ribbon.height)}px`,
      borderBottom: `${obj.code_ribbon.width}px solid ${color}`,
      borderTop: `${obj.code_ribbon.width}px solid ${color}`,
      borderLeft: `${obj.code_ribbon.width}px solid transparent`,
      borderRight: `none`
    }
  }
}
export default {
  name: 'ribbon',
  data () {
    return {
      DIR_OPTION: [{
        label: '上',
        value: 'top'
      }, {
        label: '右',
        value: 'right'
      }, {
        label: '下',
        value: 'bottom'
      }, {
        label: '左',
        value: 'left'
      }],
      code_ribbon: {
        type: 'right',
        width: 30,
        height: 100,
        color: '#3399ff',
        opcital: 0,
        rgb: 0
      }
    }
  },
  computed: {
    show_ribbon () {
      let fn = RIBBON[this.code_ribbon.type]
      return fn && fn(this)
    }
  },
  methods: {
    check (val) {
      this.code_ribbon.type = val
    },
    getClolr (color) {
      this.code_ribbon.color = color.hex8
    },
    show_ribbon_code () {
      return `
{
  width: ${this.show_ribbon.width};
  height: ${this.show_ribbon.height};
  border-top: ${this.show_ribbon.borderTop};
  border-right: ${this.show_ribbon.borderRight};
  border-bottom: ${this.show_ribbon.borderBottom};
  border-left: ${this.show_ribbon.borderLeft};
}
`
    },
    getOptical (num, color) {
      this.code_ribbon.opcital = num
      this.code_ribbon.rgb = color
    }
  },
  components: {
    vclor
  }
}
</script>

<style lang="scss"></style>
