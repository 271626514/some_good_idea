<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">
      <Upload
        type="drag"
        action="//localhost:8080/index.php" :before-upload="toBase"
        style="height: 100%;"
        >
        <div style="padding: 20px 0;">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或将文件拖拽到这里上传</p>
        </div>
      </Upload>
    </div>
    <div class="tools-box__show">
      <div class="tools-box__base">
        <img :src="base.url" />
      </div>
    </div>
    <div class="tools-box__code">
      <pre v-highlightjs="show_base_code()" class="tools-box__pre"><code class="css"></code></pre>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ivu-upload, .ivu-upload-drag {
  height: 100%;
}
</style>
<script>
export default {
  name: 'vbase',
  data () {
    return {
      base: {
        url: ''
      }
    }
  },
  methods: {
    toBase (file) {
      let _this = this
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        _this.base.url = this.result
      }
    },
    show_base_code () {
      return `
{
  background-image: url(${this.base.url});
}
      `
    }
  }
}
</script>
