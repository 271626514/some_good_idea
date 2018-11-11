<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">
      <div class="tools-box__wrapper">
        <span v-for="index in 6" class="tools-box__trapeziumbox" :class="{active : index == code_trapezium.type}" @click="() => checkout(index)" :key=index></span>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">形状高度：</div>
        <div class="tools-box__value fn-right">
          <i-input type="text" placeholder="宽度..." :value.sync="code_trapezium.height" v-model="code_trapezium.height"></i-input>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">形状上边宽度：</div>
        <div class="tools-box__value fn-right">
          <i-input type="text" placeholder="宽度..." :value.sync="code_trapezium.topWidth" v-model="code_trapezium.topWidth"></i-input>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">形状底边宽度：</div>
        <div class="tools-box__value fn-right">
          <i-input type="text" placeholder="宽度..." :value.sync="code_trapezium.bottomWidth" v-model="code_trapezium.bottomWidth"></i-input>
        </div>
      </div>
      <div class="tools-box__form">
        <i-button style="width: 90%;" type="success" long @click="() => generate()">生成</i-button>
      </div>
    </div>
    <div class="tools-box__show">
      <span class="tools-box__trapezium" :style="show_trapezium"></span>
    </div>
    <div class="tools-box__code">
      <pre v-highlightjs="show_trapezium_code()" class="tools-box__pre"><code class="css"></code></pre>
    </div>
  </div>
</template>
<script>
const TOP_RIGHT = 1
const BOT_LEFT = 2
const BOT_RIGHT = 3
const TOP_LEFT = 4
const BOTTOM = 5
const TOP = 6

const TRAPEZIUM = {
  [TOP_RIGHT]: obj => {
    obj.show_trapezium.borderBottom = `${obj.code_trapezium.height}px solid #3399ff`
    obj.show_trapezium.width = `${obj.code_trapezium.bottomWidth}px`
    obj.show_trapezium.borderRight = `${obj.code_trapezium.bottomWidth - obj.code_trapezium.topWidth}px solid transparent`
    obj.show_trapezium.borderTop = `none`
    obj.show_trapezium.borderLeft = `none`
  },
  [BOT_LEFT]: obj => {
    obj.show_trapezium.borderTop = `${obj.code_trapezium.height}px solid #3399ff`
    obj.show_trapezium.width = `${obj.code_trapezium.bottomWidth}px`
    obj.show_trapezium.borderLeft = `${obj.code_trapezium.bottomWidth - obj.code_trapezium.topWidth}px solid transparent`
    obj.show_trapezium.borderBottom = `none`
    obj.show_trapezium.borderRight = `none`
  },
  [BOT_RIGHT]: obj => {
    obj.show_trapezium.borderTop = `${obj.code_trapezium.height}px solid #3399ff`
    obj.show_trapezium.width = `${obj.code_trapezium.bottomWidth}px`
    obj.show_trapezium.borderRight = `${obj.code_trapezium.bottomWidth - obj.code_trapezium.topWidth}px solid transparent`
    obj.show_trapezium.borderBottom = `none`
    obj.show_trapezium.borderLeft = `none`
  },
  [TOP_LEFT]: obj => {
    obj.show_trapezium.borderBottom = `${obj.code_trapezium.height}px solid #3399ff`
    obj.show_trapezium.width = `${obj.code_trapezium.bottomWidth}px`
    obj.show_trapezium.borderLeft = `${obj.code_trapezium.bottomWidth - obj.code_trapezium.topWidth}px solid transparent`
    obj.show_trapezium.borderTop = `none`
    obj.show_trapezium.borderRight = `none`
  },
  [BOTTOM]: obj => {
    obj.show_trapezium.borderTop = `${obj.code_trapezium.height}px solid #3399ff`
    obj.show_trapezium.borderLeft = `${obj.code_trapezium.height / 2}px solid transparent`
    obj.show_trapezium.borderRight = `${obj.code_trapezium.height / 2}px solid transparent`
    obj.show_trapezium.width = `${obj.code_trapezium.bottomWidth}px`
    obj.show_trapezium.borderBottom = `none`
  },
  [TOP]: obj => {
    obj.show_trapezium.borderBottom = `${obj.code_trapezium.height}px solid #3399ff`
    obj.show_trapezium.borderLeft = `${obj.code_trapezium.height / 2}px solid transparent`
    obj.show_trapezium.borderRight = `${obj.code_trapezium.height / 2}px solid transparent`
    obj.show_trapezium.width = `${obj.code_trapezium.bottomWidth}px`
    obj.show_trapezium.borderTop = `none`
  }
}

export default {
  name: 'trapezium',
  data () {
    return {
      code_trapezium: {
        height: 50,
        topWidth: 120,
        bottomWidth: 150,
        type: 1
      },
      show_trapezium: {
        borderBottom: '50px solid #3399ff',
        borderRight: '30px solid transparent',
        borderTop: 'none',
        borderLeft: 'none',
        height: 0,
        width: '150px'
      }
    }
  },
  methods: {
    checkout (index) {
      this.code_trapezium.type = index
    },
    generate () {
      let fn = TRAPEZIUM[this.code_trapezium.type]
      fn && fn(this)
    },
    show_trapezium_code () {
      return `
{
  width: ${this.show_trapezium.width};
  height: 0;
  border-bottom: ${this.show_trapezium.borderBottom};
  border-top: ${this.show_trapezium.borderTop};
  border-left: ${this.show_trapezium.borderLeft};
  border-right: ${this.show_trapezium.borderRight};
}
      `
    }
  }
}
</script>
<style lang="scss" scoped></style>
