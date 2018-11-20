<template>
<div class="tools-container fn-clear">
    <div class="tools-box">
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">清晰度：</div>
        <div class="tools-box__value fn-right">
          <Slider :value.sync="code_blur.deg" v-model="code_blur.deg" :min="0" :max="15" :step="1" show-input></Slider>
        </div>
      </div>
      <!-- <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">反向模糊：</div>
        <div class="tools-box__value fn-right">
          <i-switch size="large" @on-change="()=>{code_blur.type = !code_blur.type}">
            <span slot="open">ON</span>
            <span slot="close">OFF</span>
          </i-switch>
        </div>
      </div> -->
    </div>
    <div class="tools-box__show">
      <div class="tools-box__blur">
        <div class="tools-box__blur-cover" :style="show_blur"></div>
        <div class="tools-box__blur-magnifier"></div>
      </div>
    </div>
    <div class="tools-box__code">
      <pre v-highlightjs="show_blur_code()" class="tools-box__pre"><code class="css"></code></pre>
    </div>
  </div>
  <!-- <div style="background: #002fff42; width: 100%; height: 500px; position:relative;">
    <VueDraggableResizable :w="100" :height="100" v-on:dragging="onDrag" :resizable="false" :parent="true" :grid="[10, 10]">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      </p>
    </VueDraggableResizable>
  </div> -->
</template>
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  name: 'blur',
  data () {
    return {
      code_blur: {
        deg: 3,
        type: false
      }
    }
  },
  methods: {
    onDrag (x, y) {
      console.log(`X is ${x}, Y is ${y}`)
    },
    show_blur_code () {
      if (!this.code_blur.type) {
        return `
.container {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(imgs/blur_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.container:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  filter: ${this.show_blur.filter};
  background: inherit;
  z-index: 1;
}

.magnifier {
  width: 200px;
  height: 160px;
  border-radius: 20px;
  box-shadow: 0 0 10px 6px rgba(0, 0, 0, .5);
  background: inherit;
}
      `
      } else {
        return `
.container {}
        `
      }
    }
  },
  computed: {
    show_blur () {
      return {
        filter: `blur(${this.code_blur.deg}px)`
      }
    }
  },
  components: {
    VueDraggableResizable
  }
}
</script>
<style lang="scss" scoped>
.tools-box__blur {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: {
    image: url(../../assets/imgs/blur_bg.jpg);
    repeat: no-repeat;
    size: cover;
  };

  &-cover {
    width: 105%;
    height: 105%;
    position: absolute;
    left: 0;
    top: 0;
    filter: blur(3px);
    background: inherit;
    z-index: 1;
  }

  &-magnifier {
    width: 200px;
    height: 160px;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px 6px rgba(0, 0, 0, .5);
    z-index: 3;
    background: inherit;
  }
}
</style>
