<template>
  <div class='tools-container__large'>
    <div class='tools-box__large'>
      <Upload
        type='drag' action='//localhost:8080/index.php' :before-upload='toBase' :show-upload-list='false' :format="['jpg','jpeg','png']" :max-size='2048' multiple
        :on-format-error='handleFormatError' :on-exceeded-size='handleMaxSize'
        >
        <div style='padding: 20px 0;'>
            <Icon type='ios-cloud-upload' size='52' style='color: #3399ff'></Icon>
            <p>点击或将文件拖拽到这里上传，最多支持图片30张</p>
        </div>
      </Upload>
      <div class='tools-code__large'>
        <pre v-highlightjs='show_sprites_code()' class='tools-box__pre'><code class='css'></code></pre>
      </div>
      <Button type='success' long style='margin-top: 15px;' @click='toImage'>生成图片</Button>
    </div>
    <div class='tools-show__large'>
      <canvas id='canvas' style='min-width: 100%; min-height: 100%;'></canvas>
      <div class='display:none'>
        <img :src='item' class='sprites-img__item' v-for='(item, index) in imgs' :key=index />
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.tools-box__pre {
  height: 330px;
}
.sprites-img__item {
  float: left;
}
</style>
<script>
export default {
  name: 'sprites',
  data () {
    return {
      imgs: []
    }
  },
  methods: {
    toBase (fileList) {
      // let _this = this
      this.img.push(fileList)
      const reader = new FileReader()
      reader.readAsDataURL(fileList)
      reader.onload = function () {
        let res = this.result
        let image = new Image()
        image.src = res
        // _this.imgs.push(res)
        // image.onload = function () {
        //   let _canvas = document.querySelector('#canvas')
        //   let ctx = _canvas.getContext('2d')
        //   ctx.fillStyle = 'rgb(200,0,0)'
        //   _canvas.width = 800
        //   _canvas.height = 300
        //   ctx.drawImage(image, 0, 0, image.width, image.height)
        // }
      }
    },
    toImage (file) {
      let _canvas = document.querySelector('#canvas')
      let ctx = _canvas.getContext('2d')
      ctx.fillStyle = '#FF0000'
      ctx.fillRect(0, 0, 150, 75)
    },
    handleFormatError (file) {
      this.notice('文件格式有误')
    },
    handleMaxSize (file) {
      this.notice('文件大小超过限制')
    },
    notice (txt) {
      this.$Notice.error({
        title: 'ERROR',
        desc: txt
      })
    },
    show_sprites_code () {
      return `
{
  background: url(../sprites.png) no-repeat 0 -110px;
  ${this.imgs.length}
}
      `
    }
  }
}
</script>
