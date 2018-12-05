<template>
  <div class='tools-container__large'>
    <div class='tools-box__large'>
      <Upload type='drag' action='//localhost:8080/index.php' :before-upload='upload' :show-upload-list='false' :format="['jpg','jpeg','png']">
        <div style='padding: 20px 0;'>
            <Icon type='ios-cloud-upload' size='52' style='color: #3399ff'></Icon>
            <p>上传图片</p>
        </div>
      </Upload>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">图片品质：</div>
        <div class="tools-box__value fn-right">
          <Slider :value.sync="img.quality" v-model="img.quality" :min="0" :max="100" :step="5" show-input></Slider>
        </div>
        <div>图片品质修改仅支持jpg格式</div>
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">图片尺寸：</div>
        <div class="tools-box__value fn-right">
          <Slider :value.sync="img.size" v-model="img.size" :min="10" :max="100" :step="5" show-input></Slider>
        </div>
      </div>
      <div class="tools-box__form fn-clear">
        <Button type='success' long style='margin-top: 15px;' @click='drawImage'>生成</Button>
      </div>
    </div>
    <div class='tools-show__large no-bg'>
      <!-- <canvas id='canvas-edit'></canvas> -->
      <img :src="img.url" id="canvas-wrap" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'imageEdit',
  data () {
    return {
      img: {
        quality: 50,
        size: 75,
        type: 0,
        img: null,
        image: '',
        url: ''
      }
    }
  },
  methods: {
    upload (file) {
      let _this = this
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        let img = new Image()
        img.src = this.result
        _this.img.img = img
        img.onload = function () {
          _this.img.image = this.result
        }
      }
    },
    drawImage () {
      let img = this.img.img
      const quality = this.img.quality / 100
      const width = img.width * (this.img.size / 100)
      const height = img.height * (this.img.size / 100)
      let canvas = document.createElement('canvas')
      let cxt = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height
      cxt.drawImage(img, 0, 0, width, height)
      let picUrl = canvas.toDataURL('image/jpeg', quality)
      this.img.url = picUrl
    }
  }
}
</script>
<style lang="scss" scoped></style>
