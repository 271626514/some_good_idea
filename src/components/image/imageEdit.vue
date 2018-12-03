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
      </div>
      <div class="tools-box__form fn-clear">
        <div class="tools-box__label fn-left">图片尺寸：</div>
        <div class="tools-box__value fn-right">
          <Slider :value.sync="img.size" v-model="img.size" :min="10" :max="100" :step="5" show-input></Slider>
        </div>
      </div>
    </div>
    <div class='tools-show__large no-bg'>
      <!-- <img :src="img.image" /> -->
      <canvas id='canvas-edit'></canvas>
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
        image: ''
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
        img.onload = function () {
          _this.drawImage(img)
          _this.img.image = this.result
        }
      }
    },
    drawImage (img = this.img.image) {
      // const size = this.img.size / 100
      // const quality = this.img.quality / 100
      const width = img.width * (this.img.size / 100)
      const height = img.height * (this.img.size / 100)
      console.log(width)
      let canvas = document.querySelector('#canvas-edit')
      let cxt = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height
      cxt.drawImage(img, 0, 0, width, height)
      // let _img = canvas.toDataURL('image/png', (this.img.quality / 100))
      // 处理数据
      // var imageData = cxt.getImageData(0, 0, canvas.width, canvas.height);
      // var imageData_length = imageData.data.length / 4;
      // // 解析之后进行算法运算
      // for (var i = 0; i < imageData_length; i++) {
      //   imageData.data[i * 4] = 255 - imageData.data[i * 4];
      //   imageData.data[i * 4 + 1] = 255 - imageData.data[i * 4 + 1];
      //   imageData.data[i * 4 + 2] = 255 - imageData.data[i * 4 + 2];
      // }
      // cxt.putImageData(imageData, 0, 0);
    }
  }
}
</script>
<style lang="scss" scoped></style>
