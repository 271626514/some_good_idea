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
      <Button type='success' long style='margin-top: 15px;' @click='toImage' :disabled="imgs.length === 0">{{imgs.length ===0 ? '生成图片' : '上传成功，点击生成精灵图'}}</Button>
    </div>
    <div class='tools-show__large'>
      <canvas id='canvas' style='min-width: 100%; min-height: 100%;'></canvas>
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
// 根据图片文件拿到图片实例
const filesToInstances = (files, callback) => {
  const length = files.length
  let instances = []
  let finished = 0

  files.forEach((file, index) => {
    const reader = new FileReader()
    // 把文件读为 dataUrl
    reader.readAsDataURL(file)
    reader.onload = e => {
      const image = new Image()
      image.src = e.target.result
      image.onload = () => {
        // 图片实例化成功后存起来
        instances[index] = image
        finished++
        if (finished === length) {
          callback(instances)
        }
      }
    }
  })
}
// 拼图
const drawImages = (images, callback) => {
  const heights = images.map(item => item.height)
  const widths = images.map(item => item.width)
  const canvas = document.querySelector('#canvas')
  const encoderOptions = 1
  canvas.width = 500
  canvas.height = heights.reduce((total, current) => total + current)
  const context = canvas.getContext('2d')

  let y = 0

  images.forEach((item, index) => {
    const height = heights[index]
    const width = widths[index]
    context.drawImage(item, 0, y, width, height)
    y += height
  })
  callback(canvas.toDataURL('image/png', encoderOptions))
}
export default {
  name: 'sprites',
  data () {
    return {
      imgs: [],
      position: []
    }
  },
  methods: {
    toBase (fileList) {
      this.imgs.push(fileList)
    },
    toImage (file) {
      filesToInstances(this.imgs, instances => {
        drawImages(instances, finalImageUrl => {
          console.info('生成成功')
        })
      })
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
/* 图片根据从左到右，从上至下的顺序排列 */
{
  background: url(../sprites.png) no-repeat 0 -110px;
}
      `
    }
  }
}
</script>
