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
      <Button type='success' long style='margin-top: 15px;' @click='toImage' :disabled="imgsFiles.length === 0">{{imgsFiles.length ===0 ? '生成图片' : '上传成功，点击生成精灵图'}}</Button>
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
      const name = file.name
      const size = file.size
      image.src = e.target.result
      image.onload = () => {
        // 图片实例化成功后存起来
        instances[index] = {'img': image, name, size}
        finished++
        if (finished === length) {
          callback(instances)
        }
      }
    }
  })
}
// 拼图
const drawImages = (list, callback) => {
  const heights = list.map(item => item.img.height)
  const widths = list.map(item => item.img.width)
  const maxWidths = list.sort((a, b) => a.img.width - b.img.width).reverse()[0].img.width
  const _list = list.sort((a, b) => a.img.width - b.img.width)
  const canvas = document.querySelector('#canvas')
  const encoderOptions = 1
  const margin = 10
  canvas.width = maxWidths
  canvas.height = heights.reduce((total, current) => {return total + current + margin})
  const context = canvas.getContext('2d')
  let y = 0

  list.forEach((item, index) => {
    const height = item.img.height
    const width = item.img.width
    item.positionY = y
    item.width = width
    item.height = height
    context.drawImage(item.img, 0, y, width, height)
    y += height + margin
  })
  callback(canvas.toDataURL('image/png', encoderOptions))
}
export default {
  name: 'sprites',
  data () {
    return {
      imgsFiles: [],
      imgsData: []
    }
  },
  methods: {
    toBase (file) {
      this.imgsFiles.push(file)
    },
    toImage () {
      filesToInstances(this.imgsFiles, instances => {
        drawImages(instances, finalImageUrl => {
          console.info('生成成功')
          this.imgsData = instances
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
      let html = ` /* 顺序是由上到下 */
      `
      for (let i = 0; i < this.imgsData.length; i++) {
        console.log(this.imgsData)
        let item = this.imgsData[i]
        html += `
.${item.name} {
  width: ${item.width};
  height: ${item.height};
  background: url(../sprites.png) no-repeat 0 -${item.positionY}px;
}
        `
      }
      return html
    }
  }
}
</script>
