<template>
  <div class="tools-container__large">
    <div class="tools-box__large">
      <Upload
        type="drag"
        action="//localhost:8080/index.php" :before-upload="toBase"
        >
        <div style="padding: 20px 0;">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或将文件拖拽到这里上传</p>
        </div>
      </Upload>
      <div class="tools-code__large">
        <pre v-highlightjs="show_sprites_code()" class="tools-box__pre"><code class="css"></code></pre>
      </div>
      <Button type="success" long style="margin-top: 15px;" @click="toImage">生成图片</Button>
    </div>
    <div class="tools-show__large"></div>
  </div>
</template>
<style lang="scss" scoped>
.tools-box__pre {
  height: 330px;
}
</style>
<script>
export default {
  name: 'sprites',
  data () {
    return {
      item: ''
    }
  },
  methods: {
    toBase () {

    },
    toImage () {

    },
    show_sprites_code () {
      return `
{
  background: url(../sprites.png) no-repeat 0 -110px;
}
      `
    }
  }
}
</script>
