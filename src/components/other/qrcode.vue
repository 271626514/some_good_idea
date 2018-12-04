<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">
      <Input v-model="qrcode.text" :value.sync="qrcode.text" :autosize="{minRows: 5,maxRows: 12}" type="textarea" placeholder="Enter something..." />
      <Button type="success" style="margin-top: 20px;" @click="() => {qrcode.show = qrcode.text}">生成二维码</Button>
    </div>
    <div class="tools-show" v-if="qrcode.show">
      <VueQrcode v-model="qrcode.show" :options="{ size: 350 }"></VueQrcode>
    </div>
  </div>
</template>
<script>
import VueQrcode from '@xkeshi/vue-qrcode'
export default {
  name: 'vqrcode',
  data () {
    return {
      qrcode: {
        text: 'https://m.mall.autohome.com',
        show: null
      }
    }
  },
  components: {
    VueQrcode
  }
}
</script>
<style></style>
