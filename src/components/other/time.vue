<template>
  <div class="tools-container fn-clear">
    <div class="tools-box">
      <Input v-model="qrcode.text" :value.sync="qrcode.text" :autosize="{minRows: 5,maxRows: 12}" type="textarea" placeholder="Enter something..." />
      <Button type="success" style="margin-top: 20px;" @click="() => {qrcode.show = qrcode.text}">生成二维码</Button>
    </div>
    <div class="tools-show" v-if="qrcode.show">
    </div>
  </div>
</template>
<script>
// 时间日期转化
export default {
  name: 'time',
  data () {
    return {
      qrcode: {
        text: 'https://m.mall.autohome.com.cn',
        show: null
      }
    }
  },
  components: {}
}
</script>
<style></style>
