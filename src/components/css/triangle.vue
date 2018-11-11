<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">
      <div class="tools-box__wrapper">
        <span v-for="index in 9" class="tools-box__dir" :class="{active : index == code_triangle.type}" @click="() => checkout(index)" :key=index></span>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">底边：</div>
        <div class="tools-box__value fn-right">
          <i-input type="text" placeholder="宽度..." :value.sync="code_triangle.bottomValue" v-model="code_triangle.bottomValue"></i-input>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">高度：</div>
        <div class="tools-box__value fn-right">
          <i-input type="text" placeholder="高度..." :value.sync="code_triangle.sideValue" v-model="code_triangle.sideValue"></i-input>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">颜色：</div>
        <div class="tools-box__value fn-right">
          <vclor @getClolr="getClolr" :color="code_triangle.color"></vclor>
        </div>
      </div>
    </div>
    <div class="tools-box__show">
      <span class="tools-box__box" :style="show_triangle"></span>
    </div>
    <div class="tools-box__code">
      <pre v-highlightjs="show_triangle_code()" class="tools-box__pre"><code class="css">
      </code></pre>
    </div>
  </div>
</template>
<script>
import vclor from '../common/ColorPicker'

const TOP_LEFT = 1
const TOP = 2
const TOP_RIGHT = 3
const MID_RIGHT = 6
const MID_LEFT = 4
const BOT_LEFT = 7
const BOTTOM = 8
const BOT_RIGHT = 9

const TRIANGLE = {
  [TOP_LEFT]: obj => {
    return {
      borderWidth: `${obj.code_triangle.bottomValue}px ${obj.code_triangle.sideValue}px 0 0`,
      borderColor: `${obj.code_triangle.color} transparent transparent transparent`
    }
  },
  [TOP]: obj => {
    return {
      borderWidth: `0 ${obj.code_triangle.sideValue}px ${obj.code_triangle.bottomValue}px ${obj.code_triangle.sideValue}px`,
      borderColor: `transparent transparent ${obj.code_triangle.color} transparent`
    }
  },
  [TOP_RIGHT]: obj => {
    return {
      borderWidth: `0 ${obj.code_triangle.sideValue}px ${obj.code_triangle.bottomValue}px 0`,
      borderColor: `transparent ${obj.code_triangle.color} transparent transparent`
    }
  },
  [MID_LEFT]: obj => {
    return {
      borderWidth: `${obj.code_triangle.sideValue}px ${obj.code_triangle.bottomValue}px ${obj.code_triangle.sideValue}px 0`,
      borderColor: `transparent ${obj.code_triangle.color} transparent transparent`
    }
  },
  [MID_RIGHT]: obj => {
    return {
      borderWidth: `${obj.code_triangle.sideValue}px 0 ${obj.code_triangle.sideValue}px ${obj.code_triangle.bottomValue}px`,
      borderColor: `transparent transparent transparent ${obj.code_triangle.color}`
    }
  },
  [BOT_LEFT]: obj => {
    return {
      borderWidth: `${obj.code_triangle.sideValue}px 0 0 ${obj.code_triangle.bottomValue}px`,
      borderColor: `transparent transparent transparent ${obj.code_triangle.color}`
    }
  },
  [BOTTOM]: obj => {
    return {
      borderWidth: `${obj.code_triangle.bottomValue}px ${obj.code_triangle.sideValue}px 0 ${obj.code_triangle.sideValue}px`,
      borderColor: `${obj.code_triangle.color} transparent transparent`
    }
  },
  [BOT_RIGHT]: obj => {
    return {
      borderWidth: `0 0 ${obj.code_triangle.sideValue}px ${obj.code_triangle.bottomValue}px`,
      borderColor: `transparent transparent ${obj.code_triangle.color} transparent`
    }
  }
}

export default {
  name: 'triangle',
  data () {
    return {
      code_triangle: {
        type: 2,
        bottomValue: 50,
        sideValue: 25,
        color: '#3399ff',
        borderWidth: '',
        borderColor: ''
      }
    }
  },
  computed: {
    show_triangle () {
      let fn = TRIANGLE[this.code_triangle.type]
      return fn && fn(this)
    }
  },
  methods: {
    checkout (index) {
      this.code_triangle.type = index
    },
    getClolr (color) {
      this.code_triangle.color = color.hex8
    },
    show_triangle_code () {
      return `
{
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${this.show_triangle.borderWidth};
  border-color: ${this.show_triangle.borderColor};
}
      `
    }
  },
  components: {
    vclor
  }
}
</script>
<style lang="scss" scoped>

</style>
