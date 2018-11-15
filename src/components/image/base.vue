<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">
      <Upload action="//jsonplaceholder.typicode.com/posts/" :before-upload="toBase">
        <Button type="primary" icon="ios-cloud-upload-outline">转换图片</Button>
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
<style lang="scss" scoped></style>
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
      const reader = new FileReader
      reader.readAsDataURL(file);
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
