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
      <!-- <div class="tools-box__form">
        <i-button style="width: 90%;" type="success" long @click="() => generate()">生成</i-button>
      </div> -->
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
    return {
      borderBottom: `${obj.code_trapezium.height}px solid #3399ff`,
      width: `${obj.code_trapezium.bottomWidth}px`,
      borderRight: `${obj.code_trapezium.bottomWidth - obj.code_trapezium.topWidth}px solid transparent`,
      borderTop: `none`,
      borderLeft: `none`
    }
  },
  [BOT_LEFT]: obj => {
    return {
      borderTop: `${obj.code_trapezium.height}px solid #3399ff`,
      width: `${obj.code_trapezium.bottomWidth}px`,
      borderLeft: `${obj.code_trapezium.bottomWidth - obj.code_trapezium.topWidth}px solid transparent`,
      borderBottom: `none`,
      borderRight: `none`
    }
  },
  [BOT_RIGHT]: obj => {
    return {
      borderTop: `${obj.code_trapezium.height}px solid #3399ff`,
      width: `${obj.code_trapezium.bottomWidth}px`,
      borderRight: `${obj.code_trapezium.bottomWidth - obj.code_trapezium.topWidth}px solid transparent`,
      borderBottom: `none`,
      borderLeft: `none`
    }
  },
  [TOP_LEFT]: obj => {
    return {
      borderBottom: `${obj.code_trapezium.height}px solid #3399ff`,
      width: `${obj.code_trapezium.bottomWidth}px`,
      borderLeft: `${obj.code_trapezium.bottomWidth - obj.code_trapezium.topWidth}px solid transparent`,
      borderTop: `none`,
      borderRight: `none`
    }
  },
  [BOTTOM]: obj => {
    return {
      borderTop: `${obj.code_trapezium.height}px solid #3399ff`,
      borderLeft: `${obj.code_trapezium.height / 2}px solid transparent`,
      borderRight: `${obj.code_trapezium.height / 2}px solid transparent`,
      width: `${obj.code_trapezium.bottomWidth}px`,
      borderBottom: `none`
    }
  },
  [TOP]: obj => {
    return {
      borderBottom: `${obj.code_trapezium.height}px solid #3399ff`,
      borderLeft: `${obj.code_trapezium.height / 2}px solid transparent`,
      borderRight: `${obj.code_trapezium.height / 2}px solid transparent`,
      width: `${obj.code_trapezium.bottomWidth}px`,
      borderTop: `none`
    }
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
      }
    }
  },
  computed: {
    show_trapezium () {
      let fn = TRAPEZIUM[this.code_trapezium.type]
      return fn && fn(this)
    }
  },
  methods: {
    checkout (index) {
      this.code_trapezium.type = index
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
