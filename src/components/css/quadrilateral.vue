<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">倾斜方向：</div>
        <div class="tools-box__value fn-right">
          <span class="tools-box__radio" @click="()=>checkType(item.value)" :class="{active: item.value === code_quadrilateral.type}" v-for="(item, index) in DIR_OPTION" :key=index>{{item.label}}</span>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">倾斜角度：</div>
        <div class="tools-box__value fn-right">
          <span class="tools-box__radio" @click="()=>checkDeg(item.value)" :class="{active: item.value === code_quadrilateral.deg}" v-for="(item, index) in DEG_OPTION" :key=index>{{item.label}}</span>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">矩形宽度：</div>
        <div class="tools-box__value fn-right">
          <i-input type="text" placeholder="角度" :value.sync="code_quadrilateral.width" v-model="code_quadrilateral.width"></i-input>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">矩形高度：</div>
        <div class="tools-box__value fn-right">
          <i-input type="text" placeholder="角度" :value.sync="code_quadrilateral.height" v-model="code_quadrilateral.height"></i-input>
        </div>
      </div>
    </div>
    <div class="tools-box__show">
      <span class="tools-box__quadrilateral" :style="show_quadrilateral" :class="`${show_quadrilateral.type}_${show_quadrilateral.deg}`">
        说明文字
      </span>
    </div>
    <div class="tools-box__code">
      <pre v-highlightjs="show_quadrilateral_code()" class="tools-box__pre"><code class="css"></code></pre>
    </div>
  </div>
</template>
<script>
const LEFT = 'left'
const RIGHT = 'right'
const QUADRILATERAL = {
  [LEFT]: obj => {
    QUADRILATERAL.setData(obj)
    obj.show_quadrilateral.type = 'left'
  },
  [RIGHT]: obj => {
    QUADRILATERAL.setData(obj)
    obj.show_quadrilateral.type = 'right'
  },
  setData: obj => {
    obj.show_quadrilateral.width = `${obj.code_quadrilateral.width}px`
    obj.show_quadrilateral.height = `${obj.code_quadrilateral.height}px`
    obj.show_quadrilateral.lineHeight = `${obj.code_quadrilateral.height}px`
    obj.show_quadrilateral.deg = `${obj.code_quadrilateral.deg}`
  }
}

export default {
  name: 'quadrilateral',
  data () {
    return {
      DIR_OPTION: [{label: '右倾斜', value: 'right'}, {label: '左倾斜', value: 'left'}],
      DEG_OPTION: [{label: '30°', value: '30'}, {label: '45°', value: '45'}, {label: '60°', value: '60'}],
      code_quadrilateral: {
        type: 'right',
        deg: '30',
        width: 150,
        height: 50
      },
      show_quadrilateral: {
        width: 150,
        height: 50,
        type: 'right',
        deg: '30'
      }
    }
  },
  computed: {
    show_quadrilateral () {
      let fn = QUADRILATERAL[this.code_quadrilateral.type]
      return fn && fn(this)
    }
  },
  methods: {
    checkType (val) {
      this.code_quadrilateral.type = val
    },
    checkDeg (val) {
      this.code_quadrilateral.deg = val
    },
    // generate () {
    //   let fn = QUADRILATERAL[this.code_quadrilateral.type]
    //   fn && fn(this)
    // },
    show_quadrilateral_code () {
      let deg = this.show_quadrilateral.type === 'left' ? `${this.show_quadrilateral.deg}deg` : `-${this.show_quadrilateral.deg}deg`
      return `
{
  width: ${this.code_quadrilateral.width}px;
  height: ${this.code_quadrilateral.height}px;
  text-align: center;
  line-height: ${this.code_quadrilateral.height}px;
  ::befor {
    ransform: skew(${deg});
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    content: ' ';
    background-color: '#3399ff';
  }
}
`
    }
  }
}
</script>
<style lang="scss"></style>
